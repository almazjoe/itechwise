import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm.jsx';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">{t('contactPage.label')}</p>
          <h1 className="text-4xl font-semibold">{t('contactPage.heading')}</h1>
          <p className="text-muted">{t('contactPage.description')}</p>
        </header>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
