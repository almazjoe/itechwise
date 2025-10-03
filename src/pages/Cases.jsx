import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cases = () => {
  const { t } = useTranslation();
  const caseStudies = t('casesPage.caseStudies', { returnObjects: true }) || [];

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">{t('casesPage.label')}</p>
          <h1 className="text-4xl font-semibold">{t('casesPage.heading')}</h1>
          <p className="text-muted">{t('casesPage.description')}</p>
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
                  {t('common.viewCase')}
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
