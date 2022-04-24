import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'querystring'],
    },
    lng: 'pl',
    whitelist: ['pl', 'en'],
    fallbackLng: 'pl',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
