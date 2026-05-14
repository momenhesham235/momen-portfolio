import { useTranslation } from "react-i18next";
import { isRTL, SUPPORTED_LANGUAGES } from "@app/config/i18n";
import useLanguageTransitionStore from "@app/stores/language-transition-store";

const FADE_OUT_MS = 180;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Language hook — exposes current language, direction, and switchers.
 *
 * `changeLanguage`/`toggleLanguage` orchestrate a brief opacity fade
 * around `i18n.changeLanguage` so the `dir`/`lang` flip (and the
 * resulting layout snap between LTR ↔ RTL) happens while the content
 * is invisible. Respects `prefers-reduced-motion` — that path swaps
 * instantly, no animation.
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
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    if (lang === language) return;

    // Ignore rapid double-clicks while a transition is in flight.
    const { isTransitioning, start, end } =
      useLanguageTransitionStore.getState();
    if (isTransitioning) return;

    if (prefersReducedMotion()) {
      i18n.changeLanguage(lang);
      return;
    }

    start();

    window.setTimeout(() => {
      i18n.changeLanguage(lang);

      // Two rAFs: first commits the React re-render triggered by the
      // i18n event, second commits layout after the `dir` flip. Only
      // then do we fade the content back in.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => end());
      });
    }, FADE_OUT_MS);
  };

  const toggleLanguage = () => {
    const idx = SUPPORTED_LANGUAGES.indexOf(language);
    const next = SUPPORTED_LANGUAGES[(idx + 1) % SUPPORTED_LANGUAGES.length];
    changeLanguage(next);
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
