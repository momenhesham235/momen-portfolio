import { createPortal } from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import useLanguageTransitionStore from "@app/stores/language-transition-store";
import "./language-transition-veil.css";

/**
 * Full-viewport veil rendered to <body> during a language swap.
 *
 * Lives outside the content tree (portal) so its `position: fixed`
 * and `backdrop-filter` cannot affect the layout, the sticky header,
 * or the mobile drawer's containing block.
 */
const LanguageTransitionVeil = () => {
  const isTransitioning = useLanguageTransitionStore((s) => s.isTransitioning);
  const reduced = useReducedMotion();

  if (reduced) return null;

  return createPortal(
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="lang-transition-veil"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.6, 1] }}
        />
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default LanguageTransitionVeil;
