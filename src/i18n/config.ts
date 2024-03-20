import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ns1en from './en/ns1.json';
import ns2en from './en/ns2.json';
import ns1fr from './fr/ns1.json';
import ns2fr from './fr/ns2.json';

export const defaultNS = 'ns1';

i18next.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      ns1en,
      ns2en,
      ns1fr,
      ns2fr,
    },
  },
  defaultNS,
});