/**
 * Shadow tokens
 * Elevation scale + glow effects for the dark premium aesthetic.
 */

export const shadows = {
  // Elevation scale
  sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
  md: "0 4px 6px rgba(0, 0, 0, 0.4)",
  lg: "0 10px 25px rgba(0, 0, 0, 0.5)",
  xl: "0 20px 50px rgba(0, 0, 0, 0.6)",

  // Semantic slots
  container: "1px 1px 40px rgba(49, 49, 49, 0.292)",
  card: "0 4px 20px rgba(0, 0, 0, 0.3)",
  header: "0 2px 20px rgba(0, 0, 0, 0.4)",

  // Glow effects (gold accent)
  glow: {
    gold: "0 0 40px rgba(184, 134, 11, 0.35)",
    goldStrong: "0 0 60px rgba(184, 134, 11, 0.5)",
    goldRing: "0 0 0 3px rgba(184, 134, 11, 0.25)",
    blue: "0 0 20px rgba(93, 188, 252, 0.3)",
  },

  // Focus rings
  focus: "0 0 0 2px var(--accent-color)",
};
