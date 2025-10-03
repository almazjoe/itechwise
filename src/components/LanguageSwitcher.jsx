import React, { useCallback, useEffect, useMemo, useState } from 'react';
import i18n, { setLang } from '../lib/i18n.js';

const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language || i18n.resolvedLanguage || LANGUAGES[0].code,
  );

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleSelectLanguage = useCallback(
    (language) => {
      if (language !== currentLanguage) {
        setLang(language);
      }
    },
    [currentLanguage],
  );

  const buttons = useMemo(
    () =>
      LANGUAGES.map(({ code, label }) => {
        const isActive = currentLanguage === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleSelectLanguage(code)}
            aria-pressed={isActive}
            className={`relative rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              isActive
                ? 'bg-white text-[#0c0d10] shadow-sm shadow-black/20'
                : 'text-muted hover:text-text'
            }`}
          >
            {label}
          </button>
        );
      }),
    [currentLanguage, handleSelectLanguage],
  );

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 shadow-inner shadow-white/10">
      {buttons}
    </div>
  );
};

export default LanguageSwitcher;
