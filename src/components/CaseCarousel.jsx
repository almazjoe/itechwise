import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CaseCard = ({ title, summary, metric, slug, itemLabel, viewDetailsLabel }) => (
  <motion.article
    whileHover={{ rotateX: 3, rotateY: -3, y: -6 }}
    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col gap-4"
  >
    <p className="text-xs uppercase tracking-[0.4em] text-muted">{itemLabel}</p>
    <h3 className="text-xl font-semibold leading-snug">{title}</h3>
    <p className="text-sm text-muted flex-1">{summary}</p>
    <div className="flex items-center justify-between text-sm">
      <span className="text-brand font-semibold">{metric}</span>
      <Link to={`/cases/${slug}`} className="text-sm font-medium text-text/80 hover:text-text">
        {viewDetailsLabel}
      </Link>
    </div>
  </motion.article>
);

const CaseCarousel = () => {
  const { t } = useTranslation();
  const cases = t('caseCarousel.items', { returnObjects: true }) || [];
  const itemLabel = t('caseCarousel.itemLabel');
  const viewDetailsLabel = t('common.viewDetails');

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">{t('caseCarousel.label')}</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold max-w-xl">{t('caseCarousel.heading')}</h2>
          </div>
          <Link to="/cases" className="inline-flex text-sm font-semibold text-text/80 hover:text-text">
            {t('caseCarousel.cta')}
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseStudy) => (
            <CaseCard
              key={caseStudy.slug}
              {...caseStudy}
              itemLabel={itemLabel}
              viewDetailsLabel={viewDetailsLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseCarousel;
