'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AssessmentResponse {
  q1_current_state: string;
  q2_ideal_state: string;
  q3_past_attempts: string;
  q4_solution_preference: string;
  q5_additional_notes: string;
}

export default function Assessment({ brandContext = 'generic' }: { brandContext?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState<AssessmentResponse>({
    q1_current_state: '',
    q2_ideal_state: '',
    q3_past_attempts: '',
    q4_solution_preference: '',
    q5_additional_notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleResponse = (field: keyof AssessmentResponse, value: string) => {
    setResponses(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    
    // Calculate routing based on responses
    const routingData = {
      ...responses,
      timestamp: new Date().toISOString(),
      brandContext,
    };

    // Determine which brand to route to
    let targetBrand = 'transformby10x'; // default
    if (responses.q4_solution_preference === 'organized') {
      targetBrand = 'bizbuilders';
    } else if (responses.q4_solution_preference === 'allin') {
      targetBrand = 'bizbuilders';
    } else if (responses.q4_solution_preference === 'proveit') {
      targetBrand = 'bizbot';
    }

    // Store assessment response and redirect
    sessionStorage.setItem('assessmentResponse', JSON.stringify(routingData));
    
    // Redirect to results page with routing info
    router.push(`/assessment-results?brand=${targetBrand}&solution=${responses.q4_solution_preference}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {step} of 5</span>
          <span>{Math.round((step / 5) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Question 1: Current State */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Where are you starting?</h2>
            <p className="text-lg text-slate-600">Be honest—no judgment here. We're trying to understand your actual situation.</p>
          </div>

          <div className="space-y-3">
            {[
              "Everything's scattered across platforms and nobody has the full picture",
              "We've got tools but they don't talk to each other",
              "We're organized but moving at half-speed",
              "We're functional but leaving money on the table",
            ].map((option, idx) => (
              <label key={idx} className="flex items-start p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition">
                <input
                  type="radio"
                  name="q1"
                  value={option}
                  checked={responses.q1_current_state === option}
                  onChange={(e) => handleResponse('q1_current_state', e.target.value)}
                  className="mt-1 w-4 h-4"
                />
                <span className="ml-3 text-base text-slate-700">{option}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!responses.q1_current_state}
            className="w-full mt-6 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next →
          </button>
        </div>
      )}

      {/* Question 2: Ideal State */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What's the dream?</h2>
            <p className="text-lg text-slate-600">Paint it for us—what does your operation actually look like when it's working?</p>
          </div>

          <textarea
            value={responses.q2_ideal_state}
            onChange={(e) => handleResponse('q2_ideal_state', e.target.value)}
            placeholder="Tell us your vision. No polished pitch needed—just real."
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none resize-none h-32 text-base"
          />

          <div className="flex gap-3">
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 bg-gray-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!responses.q2_ideal_state}
              className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Question 3: Past Attempts */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What's already been tried?</h2>
            <p className="text-lg text-slate-600">We need to know what didn't work so we don't repeat it.</p>
          </div>

          <div className="space-y-3">
            {[
              'Band-Aids and quick fixes that fell apart',
              'Traditional ERP or CRM systems (too expensive, too rigid)',
              'Scattered automation across different platforms',
              "Haven't really attempted anything systematic yet",
              'Everything—still nothing solved the core problem',
            ].map((option, idx) => (
              <label key={idx} className="flex items-start p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition">
                <input
                  type="radio"
                  name="q3"
                  value={option}
                  checked={responses.q3_past_attempts === option}
                  onChange={(e) => handleResponse('q3_past_attempts', e.target.value)}
                  className="mt-1 w-4 h-4"
                />
                <span className="ml-3 text-base text-slate-700">{option}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 bg-gray-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!responses.q3_past_attempts}
              className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Question 4: Solution Preference (Budget/Scope) */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What's your next move?</h2>
            <p className="text-lg text-slate-600">Which resonates? This helps us match you with the right approach.</p>
          </div>

          <div className="space-y-4">
            {/* Quick Win */}
            <label className="flex items-start p-5 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 transition">
              <input
                type="radio"
                name="q4"
                value="quickwin"
                checked={responses.q4_solution_preference === 'quickwin'}
                onChange={(e) => handleResponse('q4_solution_preference', e.target.value)}
                className="mt-1 w-4 h-4"
              />
              <div className="ml-4 flex-1">
                <div className="font-semibold text-slate-900">Quick Diagnostic</div>
                <p className="text-sm text-slate-600 mt-1">A focused audit showing exactly where you're bleeding time and money.</p>
                <div className="mt-2 text-lg font-bold text-emerald-600">$2-5K | 1-2 weeks</div>
              </div>
            </label>

            {/* Organized & Flowing */}
            <label className="flex items-start p-5 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition">
              <input
                type="radio"
                name="q4"
                value="organized"
                checked={responses.q4_solution_preference === 'organized'}
                onChange={(e) => handleResponse('q4_solution_preference', e.target.value)}
                className="mt-1 w-4 h-4"
              />
              <div className="ml-4 flex-1">
                <div className="font-semibold text-slate-900">Organized & Flowing</div>
                <p className="text-sm text-slate-600 mt-1">Complete workflow blueprint with integration, digital organizing, and ownership. Your operation actually gets unified.</p>
                <div className="mt-2 text-lg font-bold text-amber-600">$10-15K | 3-4 weeks</div>
              </div>
            </label>

            {/* Prove It Works */}
            <label className="flex items-start p-5 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 transition">
              <input
                type="radio"
                name="q4"
                value="proveit"
                checked={responses.q4_solution_preference === 'proveit'}
                onChange={(e) => handleResponse('q4_solution_preference', e.target.value)}
                className="mt-1 w-4 h-4"
              />
              <div className="ml-4 flex-1">
                <div className="font-semibold text-slate-900">Prove It Works</div>
                <p className="text-sm text-slate-600 mt-1">GenAI pitch videos in 48 hours. Show prospects your process works, close deals faster.</p>
                <div className="mt-2 text-lg font-bold text-emerald-600">$5-12K | 2-3 days</div>
              </div>
            </label>

            {/* All-In Transformation */}
            <label className="flex items-start p-5 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition">
              <input
                type="radio"
                name="q4"
                value="allin"
                checked={responses.q4_solution_preference === 'allin'}
                onChange={(e) => handleResponse('q4_solution_preference', e.target.value)}
                className="mt-1 w-4 h-4"
              />
              <div className="ml-4 flex-1">
                <div className="font-semibold text-slate-900">All-In Transformation</div>
                <p className="text-sm text-slate-600 mt-1">Full system—unified workflows, GenAI production, complete ownership, ongoing optimization. Everything moves together.</p>
                <div className="mt-2 text-lg font-bold text-purple-600">$22K+ | Strategic partnership</div>
              </div>
            </label>

            {/* Evaluating */}
            <label className="flex items-start p-5 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
              <input
                type="radio"
                name="q4"
                value="evaluating"
                checked={responses.q4_solution_preference === 'evaluating'}
                onChange={(e) => handleResponse('q4_solution_preference', e.target.value)}
                className="mt-1 w-4 h-4"
              />
              <div className="ml-4 flex-1">
                <div className="font-semibold text-slate-900">Still Evaluating</div>
                <p className="text-sm text-slate-600 mt-1">Not sure yet—want to learn more before committing to a direction.</p>
              </div>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 bg-gray-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!responses.q4_solution_preference}
              className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Question 5: Additional Context */}
      {step === 5 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Anything we missed?</h2>
            <p className="text-lg text-slate-600">If there's something important that didn't come up, tell us now. We're listening.</p>
          </div>

          <textarea
            value={responses.q5_additional_notes}
            onChange={(e) => handleResponse('q5_additional_notes', e.target.value)}
            placeholder="Add any context we should know. Can be short or detailed—your call."
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none resize-none h-32 text-base"
          />

          <div className="flex gap-3">
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 bg-gray-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitted}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition"
            >
              {submitted ? 'Submitting...' : 'Get Your Results →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
