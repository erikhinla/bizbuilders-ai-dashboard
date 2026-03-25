'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-mesh text-white relative overflow-hidden">
      {/* Decorative ambient light orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-emerald-600/10 blur-[120px]" />
      </div>

      <nav className="fixed top-0 w-full glass-panel border-x-0 border-t-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tight text-glow">F.L.O.W.</div>
          <div className="flex gap-8 font-medium">
            <Link href="/transformby10x" className="hover:text-purple-400 transition transform hover:-translate-y-0.5">Transform</Link>
            <Link href="/bizbuilders" className="hover:text-amber-400 transition transform hover:-translate-y-0.5">Build</Link>
            <Link href="/bizbot" className="hover:text-emerald-400 transition transform hover:-translate-y-0.5">Market</Link>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-float">
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            F.L.O.W.
          </h1>
          <p className="text-3xl text-slate-300 font-semibold mb-6 tracking-wide">
            Forward Learning & Optimized Workflows
          </p>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            Three interconnected brands. One unified philosophy. Your operation, reimagined.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Transform Card */}
            <Link href="/transformby10x" className="group relative p-1 rounded-2xl bg-gradient-to-b from-purple-500/20 to-transparent hover:from-purple-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-8 glass-panel rounded-xl group-hover:bg-white/10 transition duration-500">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition duration-500 shadow-[0_0_30px_rgba(168,85,247,0.3)] w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-900/50 border border-purple-500/30">
                  🔍
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition">TransformBy10X</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition">Diagnostic audits. Strategic clarity.</p>
              </div>
            </Link>

            {/* Build Card */}
            <Link href="/bizbuilders" className="group relative p-1 rounded-2xl bg-gradient-to-b from-amber-500/20 to-transparent hover:from-amber-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-8 glass-panel rounded-xl group-hover:bg-white/10 transition duration-500">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition duration-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-900/50 border border-amber-500/30">
                  🏗️
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-300 transition">BizBuilders</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition">Workflow blueprints. Unified operations.</p>
              </div>
            </Link>

            {/* Market Card */}
            <Link href="/bizbot" className="group relative p-1 rounded-2xl bg-gradient-to-b from-emerald-500/20 to-transparent hover:from-emerald-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-8 glass-panel rounded-xl group-hover:bg-white/10 transition duration-500">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition duration-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/50 border border-emerald-500/30">
                  🎬
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition">BizBot Marketing</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition">GenAI videos. Proof that works.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-amber-600/10 blur-3xl rounded-full" />
          
          <h2 className="text-4xl font-bold mb-6 text-white relative z-10">One Assessment. Three Brands.</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Start with the AI Edge Assessment. We'll route you to the solution that fits your immediate needs.
          </p>
          <Link href="/transformby10x" className="relative z-10 inline-block px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300">
            Get Your Blueprint
          </Link>
        </div>
      </section>
    </div>
  );
}
