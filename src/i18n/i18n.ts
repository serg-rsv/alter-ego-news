import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getInitialLanguage } from '../utils/getInitialLanguage';
import commonEn from './locales/en/common.json';
import navigationEn from './locales/en/navigation.json';
import contentEn from './locales/en/content.json';
import commonUk from './locales/uk/common.json';
import navigationUk from './locales/uk/navigation.json';
import contentUk from './locales/uk/content.json';

const resources = {
  en: {
    common: commonEn,
    navigation: navigationEn,
    content: contentEn,
  },
  uk: {
    common: commonUk,
    navigation: navigationUk,
    content: contentUk,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
