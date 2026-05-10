import { useEffect } from "react";
import useThemeStore from "@app/stores/theme-store";

/**
 * Custom hook to use theme from Zustand store
 * 
 * @returns {Object} Theme state and actions
 * @property {string} theme - Current theme ('dark' or 'light')
 * @property {Function} toggleTheme - Toggle between dark and light theme
 * @property {Function} setTheme - Set specific theme
 * @property {boolean} isDark - Whether current theme is dark
 * @property {boolean} isHydrated - Whether store has been hydrated from localStorage
 */
export const useTheme = () => {
  const { theme, toggleTheme, setTheme, isDark, isHydrated } = useThemeStore();

  // Ensure theme is applied on mount (hydration safety)
  useEffect(() => {
    if (isHydrated && typeof document !== "undefined") {
      document.documentElement.className = theme;
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, isHydrated]);

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: isDark(),
    isHydrated,
  };
};
