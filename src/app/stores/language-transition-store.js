import { create } from "zustand";

/**
 * Tracks whether a language swap is currently animating.
 * Components subscribe to drive a brief content fade + veil while
 * `i18n.changeLanguage` flips `dir`/`lang` on the documentElement.
 */
const useLanguageTransitionStore = create((set, get) => ({
  isTransitioning: false,
  start: () => set({ isTransitioning: true }),
  end: () => set({ isTransitioning: false }),
  get: () => get().isTransitioning,
}));

export default useLanguageTransitionStore;
