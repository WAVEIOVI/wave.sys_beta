
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import common translations
import enCommon from './locales/en/common.json';
import frCommon from './locales/fr/common.json';
import arCommon from './locales/ar/common.json';

import enManual from './locales/en/company_manual.json';
import frManual from './locales/fr/company_manual.json';
import arManual from './locales/ar/company_manual.json';


// Combine translations for each language
const resources = {
  en: {
    translation: {
      ...enCommon,
      ...enManual,
    }
  },
  fr: {
    translation: {
      ...frCommon,
      ...frManual,
    }
  },
  ar: {
    translation: {
      ...arCommon,
      ...arManual,
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ar'],
    load: 'languageOnly',
    debug: false,
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
