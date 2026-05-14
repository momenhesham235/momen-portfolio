// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "motion/react";
import useLanguageTransitionStore from "@app/stores/language-transition-store";
import LanguageTransitionVeil from "./LanguageTransitionVeil";

/**
 * Pass-through wrapper that drives the existing `.container` element
 * via Motion, fading content during a language swap.
 *
 * Opacity-only by design:
 *   `transform`, `filter`, and `will-change: transform/filter` would
 *   make this element a containing block for `position: fixed`
 *   descendants — collapsing the mobile drawer's full-viewport overlay
 *   into the container's bounds (same trap the codebase flagged for
 *   `backdrop-filter` on the sticky header). The depth/blur of the
 *   transition lives on <LanguageTransitionVeil />, a sibling fixed
 *   overlay portaled to body — never touching the content tree.
 *
 * Renders no extra DOM nodes; the consumer's `className`/`id` are
 * applied directly to the motion element so existing CSS (flex layout,
 * sticky header, container chrome) keeps working.
 */
const LanguageTransitionLayer = ({ children, className, id }) => {
  const isTransitioning = useLanguageTransitionStore((s) => s.isTransitioning);
  const reduced = useReducedMotion();

  const variants = reduced
    ? {
        in: { opacity: 1, transition: { duration: 0 } },
        out: { opacity: 1, transition: { duration: 0 } },
      }
    : {
        in: {
          opacity: 1,
          transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
        },
        out: {
          opacity: 0,
          transition: { duration: 0.18, ease: [0.4, 0, 0.6, 1] },
        },
      };

  return (
    <>
      <motion.div
        className={className}
        id={id}
        initial="in"
        animate={isTransitioning ? "out" : "in"}
        variants={variants}
        aria-busy={isTransitioning || undefined}
        style={{
          pointerEvents: isTransitioning ? "none" : undefined,
        }}
      >
        {children}
      </motion.div>
      <LanguageTransitionVeil />
    </>
  );
};

export default LanguageTransitionLayer;
