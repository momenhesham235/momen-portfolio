/**
 * AppProviders
 * Central wrapper for all app-level context providers.
 * Add new providers here; keep the tree shallow.
 *
 * Currently Zustand manages theme state without a React context,
 * so this component exists as the extension point for future providers
 * (e.g. i18n, RTL direction, feature flags).
 */
const AppProviders = ({ children }) => {
  return <>{children}</>;
};

export default AppProviders;
