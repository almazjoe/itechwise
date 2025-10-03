import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../components/ArticleLayout.jsx';

const ArticleDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const articles = t('articleDetail.articles', { returnObjects: true }) || {};
  const article = articles[slug];

  if (!article) {
    return (
      <div className="pt-24 pb-20 max-w-3xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-3xl font-semibold">{t('common.articleNotFoundTitle')}</h1>
        <p className="text-muted">{t('common.articleNotFoundDescription')}</p>
        <Link to="/articles" className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm hover:text-text">
          {t('common.backToArticles')}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 space-y-10">
        <ArticleLayout title={article.title} date={article.date}>
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ArticleLayout>
        <Link to="/articles" className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm hover:text-text">
          {t('common.backToArticles')}
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
