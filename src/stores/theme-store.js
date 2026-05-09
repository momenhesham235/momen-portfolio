import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { THEME_STORAGE_KEY, THEME_DARK, THEME_LIGHT } from "@/config/constants";

/**
 * Theme Store using Zustand
 * Manages application theme state with localStorage persistence
 * 
 * Features:
 * - Persistent theme storage
 * - Hydration-safe initialization
 * - Automatic DOM updates
 * - Clean separation of state and actions
 */

const useThemeStore = create(
  persist(
    (set, get) => ({
      // State
      theme: THEME_DARK,
      isHydrated: false,

      // Actions
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

      // Computed values
      isDark: () => get().theme === THEME_DARK,
    }),
    {
      name: THEME_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialState: (state) => ({ theme: state.theme }), // Only persist theme, not isHydrated
      onRehydrateStorage: () => (state) => {
        // Apply theme immediately after rehydration
        if (state) {
          applyThemeToDOM(state.theme);
          state.setHydrated();
        }
      },
    }
  )
);

/**
 * Apply theme to DOM
 * Updates document.documentElement with theme class
 */
function applyThemeToDOM(theme) {
  if (typeof document !== "undefined") {
    document.documentElement.className = theme;
    document.documentElement.setAttribute("data-theme", theme);
  }
}

/**
 * Initialize theme before React renders
 * This function should be called in index.html to prevent FOUC
 */
export function initializeTheme() {
  if (typeof window === "undefined") return;

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const theme = stored ? JSON.parse(stored).state.theme : THEME_DARK;
    applyThemeToDOM(theme);
  } catch (error) {
    // Fallback to dark theme if parsing fails
    applyThemeToDOM(THEME_DARK);
  }
}

export default useThemeStore;
