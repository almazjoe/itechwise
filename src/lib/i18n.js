import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'itechwise-language';
const FALLBACK_LANGUAGE = 'en';

const getStoredLanguage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored || null;
};

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        cases: 'Case studies',
        articles: 'Articles',
        about: 'About',
        contact: 'Contact',
        cta: 'Get candidates in 48 hours',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        services: 'Услуги',
        cases: 'Кейсы',
        articles: 'Статьи',
        about: 'О компании',
        contact: 'Контакты',
        cta: 'Получите кандидатов за 48 часов',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: getStoredLanguage() || FALLBACK_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== 'undefined') {
  window.document.documentElement.setAttribute('lang', i18n.language);
}

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng);
    window.document.documentElement.setAttribute('lang', lng);
  }
});

export const setLang = (lng) => {
  if (!lng || lng === i18n.language) {
    return;
  }

  i18n.changeLanguage(lng);
};

export default i18n;
