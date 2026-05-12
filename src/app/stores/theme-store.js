import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { THEME_STORAGE_KEY, THEME_DARK, THEME_LIGHT } from "@app/config/constants";

const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: THEME_DARK,
      isHydrated: false,

      setTheme: (newTheme) => {
        set({ theme: newTheme });
        applyThemeToDOM(newTheme);
      },

      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
        set({ theme: newTheme });
        applyThemeToDOM(newTheme);
      },

      setHydrated: () => {
        set({ isHydrated: true });
      },

      isDark: () => get().theme === THEME_DARK,
    }),
    {
      name: THEME_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialState: (state) => ({ theme: state.theme }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyThemeToDOM(state.theme);
          state.setHydrated();
        }
      },
    }
  )
);

function applyThemeToDOM(theme) {
  if (typeof document !== "undefined") {
    document.documentElement.className = theme;
    document.documentElement.setAttribute("data-theme", theme);
  }
}

export default useThemeStore;
