import React from 'react';
import Spline from '@splinetool/react-spline';
import { Globe2 } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-start justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-white/10 backdrop-blur">
            <Globe2 className="w-5 h-5" />
          </div>
          <p className="text-sm uppercase tracking-widest text-white/80">Vision 2100</p>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          2100: Natural Balance for Earth Vision
          <span className="block text-lg sm:text-2xl md:text-3xl font-normal text-white/80 mt-3">Gamma → Delta → Omega Generations</span>
        </h1>
        <p className="mt-6 max-w-2xl text-white/80">
          A century blueprint uniting 200 nations to restore ecological balance, elevate human potential,
          and secure a future where technology and nature thrive together.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#timeline" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">Explore Timeline</a>
          <a href="#pillars" className="px-5 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition">Core Pillars</a>
        </div>
      </div>
    </section>
  );
}
