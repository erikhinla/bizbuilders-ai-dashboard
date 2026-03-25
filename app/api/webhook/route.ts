import { NextResponse } from 'next/server';

// Attio API Helper
async function attioRequest(method: string, endpoint: string, body?: any) {
  const ATTIO_API_KEY = process.env.ATTIO_API_KEY;
  if (!ATTIO_API_KEY) throw new Error('ATTIO_API_KEY is not set');

  const url = `https://api.attio.com/v2/objects/${endpoint}`;
  
  const options: RequestInit = {
    method,
    headers: {
      'Authorization': `Bearer ${ATTIO_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  
  // Return null if 404 (e.g. searching for a record that doesn't exist)
  if (response.status === 404 && method === 'GET') return null;

  if (!response.ok) {
    const errorData = await response.text();
    console.error(`Attio API Error on ${endpoint}:`, errorData);
    throw new Error(`Attio error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Verify this is an end-of-call report from Vapi
    if (payload.message?.type !== 'end-of-call-report') {
      return NextResponse.json({ received: true, status: 'ignored' });
    }

    const { message } = payload;
    const phone = message.call?.customer?.number;
    const transcript = message.artifact?.transcript || '';
    
    // Extract Function Results (The data Vapi extracted during the call)
    const functionResults = payload.message?.functionCallResults || [];
    
    // Default fallback values
    let practiceData: any = {};
    let signalData: any = {};
    let flagsData: any = {};
    let assessmentData: any = {};

    functionResults.forEach((fn: any) => {
      if (fn.name === 'capture_practice_data') practiceData = fn.result || {};
      if (fn.name === 'set_entry_signal') signalData = fn.result || {};
      if (fn.name === 'add_soft_flag') flagsData = fn.result || {};
      if (fn.name === 'complete_assessment') assessmentData = fn.result || {};
    });

    const est_monthly_revenue = (practiceData.monthly_patients || 0) * (practiceData.avg_treatment_value || 0);

    // 1. Create Person in Attio
    const personResponse = await attioRequest('POST', 'people/records', {
      data: {
        values: {
          name: [{ first_name: 'MAVA', last_name: 'Lead' }],
          phone_numbers: [{ phone_number: phone }],
          role: [{ value: 'Owner/Founder' }],
          authority_level: [{ value: 'Ultimate' }],
          decision_maker: [{ value: true }]
        }
      }
    });

    // 2. Create Company in Attio
    const companyResponse = await attioRequest('POST', 'companies/records', {
      data: {
        values: {
          name: [{ value: `Practice - ${phone}` }],
          practice_type: [{ value: 'MedSpa' }],
          lifecycle_state: [{ value: assessmentData.disqualified ? 'Archived' : 'Diagnosed' }],
          lead_source: [{ value: 'Landing Page' }],
          disqualified: [{ value: !!assessmentData.disqualified }],
          primary_contact: [{ target_object: 'people', target_record_id: personResponse.data.id.record_id }]
        }
      }
    });

    const companyId = companyResponse.data.id.record_id;

    // 3. Create Engagement in Attio
    const engagementResponse = await attioRequest('POST', 'engagements/records', {
      data: {
        values: {
          company: [{ target_object: 'companies', target_record_id: companyId }],
          status: [{ value: 'Active' }],
          current_workflow: [{ value: 'MAVA_ASSESSMENT' }],
          start_date: [{ value: new Date().toISOString() }],
          risk_flag: [{ value: false }]
        }
      }
    });

    const engagementId = engagementResponse.data.id.record_id;

    // 4. Create Immutable MAVA Session in Attio
    await attioRequest('POST', 'mava_sessions/records', {
      data: {
        values: {
          engagement: [{ target_object: 'engagements', target_record_id: engagementId }],
          timestamp: [{ value: message.call?.endedAt || new Date().toISOString() }],
          monthly_patients: [{ value: practiceData.monthly_patients || 0 }],
          avg_treatment_value: [{ value: practiceData.avg_treatment_value || 0 }],
          estimated_monthly_revenue: [{ value: est_monthly_revenue }],
          signal_score: [{ value: assessmentData.signal_score || 0 }],
          summary_output: [{ value: assessmentData.summary || 'No summary generated.' }],
          locked: [{ value: true }]
        }
      }
    });

    console.log(`Successfully synced MAVA session for ${phone}`);

    // If qualified, trigger ROI Modeling state advance
    if (!assessmentData.disqualified) {
      await attioRequest('PATCH', `engagements/records/${engagementId}`, {
        data: {
          values: {
            current_workflow: [{ value: 'ROI_MODELING' }]
          }
        }
      });
      // Future OPAL or Twilio integration for SMS can be fired from here!
    }

    return NextResponse.json({ success: true, processed: true });

  } catch (error: any) {
    console.error('Webhook Processing Error:', error.message);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
