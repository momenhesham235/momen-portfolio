import { useTheme } from "@/hooks/use-theme";
import { THEME_DARK, THEME_LIGHT } from "@/config/constants";

/**
 * Theme Toggle Component
 * Example component showing how to use the Zustand theme store
 */
export default function ThemeToggle() {
  const { theme, toggleTheme, isDark, isHydrated } = useTheme();

  // Prevent hydration mismatch by not rendering until hydrated
  if (!isHydrated) {
    return (
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        disabled
      >
        <span className="theme-icon">🌓</span>
      </button>
    );
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? THEME_LIGHT : THEME_DARK} mode`}
      aria-pressed={isDark}
    >
      <span className="theme-icon" role="img" aria-hidden="true">
        {isDark ? "🌙" : "☀️"}
      </span>
      <span className="sr-only">
        Current theme: {theme}. Click to toggle.
      </span>
    </button>
  );
}
