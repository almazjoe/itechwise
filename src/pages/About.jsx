import React from 'react';
import { useTranslation } from 'react-i18next';
import CTABanner from '../components/CTABanner.jsx';

const About = () => {
  const { t } = useTranslation();
  const paragraphs = t('aboutPage.paragraphs', { returnObjects: true }) || [];

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">{t('aboutPage.label')}</p>
          <h1 className="text-4xl font-semibold">{t('aboutPage.heading')}</h1>
          <p className="text-muted max-w-3xl">{t('aboutPage.intro')}</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-muted leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

export default About;
