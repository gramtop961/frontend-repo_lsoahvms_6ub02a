import React from 'react';
import { Target, PlayCircle, Leaf, Users } from 'lucide-react';

const metrics = [
  {
    label: 'Population Stewardship',
    icon: Users,
    value: 2100,
    unit: 'AD target',
    progress: 62,
    caption: 'Trajectory aligned to ~1B global population by 2100 with rights-first policies.'
  },
  {
    label: 'Zero Hunger Index',
    icon: Leaf,
    value: 78,
    unit: '% resolved',
    progress: 78,
    caption: 'Regenerative agriculture + fair distribution reduces scarcity and waste.'
  },
  {
    label: 'Creative Economy Growth',
    icon: PlayCircle,
    value: 11.4,
    unit: '% YoY',
    progress: 64,
    caption: 'Entertainment and learning industries become primary engines of prosperity.'
  },
  {
    label: 'Global Alignment',
    icon: Target,
    value: 200,
    unit: 'nations',
    progress: 71,
    caption: 'Cooperative frameworks for climate, health, and infrastructure build-out.'
  }
];

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Milestones & Metrics</h2>
            <p className="text-white/70 mt-2 max-w-2xl">Transparent, evolving indicators showing how close we are to a balanced civilization.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map(({ label, icon: Icon, value, unit, progress, caption }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-semibold">{label}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{value}<span className="text-base font-medium text-white/70 ml-1">{unit}</span></div>
                </div>
              </div>
              <ProgressBar value={progress} />
              <p className="text-white/70 text-sm mt-3">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
