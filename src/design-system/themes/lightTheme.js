import { colors } from "../tokens/colors";
import { typography } from "../tokens/typography";
import { spacing } from "../tokens/spacing";
import { shadows } from "../tokens/shadows";
import { radius } from "../tokens/radius";
import { breakpoints } from "../tokens/breakpoints";

export const lightTheme = {
  name: "light",

  colors: {
    background: colors.light.primary.background,
    surface: colors.light.primary.surface,
    elevated: colors.light.primary.elevated,
    header: colors.light.primary.header,
    input: colors.light.primary.input,
    overlay: colors.light.primary.overlay,

    border: colors.light.secondary.border,
    muted: colors.light.secondary.muted,
    hover: colors.light.secondary.hover,
    blue: colors.light.secondary.blue,

    accent: colors.light.accent.default,
    accentLight: colors.light.accent.light,
    accentHex: colors.light.accent.hex,

    textPrimary: colors.light.text.primary,
    textSecondary: colors.light.text.secondary,

    ...colors.semantic,
  },

  typography,
  spacing,
  shadows,
  radius,
  breakpoints,
};
