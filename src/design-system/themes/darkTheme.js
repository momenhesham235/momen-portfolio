import { colors } from "../tokens/colors";
import { typography } from "../tokens/typography";
import { spacing } from "../tokens/spacing";
import { shadows } from "../tokens/shadows";
import { radius } from "../tokens/radius";
import { breakpoints } from "../tokens/breakpoints";

export const darkTheme = {
  name: "dark",

  colors: {
    background: colors.primary.background,
    surface: colors.primary.surface,
    elevated: colors.primary.elevated,
    header: colors.primary.header,
    input: colors.primary.input,
    overlay: colors.primary.overlay,

    border: colors.secondary.border,
    muted: colors.secondary.muted,
    hover: colors.secondary.hover,
    blue: colors.secondary.blue,

    accent: colors.accent.default,
    accentLight: colors.accent.light,
    accentHex: colors.accent.hex,

    textPrimary: colors.text.primary,
    textSecondary: colors.text.secondary,

    ...colors.semantic,
  },

  typography,
  spacing,
  shadows,
  radius,
  breakpoints,
};
