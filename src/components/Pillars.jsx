import React from 'react';
import { Target, PlayCircle, Leaf, Users, Shield, LineChart, Globe2, Heart } from 'lucide-react';

const pillars = [
  {
    title: 'National Interests for 200 Countries',
    icon: Globe2,
    desc: 'Shared research, open data, and equitable tech transfer to solve climate, health, and energy needs across all nations.'
  },
  {
    title: 'Birth Rate Stewardship',
    icon: Target,
    desc: 'Cooperative policies that respect human rights while guiding global population toward ~1B by 2100 for ecological balance.'
  },
  {
    title: 'Entertainment-Driven Economy',
    icon: PlayCircle,
    desc: 'A flourishing creative sector as social pressure eases; people redirect energy from pronatalism toward self-actualization.'
  },
  {
    title: 'Zero Hunger, Zero Greed',
    icon: Heart,
    desc: 'Food security through regenerative agriculture, fair distribution, and anti-waste systems to end scarcity-driven exploitation.'
  },
  {
    title: 'Planetary Regeneration',
    icon: Leaf,
    desc: 'Restore forests, oceans, and soils; price externalities fairly; reward biodiversity stewardship at global scale.'
  },
  {
    title: 'Human Dignity & Safety',
    icon: Shield,
    desc: 'Universal access to health, learning, and safety; transparent governance ensures civil liberties and trust.'
  },
  {
    title: 'Talent for Self-Actualization',
    icon: Users,
    desc: 'Education and lifelong learning pipelines empower each person to pursue mastery, meaning, and creative contribution.'
  },
  {
    title: 'Outcome Transparency',
    icon: LineChart,
    desc: 'Open dashboards for progress on climate, hunger, equity, and culture so citizens can steer collective priorities.'
  }
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Pillars</h2>
        <p className="text-white/70 mb-10 max-w-3xl">
          Principles that align technology, ecology, and culture — making abundance compatible with a living planet.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
