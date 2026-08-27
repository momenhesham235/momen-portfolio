import { useSyncExternalStore } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Motion preference gates.
 *
 * Every decorative effect in the app funnels through these two hooks rather
 * than checking `matchMedia` on its own, so "turn the motion off" stays a
 * single decision instead of fifteen independent ones that drift apart.
 */

/** Subscribes to a media query without re-running `matchMedia` per render. */
const subscribeToQuery = (query) => (onChange) => {
  // SSR / non-browser: nothing to subscribe to.
  if (typeof window === "undefined" || !window.matchMedia) return () => {};

  const mql = window.matchMedia(query);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

const readQuery = (query) => () =>
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia(query).matches
    : false;

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

const subscribeFinePointer = subscribeToQuery(FINE_POINTER);
const readFinePointer = readQuery(FINE_POINTER);

/**
 * True when the visitor has a real hovering pointer — a mouse or trackpad.
 *
 * Guards the effects that have no meaning without one (cursor follower,
 * magnetic pull, tilt). On touch these would either never fire or, worse,
 * fire once on tap and stick.
 */
export const useFinePointer = () =>
  useSyncExternalStore(
    subscribeFinePointer,
    readFinePointer,
    () => false // server / first paint: assume touch, the cheaper branch
  );

/**
 * True when decorative motion is welcome — i.e. the visitor has not asked the
 * OS to reduce it. Components read this and render a static equivalent when
 * it is false; they must not simply shorten the duration.
 */
export const useMotionSafe = () => !useReducedMotion();

/**
 * Motion *and* a fine pointer — the gate for pointer-driven effects.
 */
export const usePointerMotion = () => {
  const motionSafe = useMotionSafe();
  const finePointer = useFinePointer();
  return motionSafe && finePointer;
};
