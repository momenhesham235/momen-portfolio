import { useLocation, useOutlet } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "react-hot-toast";

import {
  Header,
  Footer,
  SkipLink,
  ScrollToTop,
  Cursor,
  Grain,
  SkewScroll,
} from "@components/common";
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

  /**
   * `useOutlet()` rather than `<Outlet />`: the element it returns carries the
   * route context from *this* render, so the copy still on screen during an
   * exit keeps rendering the page you are leaving. A bare `<Outlet />` reads
   * the live context and would swap both copies to the new route the instant
   * the URL changed — leaving nothing to animate out.
   */
  const outlet = useOutlet();

  return (
    <>
      {/* Both are fixed overlays and deliberately sit outside the language
          transition layer, so they neither fade with a language swap nor
          inherit a containing block from it. */}
      <Grain />
      <Cursor />

      <LanguageTransitionLayer className="container" id="main">
        {!hideHeader && (
          <>
            <SkipLink />
            <Header />
          </>
        )}

        <main className="main-content" id="main-content">
          <SkewScroll>
            {/*
              `popLayout` is what makes the shared project image work: the
              outgoing page is lifted out of flow but stays mounted, so Motion
              can measure it and fly the matching `layoutId` from its box into
              the new one. `wait` would finish the exit before the details page
              existed and there would be nothing to hand off from.
            */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {outlet}
              </motion.div>
            </AnimatePresence>
          </SkewScroll>
        </main>

        <Toaster position={TOAST_POSITION} toastOptions={toastOptions} />
        <Footer />
        <ScrollToTop />
      </LanguageTransitionLayer>
    </>
  );
};

export default MainLayout;
