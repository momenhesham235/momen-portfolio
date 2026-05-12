import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@locales/en/common.json";
import enPortfolio from "@locales/en/portfolio.json";
import arCommon from "@locales/ar/common.json";
import arPortfolio from "@locales/ar/portfolio.json";

export const LANGUAGE_STORAGE_KEY = "language";
export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "ar"];
export const RTL_LANGUAGES = ["ar"];

const resources = {
  en: { common: enCommon, portfolio: enPortfolio },
  ar: { common: arCommon, portfolio: arPortfolio },
};

const getInitialLanguage = () => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;
};

export const isRTL = (lang) => RTL_LANGUAGES.includes(lang);

export const applyLanguageToDOM = (lang) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    ns: ["common", "portfolio"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    returnNull: false,
    react: { useSuspense: false },
  });

applyLanguageToDOM(i18n.language);

i18n.on("languageChanged", (lang) => {
  applyLanguageToDOM(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }
});

export default i18n;
