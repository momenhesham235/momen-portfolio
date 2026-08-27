import { useCallback, useState } from "react";
import { motion } from "motion/react";

import { useMotionSafe } from "@hooks/use-motion-pref";
import "./reveal.css";

/**
 * Clip-path reveal — the block is uncovered top-to-bottom rather than faded in,
 * which reads as a curtain lifting instead of a widget popping.
 *
 * `clip-path: inset(0)` still clips at the border box, so a box-shadow would
 * stay permanently cut off once the animation settled. On completion the
 * element takes an `is-settled` class whose `clip-path: none` releases it —
 * done in CSS rather than by handing the property back to React, so Motion and
 * the style prop never both own `clipPath`.
 */
const CLOSED = "inset(0% 0% 100% 0%)";
const OPEN = "inset(0% 0% 0% 0%)";

const Reveal = ({
  as = "div",
  className = "",
  delay = 0,
  duration = 0.85,
  y = 16,
  amount = 0.3,
  once = true,
  children,
  ...rest
}) => {
  const motionSafe = useMotionSafe();
  const [settled, setSettled] = useState(false);

  const handleComplete = useCallback(() => setSettled(true), []);

  const MotionTag = motion[as] || motion.div;

  const classes = ["reveal", settled ? "is-settled" : "", className]
    .filter(Boolean)
    .join(" ");

  if (!motionSafe) {
    const Tag = as;
    return (
      <Tag className={["reveal", "is-settled", className].filter(Boolean).join(" ")} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={classes}
      initial={{ clipPath: CLOSED, opacity: 0, y }}
      whileInView={{ clipPath: OPEN, opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={handleComplete}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
