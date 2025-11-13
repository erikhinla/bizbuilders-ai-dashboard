'use client';

import { useState } from 'react';
import Assessment from '../components/Assessment';

export default function BizBuilders() {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return <Assessment brandContext="bizbuilders" />;
  }

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-700">
            BIZBUILDERS <span className="text-amber-600">AI</span>
          </div>
          <button
            onClick={() => setShowAssessment(true)}
            className="text-slate-600 hover:text-slate-900 font-semibold"
          >
            Assessment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-4 py-2 bg-amber-500/20 rounded-full border border-amber-400/50">
            <span className="text-sm font-semibold">Grow with the Flow</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your tools don't talk.
            <span className="text-amber-200"> Your team can't see straight.</span>
          </h1>

          <p className="text-xl text-amber-100 mb-8 max-w-2xl">
            You've got CRM over there, project management over there, ops docs scattered everywhere. New hire onboarding takes weeks. Teams waste hours context-switching. The Bridge stitches it all together into one seamless workflow. One setup fee. Full ownership. No monthly prayers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => setShowAssessment(true)}
              className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition"
            >
              Get Your Blueprint
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition">
              Learn More
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-2 text-sm text-amber-100">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full border-2 border-amber-900" />
              ))}
            </div>
            <span>Join agencies reclaiming 14-45 hours weekly</span>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">The silo suffocation is real</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-red-50 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold text-red-600 mb-3">What it costs you</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>20+ hours weekly lost to context-switching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Onboarding takes 3-4 weeks instead of days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Nobody has the full picture without three logins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Data gets re-entered. Knowledge walks out the door.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Why traditional solutions fail</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>ERP costs $21k for 40 hours reclaimed (plus pain)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Multiple disconnected tools breed chaos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Monthly subscriptions trap you forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>You own nothing. Ever.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">The Bridge: Your unified operation</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            One seamless workflow. Your CRM, sales pipeline, projects, finance, ops—all connected. All intelligent. All yours.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-amber-200">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">One login. Full picture.</h3>
                <p className="text-slate-600">Your entire operation—CRM, projects, finance, onboarding docs—unified in one interface. No bouncing between tools.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-amber-200">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital organizing baked in.</h3>
                <p className="text-slate-600">Chaos gets organized before optimization happens. Clean structure = clean workflows = fast execution.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-amber-200">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">You own it forever.</h3>
                <p className="text-slate-600">One $22k setup fee. Complete code ownership. No monthly subscriptions. No per-seat pricing that punishes growth.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-amber-200">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Built for your growth.</h3>
                <p className="text-slate-600">As your company scales, your workflows scale with you. No ripping and replacing every 18 months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What companies are seeing</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">31% faster</div>
              <p className="text-slate-700 font-semibold mb-2">delivery timelines</p>
              <p className="text-slate-600 text-sm">Agencies running unified workflows save significant hours per sprint</p>
              <span className="text-xs text-slate-500 mt-3 block">Forrester 2025</span>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">14-45 hrs</div>
              <p className="text-slate-700 font-semibold mb-2">reclaimed weekly</p>
              <p className="text-slate-600 text-sm">Operations teams eliminate context-switching and manual re-entry</p>
              <span className="text-xs text-slate-500 mt-3 block">Client Pattern</span>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">91% revenue lift</div>
              <p className="text-slate-700 font-semibold mb-2">Year 1 average</p>
              <p className="text-slate-600 text-sm">AI-native workflow adoption correlates with significant business growth</p>
              <span className="text-xs text-slate-500 mt-3 block">LinkedIn 2025</span>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">80% cost reduction</div>
              <p className="text-slate-700 font-semibold mb-2">vs. traditional migrations</p>
              <p className="text-slate-600 text-sm">One price, full ownership, no monthly drainage</p>
              <span className="text-xs text-slate-500 mt-3 block">Value Comparison</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stop fragmenting. Start flowing.</h2>
          <p className="text-xl text-amber-100 mb-8">
            $22K setup. Full ownership. Workflows that actually work together.
          </p>
          <button
            onClick={() => setShowAssessment(true)}
            className="px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg hover:shadow-lg transition"
          >
            Take the Assessment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-gray-300 text-center">
        <p>© 2025 BizBuilders.ai. All rights reserved.</p>
      </footer>
    </div>
  );
}
