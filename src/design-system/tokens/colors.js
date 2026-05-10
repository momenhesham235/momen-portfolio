/**
 * Color tokens — 60-30-10 rule
 *
 * 60% → primary dark backgrounds & surfaces
 * 30% → secondary neutral/supporting colors
 * 10% → accent gold highlights & interactions
 */

export const colors = {
  // ── 60% Primary: backgrounds & surfaces ──────────────────────────────────
  primary: {
    background: "#000000",
    surface: "rgb(24, 24, 27)",
    elevated: "#1b1b1b",
    header: "rgb(39, 39, 42)",
    input: "#111",
    overlay: "rgba(24, 24, 27, 0.88)",
  },

  // ── 30% Secondary: neutral / supporting ──────────────────────────────────
  secondary: {
    border: "rgba(63, 63, 70, 0.4)",
    muted: "rgb(161, 161, 170)",
    hover: "#d4d4d8",
    blue: "rgb(93, 188, 252)",
  },

  // ── 10% Accent: gold interactions & highlights ───────────────────────────
  accent: {
    default: "darkgoldenrod",
    light: "rgb(184, 134, 11)",
    hex: "#B8860B",
  },

  // ── Text hierarchy ────────────────────────────────────────────────────────
  text: {
    primary: "rgb(244, 244, 245)",
    secondary: "rgb(161, 161, 170)",
  },

  // ── Semantic status colors ────────────────────────────────────────────────
  semantic: {
    success: "rgb(34, 197, 94)",
    error: "rgb(239, 68, 68)",
    warning: "rgb(234, 179, 8)",
    info: "rgb(93, 188, 252)",
  },

  // ── Light theme overrides ─────────────────────────────────────────────────
  light: {
    primary: {
      background: "rgb(250, 250, 250)",
      surface: "rgb(255, 255, 255)",
      elevated: "rgb(245, 245, 245)",
      header: "rgb(253, 253, 253)",
      input: "#fff",
      overlay: "rgba(255, 255, 255, 0.9)",
    },
    secondary: {
      border: "rgba(202, 202, 202, 0.518)",
      muted: "rgb(82, 82, 91)",
      hover: "#333",
      blue: "rgb(0, 149, 246)",
    },
    accent: {
      default: "rgb(184, 134, 11)",
      light: "rgb(184, 134, 11)",
      hex: "#B8860B",
    },
    text: {
      primary: "rgb(39, 39, 42)",
      secondary: "rgb(82, 82, 91)",
    },
  },
};
