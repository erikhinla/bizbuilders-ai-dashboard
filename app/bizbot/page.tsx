'use client';

import { useState } from 'react';
import Assessment from '../components/Assessment';

export default function BizBotMarketing() {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return <Assessment brandContext="bizbot" />;
  }

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-600">
            BIZBOT <span className="text-emerald-700 font-light">MARKETING</span>
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-400/50">
            <span className="text-sm font-semibold">Organize. Optimize. Mobilize.</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your pitch materials take weeks.
            <span className="text-emerald-200"> Your competitors are closing deals.</span>
          </h1>

          <p className="text-xl text-emerald-100 mb-8 max-w-2xl">
            Traditional video production costs $5-15K and takes 2-4 weeks. Your competitors found a way to spin GenAI variants in 48 hours. Polished :30 sizzle reels that prove your process works. Higher close rates. Lower friction. No sweat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => setShowAssessment(true)}
              className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:shadow-lg hover:shadow-white/50 transition"
            >
              Get Your Pitch Advantage
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition">
              Learn More
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-2 text-sm text-emerald-100">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full border-2 border-emerald-900" />
              ))}
            </div>
            <span>Join sales teams closing 27% more deals</span>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Speed kills in sales</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-red-50 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">2-4 weeks</div>
              <p className="text-slate-700">traditional video turnaround. Opportunity dies in the wait.</p>
            </div>

            <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-2">$5-15K</div>
              <p className="text-slate-700">per traditional production. That's one sizzle reel, locked in.</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">27% higher</div>
              <p className="text-slate-700">close rates when you can respond instantly with proof</p>
              <span className="text-xs text-slate-500 mt-3 block">Capgemini 2025</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-8">
            <p className="text-slate-700 font-semibold mb-2">The real cost of slow:</p>
            <p className="text-slate-600">While you're waiting for your video, prospects are vetting your competitor. By the time your materials land, they've already decided. Speed isn't nice-to-have. It's survival.</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">GenAI videos. 48 hours. Proof your process works.</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We spin polished :30 sizzle reels from your workflows. LoRA variants. ComfyUI flows. Your exact voice. This isn't generic AI fluff—it's proof that your operation is tight.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-emerald-200">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Built from your workflow</h3>
                <p className="text-slate-600">Not a stock template. Variants pulled from your actual process, voice, and brand DNA. Authentic, polished, fast.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-emerald-200">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Proof that seals deals</h3>
                <p className="text-slate-600">Prospects see your operation is systematic, professional, tight. It's not sales fluff—it's evidence your process works.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-emerald-200">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">48 hours to deployment</h3>
                <p className="text-slate-600">Not 4 weeks. While your competitor is still planning, you're closing. Speed compounds.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 bg-white rounded-lg border border-emerald-200">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">$5K add-on to your workflow</h3>
                <p className="text-slate-600">Not standalone. Integrates into your entire F.L.O.W. system. Process first, video second, results third.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What's actually happening in sales</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">+27% close rate</div>
              <p className="text-slate-700 font-semibold mb-2">with polished pitch materials</p>
              <p className="text-slate-600 text-sm">Sales teams that can respond fast to opportunities close significantly more deals</p>
              <span className="text-xs text-slate-500 mt-3 block">Capgemini 2025</span>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">73% of tasks</div>
              <p className="text-slate-700 font-semibold mb-2">are automation candidates</p>
              <p className="text-slate-600 text-sm">GenAI for pitch variants, follow-ups, and asset spins is already standard practice</p>
              <span className="text-xs text-slate-500 mt-3 block">Capgemini 2025</span>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">31% shorter</div>
              <p className="text-slate-700 font-semibold mb-2">sales cycles</p>
              <p className="text-slate-600 text-sm">Companies with polished, on-brand materials shorten from decision to signature</p>
              <span className="text-xs text-slate-500 mt-3 block">Forrester 2025</span>
            </div>

            <div className="p-8 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">10x faster</div>
              <p className="text-slate-700 font-semibold mb-2">than traditional production</p>
              <p className="text-slate-600 text-sm">48 hours vs. 2-4 weeks. By the time competitors start planning, you're already deployed.</p>
              <span className="text-xs text-slate-500 mt-3 block">Industry Average</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Info */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Video packages</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg border-2 border-emerald-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">:30 Sizzle Reel</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-4">$7,875</div>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>One polished :30 sizzle reel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>LoRA + ComfyUI variants included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Ready in 48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>All formats for deployment</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
                Get Started
              </button>
            </div>

            <div className="p-8 bg-white rounded-lg border-2 border-emerald-600 relative">
              <div className="absolute -top-3 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-4">Full Package</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-4">$11,785</div>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>:60 second main reel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>:30 second variant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>:15 second teaser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Multiple LoRA + ComfyUI flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>All platforms ready</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stop waiting. Start closing.</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Polished pitch videos that prove your process works, deployed in 48 hours.
          </p>
          <button
            onClick={() => setShowAssessment(true)}
            className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:shadow-lg transition"
          >
            Take the Assessment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-gray-300 text-center">
        <p>© 2025 BizBot Marketing. All rights reserved.</p>
      </footer>
    </div>
  );
}
