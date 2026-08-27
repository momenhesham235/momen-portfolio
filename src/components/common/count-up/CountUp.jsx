import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

import { useMotionSafe } from "@hooks/use-motion-pref";

/**
 * Counts a numeric stat up from zero the first time it scrolls into view.
 *
 * The tween writes `textContent` straight to the node instead of going through
 * state — a 1.6s count at 60fps is ~100 renders otherwise, and nothing else on
 * the page depends on the intermediate values.
 *
 * `value` is the parsed number; any `+`, `%` or localised affix stays in the
 * markup around this component so the count never has to re-parse it.
 */
const CountUp = ({
  value,
  decimals = 0,
  duration = 1.7,
  className = "",
  ...rest
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionSafe = useMotionSafe();

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!motionSafe) {
      node.textContent = value.toFixed(decimals);
      return undefined;
    }

    if (!inView) return undefined;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = latest.toFixed(decimals);
      },
    });

    return () => controls.stop();
  }, [inView, motionSafe, value, decimals, duration]);

  return (
    <span ref={ref} className={className} {...rest}>
      {/* Server/first paint value. React never re-renders this subtree, so the
          tween's direct writes are safe from being clobbered. */}
      {motionSafe ? (0).toFixed(decimals) : value.toFixed(decimals)}
    </span>
  );
};

export default CountUp;
