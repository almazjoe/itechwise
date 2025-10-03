import React from 'react';
import { Clock, Cpu, Globe2, ShieldCheck } from 'lucide-react';

const values = [
  {
    title: '48-hour delivery',
    description: 'Shortlists in two business days backed by a 7M+ candidate graph.',
    icon: Clock,
  },
  {
    title: 'Deep technical screening',
    description: 'Rust, Go, backend, DevOps, data, mobile and executive talent interviews.',
    icon: Cpu,
  },
  {
    title: 'Global coverage',
    description: '18+ languages with reach across EU, MENA, APAC, LATAM and North America.',
    icon: Globe2,
  },
  {
    title: 'Risk-free hiring',
    description: 'Success-fee only with 2–3-month replacement guarantee built in.',
    icon: ShieldCheck,
  },
];

const ValueGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ title, description, icon: Icon }) => (
            <article key={title} className="glass-panel rounded-3xl p-6 flex flex-col gap-4 border border-white/10">
              <div className="h-12 w-12 rounded-2xl bg-white/5 text-brand flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-text">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;
