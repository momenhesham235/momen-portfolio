/**
 * Typography tokens
 * Consistent type scale, weights, leading, and tracking.
 */

export const typography = {
  fontFamily: {
    sans: '"Roboto", sans-serif',
    mono: '"Roboto Mono", monospace',
  },

  // Modular type scale (base 16px)
  fontSize: {
    xs: "0.75rem",   // 12px — captions
    sm: "0.875rem",  // 14px — small
    base: "1rem",    // 16px — body
    lg: "1.125rem",  // 18px
    xl: "1.25rem",   // 20px
    "2xl": "1.5rem", // 24px — h3
    "3xl": "1.875rem",// 30px
    "4xl": "2.3rem", // ~37px — h2
    "5xl": "3rem",   // 48px — h1
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeight: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  letterSpacing: {
    tight: "-0.025em",
    normal: "0.025em",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em",
  },

  // Semantic scale — maps to heading and body roles
  scale: {
    h1: { size: "3rem",    weight: 700, lineHeight: 1.2 },
    h2: { size: "2.3rem",  weight: 700, lineHeight: 1.3 },
    h3: { size: "1.5rem",  weight: 600, lineHeight: 1.4 },
    body: { size: "1rem",  weight: 400, lineHeight: 1.6 },
    small: { size: "0.875rem", weight: 400, lineHeight: 1.5 },
    caption: { size: "0.75rem", weight: 400, lineHeight: 1.4 },
  },
};
