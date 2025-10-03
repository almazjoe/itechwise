import React from 'react';
import { useTranslation } from 'react-i18next';

const ArticleLayout = ({ title, date, children }) => {
  const { t } = useTranslation();

  return (
    <article className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">{t('articleLayout.label')}</p>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">{title}</h1>
        <p className="text-xs text-muted">{date}</p>
      </header>
      <div className="space-y-4 text-muted leading-relaxed text-sm sm:text-base">
        {children}
      </div>
    </article>
  );
};

export default ArticleLayout;
