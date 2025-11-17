import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json"
import pl from "./locales/pl/translation.json";

const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language.startsWith("pl") ? "pl" : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    lng: savedLang || browserLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
