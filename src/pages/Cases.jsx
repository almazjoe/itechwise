import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    slug: 'defi-market-maker',
    industry: 'Web3 / Trading',
    title: 'DeFi market maker scaling engineering pods',
    summary:
      'Rebuilt their derivatives exchange squad with senior Rust engineers, quants and DevOps talent across Europe and LATAM.',
    result: '12 hires in 6 weeks',
  },
  {
    slug: 'igaming-platform',
    industry: 'iGaming',
    title: 'iGaming platform accelerates mobile roadmap',
    summary:
      'Delivered a blended squad of Kotlin and Swift developers alongside QA and PMs to launch a loyalty experience in record time.',
    result: '4 hires in 30 days',
  },
  {
    slug: 'ai-fraud-detection',
    industry: 'AI / FinCrime',
    title: 'AI fraud detection company enters MENA',
    summary:
      'Provided bilingual data scientists, compliance leads and product managers to support regulated market entry.',
    result: '5 hires in 45 days',
  },
];

const Cases = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Case studies</p>
          <h1 className="text-4xl font-semibold">Predictable hiring outcomes for complex tech teams</h1>
          <p className="text-muted">
            Explore how ITechWise supports protocol launches, platform rebuilds and new market entries with vetted technical talent.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((item) => (
            <article key={item.slug} className="glass-panel rounded-3xl border border-white/10 p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-muted">{item.industry}</p>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{item.summary}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-brand font-semibold">{item.result}</span>
                <Link to={`/cases/${item.slug}`} className="text-sm font-medium text-text/80 hover:text-text">
                  View case →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cases;
