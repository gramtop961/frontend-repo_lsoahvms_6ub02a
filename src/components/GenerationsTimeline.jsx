import React from 'react';
import { Rocket, Building2, Infinity } from 'lucide-react';

const phases = [
  {
    key: 'gamma',
    title: 'Gamma Generation',
    years: '2040 — 2054',
    icon: Rocket,
    color: 'from-cyan-400 to-blue-500',
    points: [
      'Lead multinational space exploration and resource mapping',
      'Build off-world research outposts and green propulsion',
      'Solve cross-border challenges for 200 nations (data, climate, orbit traffic)'
    ],
  },
  {
    key: 'delta',
    title: 'Delta Generation',
    years: '2055 — 2069',
    icon: Building2,
    color: 'from-amber-400 to-orange-500',
    points: [
      'Design and construct planetary megastructures (orbital arrays, sunshades, green grids)',
      'Scale circular cities and carbon-negative industries',
      'Codify global standards for resilient infrastructure'
    ],
  },
  {
    key: 'omega',
    title: 'Omega Generation',
    years: '2070 — ∞',
    icon: Infinity,
    color: 'from-emerald-400 to-teal-500',
    points: [
      'Global unification compacts for environment and peace',
      'Abundance economics focused on self-actualization and learning',
      'Long-horizon stewardship: oceans, forests, biosphere, and beyond'
    ],
  },
];

export default function GenerationsTimeline() {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-neutral-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Generation Roadmap</h2>
        <p className="text-white/70 mb-10 max-w-3xl">
          Three arcs guide progress from exploration to construction to unification — aligning technology,
          ecology, and culture to serve every nation on Earth.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map(({ key, title, years, icon: Icon, color, points }) => (
            <div key={key} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className={`inline-flex items-center gap-3 px-3 py-2 rounded-full bg-gradient-to-r ${color} text-black font-semibold mb-5`}>
                <Icon className="w-5 h-5" />
                <span>{title}</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-white/60 mb-4">{years}</p>
              <ul className="space-y-3 text-white/80 list-disc list-inside">
                {points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
