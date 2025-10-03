import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CaseDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const cases = t('caseDetail.cases', { returnObjects: true }) || {};
  const caseStudy = cases[slug];

  if (!caseStudy) {
    return (
      <div className="pt-24 pb-20 max-w-3xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-3xl font-semibold">{t('common.caseNotFoundTitle')}</h1>
        <p className="text-muted">{t('common.caseNotFoundDescription')}</p>
        <Link to="/cases" className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm hover:text-text">
          {t('common.backToCases')}
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
          {t('common.backToAllCases')}
        </Link>
      </article>
    </div>
  );
};

export default CaseDetail;
