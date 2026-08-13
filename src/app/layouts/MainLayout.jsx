import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Header, Footer, SkipLink, ScrollToTop } from "@components/common";
import { TOAST_DURATION, TOAST_POSITION } from "@app/config/constants";
import LanguageTransitionLayer from "./LanguageTransitionLayer";

/**
 * Toasts read their colours from the same custom properties as the rest of the
 * app, so they follow the light/dark switch without a second source of truth.
 */
const toastOptions = {
  duration: TOAST_DURATION,
  style: {
    background: "var(--surface-raised)",
    color: "var(--title-color)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-lg)",
    fontSize: "var(--fs-base)",
  },
  success: { iconTheme: { primary: "var(--accent-color)", secondary: "var(--surface-raised)" } },
  error: { iconTheme: { primary: "var(--color-error)", secondary: "var(--surface-raised)" } },
};

const MainLayout = () => {
  const { pathname } = useLocation();
  const hideHeader = pathname.startsWith("/details");

  return (
    <LanguageTransitionLayer className="container" id="main">
      {!hideHeader && (
        <>
          <SkipLink />
          <Header />
        </>
      )}

      <main className="main-content" id="main-content">
        <Outlet />
      </main>

      <Toaster position={TOAST_POSITION} toastOptions={toastOptions} />
      <Footer />
      <ScrollToTop />
    </LanguageTransitionLayer>
  );
};

export default MainLayout;
