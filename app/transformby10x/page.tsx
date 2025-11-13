'use client';

import { useState } from 'react';
import Assessment from '../components/Assessment';

export default function TransformBy10X() {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return <Assessment brandContext="transformby10x" />;
  }

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-slate-900">Transform</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">By10X</span>
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/50">
            <span className="text-sm font-semibold">AI-Powered. Human-Led. FLOW-Defined.</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your operations are running the same loops
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> every quarter</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Teams shift. Tools multiply. Frameworks blur. And somehow you're still leaving money on the table. We don't build recommendations that sit in decks. We craft audits that pinpoint exactly where your operation bleeds efficiency, then deploy AI hybrids that fix it—measurable in weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => setShowAssessment(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition"
            >
              Get Your Blueprint
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition">
              Learn More
            </button>
          </div>

          {/* Social Proof Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-slate-900" />
              ))}
            </div>
            <span>Join 47+ companies reclaiming their operations</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">The dysfunction is expensive</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-red-50 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">68%</div>
              <p className="text-slate-700">of enterprises hemorrhage 20+ hours weekly to process fragmentation alone</p>
              <span className="text-xs text-slate-500 mt-3 block">Gartner 2025</span>
            </div>

            <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-2">$21K</div>
              <p className="text-slate-700">average spend on ERP migrations for just 40 hours of savings (with 10% pain tax)</p>
              <span className="text-xs text-slate-500 mt-3 block">Deloitte Analysis</span>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">10x slower</div>
              <p className="text-slate-700">response time when decisions require context-switching across fragmented systems</p>
              <span className="text-xs text-slate-500 mt-3 block">Industry Average</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Scalpel-sharp audits. Real solutions.</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We cut through chaos to pinpoint bottlenecks, then deploy AI hybrids tailored to your operation. Not generic. Not theoretical. Measurable.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Diagnostic</h3>
                <p className="text-slate-600">We audit your current operation—where time goes, where money leaks, where intelligence gets lost between systems.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Blueprint</h3>
                <p className="text-slate-600">We design AI hybrids that connect your existing tools, eliminate manual work, and create institutional memory that doesn't walk out the door.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Leverage</h3>
                <p className="text-slate-600">You own it all. The strategy, the workflows, the intelligence infrastructure. No licensing. No vendor lock-in. Permanent competitive advantage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What companies like yours are seeing</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">+35-65 hrs</div>
              <p className="text-slate-700 font-semibold mb-2">reclaimed weekly</p>
              <p className="text-slate-600 text-sm">Agencies running unified workflows via systematic optimization</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">30% velocity spike</div>
              <p className="text-slate-700 font-semibold mb-2">in 90 days</p>
              <p className="text-slate-600 text-sm">McKinsey: Companies that systematized operations saw measurable improvements</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">+27% close rate</div>
              <p className="text-slate-700 font-semibold mb-2">for sales teams</p>
              <p className="text-slate-600 text-sm">When your operation is tight, prospects see it. Capgemini 2025.</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">91% revenue lift</div>
              <p className="text-slate-700 font-semibold mb-2">Year 1 average</p>
              <p className="text-slate-600 text-sm">AI-adopting SMBs running FLOW-like workflows. LinkedIn 2025.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stop rebuilding chaos</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get clear on where your operation bleeds efficiency. Get ownership of the fix.
          </p>
          <button
            onClick={() => setShowAssessment(true)}
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-lg transition"
          >
            Take the Assessment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-gray-300 text-center">
        <p>© 2025 TransformBy10X. All rights reserved.</p>
      </footer>
    </div>
  );
}
