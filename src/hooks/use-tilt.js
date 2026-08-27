import { useCallback, useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";

import { usePointerMotion } from "./use-motion-pref";

/**
 * Pointer-driven 3D tilt.
 *
 * Returns props to spread onto a `motion.*` element. The element keeps its own
 * CSS `translate` / `scale` hover states — Motion only ever writes `transform`
 * here, and CSS's independent transform properties are applied first, so the
 * two compose instead of overwriting one another.
 *
 *   const tilt = useTilt();
 *   <motion.article {...tilt}>…</motion.article>
 *
 * @param {number} max          Peak rotation at the element's edge, degrees.
 * @param {number} perspective  Camera distance in px — lower is more dramatic.
 */
export const useTilt = ({ max = 7, perspective = 900 } = {}) => {
  const ref = useRef(null);
  const enabled = usePointerMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spring = { stiffness: 220, damping: 22, mass: 0.5 };
  const springX = useSpring(rotateX, spring);
  const springY = useSpring(rotateY, spring);

  const handlePointerMove = useCallback(
    (event) => {
      if (!enabled) return;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      // −0.5 → 0.5 across each axis, so the centre is the neutral position.
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      // Pointer below centre should tip the card's top edge away, hence the
      // negated X rotation.
      rotateX.set(-py * max * 2);
      rotateY.set(px * max * 2);
    },
    [enabled, max, rotateX, rotateY]
  );

  const release = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return {
    ref,
    style: enabled
      ? {
          rotateX: springX,
          rotateY: springY,
          transformPerspective: perspective,
          transformStyle: "preserve-3d",
        }
      : undefined,
    onPointerMove: handlePointerMove,
    onPointerLeave: release,
    onPointerUp: release,
  };
};
