'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur border-b border-white/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">F.L.O.W.</div>
          <div className="flex gap-6">
            <Link href="/transformby10x" className="hover:text-purple-300">Transform</Link>
            <Link href="/bizbuilders" className="hover:text-amber-300">Build</Link>
            <Link href="/bizbot" className="hover:text-emerald-300">Market</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">F.L.O.W.</h1>
          <p className="text-2xl text-gray-300 mb-6">Forward Learning & Optimized Workflows</p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Three interconnected brands. One unified philosophy. Your operation, reimagined.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/transformby10x" className="p-8 bg-purple-600/20 border border-purple-400/50 rounded-lg hover:bg-purple-600/30 transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">TransformBy10X</h3>
              <p className="text-gray-300">Diagnostic audits. Strategic clarity.</p>
            </Link>

            <Link href="/bizbuilders" className="p-8 bg-amber-600/20 border border-amber-400/50 rounded-lg hover:bg-amber-600/30 transition">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-2">BizBuilders</h3>
              <p className="text-gray-300">Workflow blueprints. Unified operations.</p>
            </Link>

            <Link href="/bizbot" className="p-8 bg-emerald-600/20 border border-emerald-400/50 rounded-lg hover:bg-emerald-600/30 transition">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-2">BizBot Marketing</h3>
              <p className="text-gray-300">GenAI videos. Proof that works.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">One Assessment. Three Brands.</h2>
          <p className="text-lg text-gray-300 mb-8">
            Start with the AI Edge Assessment. We'll route you to the solution that fits your immediate needs.
          </p>
          <Link href="/transformby10x" className="inline-block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:shadow-lg transition">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
