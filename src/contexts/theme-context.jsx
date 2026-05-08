/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { THEME_STORAGE_KEY, THEME_DARK, THEME_LIGHT } from "@/config/constants";

export const ThemeContext = createContext(undefined);

/**
 * Theme Provider Component
 * Manages application theme state and persistence
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) || THEME_DARK;
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === THEME_DARK,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
