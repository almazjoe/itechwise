import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CTABanner from '../components/CTABanner.jsx';

const Services = () => {
  const { t } = useTranslation();
  const services = t('servicesPage.services', { returnObjects: true }) || [];

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">{t('servicesPage.label')}</p>
          <h1 className="text-4xl font-semibold">{t('servicesPage.heading')}</h1>
          <p className="text-muted">{t('servicesPage.description')}</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-3xl border border-white/10 p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
              <div className="flex items-center gap-2 text-sm text-brand">
                <CheckCircle2 className="h-4 w-4" />
                {t('common.includedInEveryEngagement')}
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
