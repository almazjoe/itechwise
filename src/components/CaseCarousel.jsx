import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cases = [
  {
    slug: 'defi-market-maker',
    title: 'DeFi market maker scaling engineering pods',
    summary:
      'Placed 12 senior Rust and quant engineers across EU and LATAM to launch a new derivatives exchange.',
    metric: '12 hires · 6 weeks',
  },
  {
    slug: 'igaming-platform',
    title: 'iGaming platform accelerates mobile roadmap',
    summary: 'Delivered a squad of Kotlin and Swift engineers to ship a new loyalty experience in 10 weeks.',
    metric: '4 hires · 30 days',
  },
  {
    slug: 'ai-fraud-detection',
    title: 'AI fraud detection company enters MENA',
    summary: 'Sourced bilingual data scientists and compliance leaders to launch regulated operations.',
    metric: '5 hires · 45 days',
  },
];

const CaseCard = ({ title, summary, metric, slug }) => (
  <motion.article
    whileHover={{ rotateX: 3, rotateY: -3, y: -6 }}
    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col gap-4"
  >
    <p className="text-xs uppercase tracking-[0.4em] text-muted">Case study</p>
    <h3 className="text-xl font-semibold leading-snug">{title}</h3>
    <p className="text-sm text-muted flex-1">{summary}</p>
    <div className="flex items-center justify-between text-sm">
      <span className="text-brand font-semibold">{metric}</span>
      <Link to={`/cases/${slug}`} className="text-sm font-medium text-text/80 hover:text-text">
        View details →
      </Link>
    </div>
  </motion.article>
);

const CaseCarousel = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Proof</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold max-w-xl">
              Case studies that show predictable delivery for complex tech teams
            </h2>
          </div>
          <Link to="/cases" className="inline-flex text-sm font-semibold text-text/80 hover:text-text">
            Browse all cases
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.slug} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseCarousel;
