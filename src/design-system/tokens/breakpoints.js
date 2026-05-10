/**
 * Breakpoint tokens
 * Mobile-first design. Use `up.*` for min-width queries.
 */

export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",

  // CSS media query strings — for JS-driven media (e.g. matchMedia)
  up: {
    xs: "(min-width: 480px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },

  down: {
    xs: "(max-width: 480px)",
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(max-width: 1280px)",
  },
};
