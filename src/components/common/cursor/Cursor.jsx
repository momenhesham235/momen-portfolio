import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "motion/react";

import { usePointerMotion } from "@hooks/use-motion-pref";
import "./cursor.css";

/**
 * Cursor follower.
 *
 * A trailing ring, not a cursor replacement — the native pointer stays visible
 * everywhere except over elements that opt in with `data-cursor`, where the
 * ring grows into a labelled disc and CSS hides the arrow. Replacing the
 * pointer wholesale costs real usability (a spring-lagged cursor is genuinely
 * harder to aim) for no extra impact.
 *
 * Opt in from any element:
 *   data-cursor="view" data-cursor-label="More"
 */
const INTERACTIVE = "a, button, input, textarea, select, summary, [role='button']";

const Cursor = () => {
  const enabled = usePointerMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const follow = { stiffness: 400, damping: 32, mass: 0.32 };
  const ringX = useSpring(x, follow);
  const ringY = useSpring(y, follow);

  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const handleOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      /* Links win over their container: the "More" anchor lives inside a card
         that already declares data-cursor, and the more specific intent is the
         one under the pointer right now. */
      if (target.closest(INTERACTIVE)) {
        setVariant("link");
        setLabel("");
        return;
      }

      const opted = target.closest("[data-cursor]");
      if (opted) {
        setVariant(opted.dataset.cursor || "default");
        setLabel(opted.dataset.cursorLabel || "");
        return;
      }

      setVariant("default");
      setLabel("");
    };

    // Leaving the document entirely, e.g. into the browser chrome.
    const handleOut = (event) => {
      if (!event.relatedTarget) setVisible(false);
    };

    const press = () => setPressed(true);
    const release = () => setPressed(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver);
    document.addEventListener("pointerout", handleOut);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    window.addEventListener("blur", release);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      document.removeEventListener("pointerout", handleOut);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("blur", release);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const isLabelled = Boolean(label);

  return (
    <motion.div
      className={`cursor cursor--${variant}${isLabelled ? " cursor--labelled" : ""}`}
      aria-hidden="true"
      style={{ x: ringX, y: ringY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: pressed ? 0.82 : 1,
      }}
      transition={{ opacity: { duration: 0.25 }, scale: { duration: 0.16 } }}
    >
      <span className="cursor__ring">
        {isLabelled && <span className="cursor__label">{label}</span>}
      </span>
    </motion.div>
  );
};

export default Cursor;
