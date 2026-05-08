import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";

/**
 * Custom hook to use theme context
 * @returns {Object} Theme context value with theme, toggleTheme, and isDark
 * @throws {Error} If used outside ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
