import { useTranslation } from "react-i18next";
import {
  isRTL,
  SUPPORTED_LANGUAGES,
} from "@app/config/i18n";

/**
 * Language hook — exposes current language, direction, and switchers.
 *
 * @returns {Object}
 * @property {string} language        Current language code (e.g. "en", "ar")
 * @property {boolean} isRTL          Whether the current language is RTL
 * @property {string} dir             "rtl" | "ltr"
 * @property {string[]} supported     List of supported language codes
 * @property {Function} changeLanguage  Set a specific language code
 * @property {Function} toggleLanguage  Cycle to the next supported language
 */
export const useLanguage = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const rtl = isRTL(language);

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  };

  const toggleLanguage = () => {
    const idx = SUPPORTED_LANGUAGES.indexOf(language);
    const next = SUPPORTED_LANGUAGES[(idx + 1) % SUPPORTED_LANGUAGES.length];
    i18n.changeLanguage(next);
  };

  return {
    language,
    isRTL: rtl,
    dir: rtl ? "rtl" : "ltr",
    supported: SUPPORTED_LANGUAGES,
    changeLanguage,
    toggleLanguage,
  };
};
