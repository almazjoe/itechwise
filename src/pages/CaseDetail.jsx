import React from 'react';
import { useParams, Link } from 'react-router-dom';

const caseStudies = {
  'defi-market-maker': {
    title: 'DeFi market maker scaling engineering pods',
    date: '2024',
    industry: 'Web3 / Trading',
    body: [
      'A leading algorithmic trading firm expanding into decentralized derivatives needed to rebuild its core engineering pod after a strategic pivot.',
      'ITechWise partnered closely with the CTO to translate hiring needs into scorecards covering Rust, C++, Solana, latency optimization and quant risk awareness.',
      'Within two weeks we delivered a rolling pipeline of senior engineers and DevOps specialists across EU and LATAM, with technical deep-dives recorded for the client team.',
      'The squad shipped the new derivatives exchange within six weeks, enabling 30% faster market expansion and improved liquidity provisioning.',
    ],
    result: '12 hires in 6 weeks',
  },
  'igaming-platform': {
    title: 'iGaming platform accelerates mobile roadmap',
    date: '2023',
    industry: 'iGaming',
    body: [
      'An established iGaming operator launched a loyalty product that demanded net-new mobile capabilities.',
      'We deployed an embedded recruiter, sourcer and technical screener to collaborate with the VP of Product and mobile engineering lead.',
      'The team delivered Kotlin, Swift, QA automation and product management talent in under 30 days, aligned to regulated market requirements.',
      'Launch velocity improved by 40% with retention targets surpassed within the first quarter.',
    ],
    result: '4 hires in 30 days',
  },
  'ai-fraud-detection': {
    title: 'AI fraud detection company enters MENA',
    date: '2024',
    industry: 'AI / FinCrime',
    body: [
      'A fraud detection scale-up expanded into MENA and required bilingual data science and compliance leadership talent.',
      'ITechWise mapped out target markets in UAE, KSA and Egypt, aligning compensation with local trends and regulatory expectations.',
      'We sourced multilingual data scientists, risk managers and product leaders experienced with AML frameworks and high-scale transaction data.',
      'The company launched MENA operations on schedule with immediate wins in enterprise fintech partnerships.',
    ],
    result: '5 hires in 45 days',
  },
};

const CaseDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <div className="pt-24 pb-20 max-w-3xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-3xl font-semibold">Case study not found</h1>
        <p className="text-muted">Explore other success stories from our clients.</p>
        <Link to="/cases" className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm hover:text-text">
          Back to cases
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-6 glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 space-y-6">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">{caseStudy.industry}</p>
          <h1 className="text-4xl font-semibold leading-tight">{caseStudy.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{caseStudy.date}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-brand font-semibold">{caseStudy.result}</span>
          </div>
        </header>
        <div className="space-y-4 text-muted leading-relaxed">
          {caseStudy.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Link to="/cases" className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm hover:text-text">
          Back to all cases
        </Link>
      </article>
    </div>
  );
};

export default CaseDetail;
