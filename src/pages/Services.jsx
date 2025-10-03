import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import CTABanner from '../components/CTABanner.jsx';

const services = [
  {
    title: 'Executive and specialist search',
    description:
      'From CTOs and Heads of Engineering to Staff Rust engineers and Lead Data Scientists, we run bespoke searches with rigorous technical assessments.',
  },
  {
    title: 'Embedded recruitment squads',
    description:
      'Deploy full-cycle recruiters, sourcers and coordinators that integrate with your team, ATS and cadence to accelerate hiring sprints.',
  },
  {
    title: 'Market intelligence',
    description:
      'Salary benchmarks, location strategy and competitor mapping to inform hiring plans for new regions or product lines.',
  },
  {
    title: 'Candidate experience programs',
    description:
      'Craft employer narratives, outreach and communication flows that resonate with senior technical talent in competitive markets.',
  },
];

const Services = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Services</p>
          <h1 className="text-4xl font-semibold">Recruitment solutions tailored to high-growth tech companies</h1>
          <p className="text-muted">
            We design search strategies that work for Web3 protocols, fintech scale-ups, iGaming operators and AI labs. Every engagement is customized to your hiring velocity and budget.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-3xl border border-white/10 p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              <div className="flex items-center gap-2 text-sm text-brand">
                <CheckCircle2 className="h-4 w-4" />
                Included in every engagement
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

export default Services;
