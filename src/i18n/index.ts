import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';

const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  },
  tr: {
    translation: tr
  }
};

function setDocumentLangAndDir(lang: string) {
  const base = lang.split('-')[0];
  document.documentElement.lang = base;
  document.documentElement.dir = base === 'ar' || base === 'he' || base === 'fa' || base === 'ur' ? 'rtl' : 'ltr';
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    supportedLngs: ['de', 'en', 'tr'],
    nonExplicitSupportedLngs: true,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

setDocumentLangAndDir(i18n.language);

i18n.on('languageChanged', (lng) => {
  setDocumentLangAndDir(lng);
});

export default i18n;