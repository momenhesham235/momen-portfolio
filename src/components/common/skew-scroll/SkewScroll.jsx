// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";

import { usePointerMotion } from "@hooks/use-motion-pref";

/** Scroll speed, px/s, at which the lean reaches its cap. */
const VELOCITY_CEILING = 2400;
/** Cap in degrees. Past ~2° the page reads as broken rather than as inertia. */
const MAX_SKEW = 1.6;

/**
 * Leans the page into the scroll and lets it settle back — the whole document
 * behaving like it has mass.
 *
 * Wheel/trackpad only. Touch scrolling already carries its own momentum, and
 * skewing on top of it fights the platform's inertia instead of adding to it,
 * so this is gated behind a fine pointer along with the rest of the
 * pointer-driven effects.
 *
 * Safe to transform *this* subtree specifically: the app's `position: fixed`
 * chrome — header, mobile drawer, scroll-to-top, toasts, language veil — all
 * live outside `<main>`. A transformed ancestor would otherwise become their
 * containing block and collapse them into the content column, which is the
 * same trap documented on LanguageTransitionLayer.
 */
const SkewScroll = ({ children, className = "" }) => {
  const enabled = usePointerMotion();

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  /* Raw velocity snaps to zero the instant the wheel stops; the spring is what
     supplies the overshoot and settle that make it read as weight. */
  const smooth = useSpring(velocity, {
    stiffness: 300,
    damping: 45,
    mass: 0.4,
  });

  const skewY = useTransform(
    smooth,
    [-VELOCITY_CEILING, VELOCITY_CEILING],
    [-MAX_SKEW, MAX_SKEW],
    { clamp: true }
  );

  if (!enabled) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} style={{ skewY }}>
      {children}
    </motion.div>
  );
};

export default SkewScroll;
