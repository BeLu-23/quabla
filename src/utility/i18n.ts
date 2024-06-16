import i18n from 'i18next';
// import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en/translation';
import deTranslation from '../locales/de/translation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    debug: false,
    resources: {
      en: {
        translation: enTranslation
      },
      de: {
        translation: deTranslation
      }
    },
    interpolation: {
      escapeValue: false,
    }
  });