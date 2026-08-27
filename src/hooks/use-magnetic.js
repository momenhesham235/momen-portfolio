import { useCallback, useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";

import { usePointerMotion } from "./use-motion-pref";

/**
 * Magnetic pull — the element leans toward the pointer while it is over it,
 * then springs back when the pointer leaves.
 *
 * Returns props to spread onto a `motion.*` element:
 *
 *   const magnetic = useMagnetic();
 *   <motion.a {...magnetic}>…</motion.a>
 *
 * The offset is a fraction of the pointer's distance from the element's
 * centre, so the pull is strongest at the edges and vanishes dead-centre —
 * which is what reads as magnetism rather than as the element following the
 * cursor around.
 *
 * @param {number} strength   Fraction of the centre-offset to travel (0–1).
 * @param {number} maxOffset  Hard cap in px, so wide elements don't fly.
 */
export const useMagnetic = ({ strength = 0.32, maxOffset = 14 } = {}) => {
  const ref = useRef(null);
  const enabled = usePointerMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 260, damping: 20, mass: 0.4 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const clamp = (value) => Math.max(-maxOffset, Math.min(maxOffset, value));

  const handlePointerMove = useCallback(
    (event) => {
      if (!enabled) return;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centreX = rect.left + rect.width / 2;
      const centreY = rect.top + rect.height / 2;

      x.set(clamp((event.clientX - centreX) * strength));
      y.set(clamp((event.clientY - centreY) * strength));
    },
    // `clamp` closes over maxOffset, which is already a dependency below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [enabled, strength, maxOffset, x, y]
  );

  const release = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    style: enabled ? { x: springX, y: springY } : undefined,
    onPointerMove: handlePointerMove,
    onPointerLeave: release,
    // A tap on a hybrid device fires pointermove once and would otherwise
    // leave the element parked off-centre with no pointerleave to follow.
    onPointerUp: release,
    onBlur: release,
  };
};
