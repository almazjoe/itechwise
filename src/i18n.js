import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

const STORAGE_KEY = 'itechwiselang';
const FALLBACK_LANG = 'en';
const supportedLanguages = Object.keys(resources);

const isSupportedLanguage = (lang) => supportedLanguages.includes(lang);

const getStoredLanguage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLanguage(stored) ? stored : null;
  } catch (error) {
    return null;
  }
};

const normaliseLanguageCode = (lang) => {
  if (!lang) {
    return null;
  }

  const code = lang.toLowerCase().split('-')[0];
  return isSupportedLanguage(code) ? code : null;
};

const getNavigatorLanguage = () => {
  if (typeof navigator === 'undefined') {
    return null;
  }

  const candidateLanguages = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language];

  for (const lang of candidateLanguages) {
    const normalised = normaliseLanguageCode(lang);
    if (normalised) {
      return normalised;
    }
  }

  return null;
};

const initialLanguage = getStoredLanguage() ?? getNavigatorLanguage() ?? FALLBACK_LANG;

const applyDocumentLanguage = (lang) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lang);
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: FALLBACK_LANG,
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    applyDocumentLanguage(i18n.language);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, i18n.language);
      } catch (error) {
        /* noop */
      }
    }
  });

const setLang = (lang) => {
  if (!isSupportedLanguage(lang)) {
    return Promise.resolve(i18n.language);
  }

  return i18n.changeLanguage(lang).then((newLang) => {
    applyDocumentLanguage(newLang);

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, newLang);
      } catch (error) {
        /* noop */
      }
    }

    return newLang;
  });
};

export { setLang, i18n };
export default i18n;
