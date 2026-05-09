/**
 * Theme Initialization Script
 * 
 * This script runs BEFORE React hydrates to prevent FOUC (Flash of Unstyled Content).
 * It reads the theme from localStorage and applies it to the DOM immediately.
 * 
 * CRITICAL: This must be a blocking script in <head> to prevent flash.
 */

(function initTheme() {
  const THEME_STORAGE_KEY = "theme";
  const THEME_DARK = "dark";
  const THEME_LIGHT = "light";

  try {
    // Read from localStorage
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    
    let theme = THEME_DARK; // Default theme
    
    if (stored) {
      try {
        // Parse Zustand's persisted state structure
        const parsed = JSON.parse(stored);
        theme = parsed.state?.theme || THEME_DARK;
      } catch (parseError) {
        // If parsing fails, use default
        theme = THEME_DARK;
      }
    }

    // Apply theme immediately to prevent flash
    document.documentElement.className = theme;
    document.documentElement.setAttribute("data-theme", theme);
  } catch (error) {
    // Fallback to dark theme if anything fails
    document.documentElement.className = THEME_DARK;
    document.documentElement.setAttribute("data-theme", THEME_DARK);
  }
})();
