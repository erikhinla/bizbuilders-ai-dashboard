'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function AssessmentResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [assessmentData, setAssessmentData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem('assessmentResponse');
    if (stored) {
      setAssessmentData(JSON.parse(stored));
    }
  }, []);

  const brand = searchParams.get('brand') || 'transformby10x';
  const solution = searchParams.get('solution');

  const getBrandConfig = (b: string) => {
    const configs: Record<string, any> = {
      transformby10x: {
        name: 'TransformBy10X',
        color: 'purple',
        icon: '🔍',
        heading: 'You need the diagnostic',
        description: 'Your operation is fragmented. Before you can optimize, you need clarity on where the dysfunction lives.',
        offer: 'AI-Powered Audit & Strategy',
        price: '$2,997',
        cta: 'Schedule Your Audit',
        benefits: [
          'Scalpel-sharp diagnosis of your operation',
          'AI hybrid recommendations tailored to your business',
          'Strategic roadmap for exponential improvement',
          'Ownership of all strategy and frameworks'
        ]
      },
      bizbuilders: {
        name: 'BizBuilders.ai',
        color: 'amber',
        icon: '🏗️',
        heading: 'You need the flow',
        description: 'Your operation needs systematic integration. The Bridge stitches your entire operation into one seamless workflow.',
        offer: 'The Bridge: Unified Operation System',
        price: '$22,000',
        cta: 'Build Your Bridge',
        benefits: [
          'Complete workflow unification (CRM, Projects, Finance, Ops)',
          'Digital organizing included',
          'Full code ownership forever',
          'No monthly subscriptions, no per-seat pricing'
        ]
      },
      bizbot: {
        name: 'BizBot Marketing',
        color: 'emerald',
        icon: '🎬',
        heading: 'You need the proof',
        description: 'Your pitch materials are slowing you down. Get polished GenAI videos that prove your process works, deployed in 48 hours.',
        offer: 'GenAI Pitch Video Advantage',
        price: '$5K-12K',
        cta: 'Get Your Pitch Videos',
        benefits: [
          ':30, :60, and :15 video variants',
          'LoRA and ComfyUI flows tailored to your brand',
          '48-hour deployment',
          'Proven to increase close rates 27%'
        ]
      }
    };
    return configs[b] || configs.transformby10x;
  };

  const config = getBrandConfig(brand);

  const getColorClasses = (c: string) => {
    const colors: Record<string, any> = {
      purple: {
        bg: 'bg-gradient-to-br from-purple-50 to-white',
        border: 'border-purple-200',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        accent: 'bg-purple-100 text-purple-800'
      },
      amber: {
        bg: 'bg-gradient-to-br from-amber-50 to-white',
        border: 'border-amber-200',
        text: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700',
        accent: 'bg-amber-100 text-amber-800'
      },
      emerald: {
        bg: 'bg-gradient-to-br from-emerald-50 to-white',
        border: 'border-emerald-200',
        text: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        accent: 'bg-emerald-100 text-emerald-800'
      }
    };
    return colors[c] || colors.purple;
  };

  const colors = getColorClasses(config.color);

  if (!mounted || !assessmentData) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {/* Results Header */}
      <section className={`py-20 px-6 ${colors.bg} border-b-2 ${colors.border}`}>
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">{config.icon}</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{config.heading}</h1>
          <p className="text-xl text-slate-600 mb-8">{config.description}</p>

          <div className={`p-6 ${colors.accent} rounded-lg border-2 ${colors.border}`}>
            <p className="text-sm text-slate-600 mb-2">Your recommended solution:</p>
            <div className="text-2xl font-bold text-slate-900 mb-4">{config.offer}</div>
            <div className={`text-3xl font-bold ${colors.text} mb-4`}>{config.price}</div>
          </div>
        </div>
      </section>

      {/* Assessment Summary */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Your assessment summary</h2>

          <div className="space-y-6 mb-12">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-slate-500 font-semibold mb-2">Current situation</p>
              <p className="text-slate-900 font-semibold">{assessmentData.q1_current_state}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-slate-500 font-semibold mb-2">Your vision</p>
              <p className="text-slate-700">{assessmentData.q2_ideal_state}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-slate-500 font-semibold mb-2">What's been tried</p>
              <p className="text-slate-700">{assessmentData.q3_past_attempts}</p>
            </div>

            {assessmentData.q5_additional_notes && (
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-slate-500 font-semibold mb-2">Additional context</p>
                <p className="text-slate-700">{assessmentData.q5_additional_notes}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why This Solution */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Why {config.name} is your fit</h2>

          <div className="space-y-4">
            {config.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${config.button.split(' ')[0]}`}>
                  ✓
                </div>
                <p className="text-slate-700 pt-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{config.heading}</h2>
          <p className="text-lg text-gray-300 mb-8">
            Based on your assessment, we know exactly where to focus. Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 ${config.button} text-white font-semibold rounded-lg transition`}>
              {config.cta}
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">What happens next</h2>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">We'll review your assessment</h3>
                <p className="text-slate-600">This tells us everything about your operation and where you need support.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">We'll propose the exact scope</h3>
                <p className="text-slate-600">No guessing. Based on your situation, we'll outline exactly what {config.name} does for you.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">We get to work</h3>
                <p className="text-slate-600">Once you're in, we move fast. Your operation doesn't wait, neither do we.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-gray-300 text-center">
        <p>© 2025 F.L.O.W. Ecosystem. Assessment delivered by TransformBy10X.ai</p>
      </footer>
    </div>
  );
}

export default function AssessmentResults() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AssessmentResultsContent />
    </Suspense>
  );
}
