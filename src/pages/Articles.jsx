import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogList from '../components/BlogList.jsx';

const Articles = () => {
  const { t } = useTranslation();
  const articles = t('articlesPage.articles', { returnObjects: true }) || [];

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">{t('articlesPage.label')}</p>
          <h1 className="text-4xl font-semibold">{t('articlesPage.heading')}</h1>
          <p className="text-muted">{t('articlesPage.description')}</p>
        </header>
        <BlogList articles={articles} />
      </section>
    </div>
  );
};

export default Articles;
