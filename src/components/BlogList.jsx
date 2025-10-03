import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogList = ({ articles = [] }) => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <article key={article.slug} className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">{t('blogList.label')}</p>
          <h3 className="text-xl font-semibold leading-snug">{article.title}</h3>
          <p className="text-sm text-muted flex-1">{article.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted">
            <span>{article.date}</span>
            <Link to={`/articles/${article.slug}`} className="text-sm font-medium text-text/80 hover:text-text">
              {t('common.readArticle')}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
