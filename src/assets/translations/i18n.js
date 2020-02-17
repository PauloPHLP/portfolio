import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import ptBR from "./locales/ptBR/translation.json";
import enUS from "./locales/enUS/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false
    },
    resources: {
      enUS: {
        translations: enUS
      },
      ptBR: {
        translations: ptBR
      }
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;