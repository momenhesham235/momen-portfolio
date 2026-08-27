import { Fragment, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import { useMotionSafe } from "@hooks/use-motion-pref";
import "./split-text.css";

/**
 * Word-by-word reveal.
 *
 * Each word sits in its own `overflow: hidden` box and rises into it, so the
 * text appears to be uncovered rather than faded in.
 *
 * Two details are load-bearing:
 *
 *  • The gradient lives on the *glyph*, not on the heading. `background-clip:
 *    text` on an ancestor is not reliably masked by a descendant's overflow —
 *    the glyph would keep painting after it had left its box. Owning the
 *    gradient per word keeps the mask honest. Consumers opt in with
 *    `gradient` and set `--split-gradient` in CSS.
 *
 *  • The whole run is `aria-hidden` behind an `aria-label` on the host, so
 *    assistive tech reads one heading instead of a list of loose words.
 */
const CONTAINER = {
  hidden: {},
  visible: {},
};

const WORD = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 24 },
  },
};

const SplitText = ({
  text,
  as: Tag = "span",
  className = "",
  gradient = false,
  /** "inView" waits for the element to scroll in; "mount" runs immediately. */
  trigger = "inView",
  stagger = 0.045,
  delay = 0,
  once = true,
  amount = 0.6,
  ...rest
}) => {
  const motionSafe = useMotionSafe();
  const label = String(text ?? "");

  const words = useMemo(() => label.split(/\s+/).filter(Boolean), [label]);

  const classes = [
    "split-text",
    gradient ? "split-text--gradient" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Reduced motion gets the finished state — not a faster animation.
  if (!motionSafe || words.length === 0) {
    return (
      <Tag className={classes} {...rest}>
        <span className="split-text__word">
          <span className="split-text__glyph">{label}</span>
        </span>
      </Tag>
    );
  }

  const inView = trigger === "inView";

  return (
    <Tag className={classes} aria-label={label} {...rest}>
      <motion.span
        className="split-text__inner"
        aria-hidden="true"
        variants={CONTAINER}
        initial="hidden"
        {...(inView
          ? { whileInView: "visible", viewport: { once, amount } }
          : { animate: "visible" })}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {words.map((word, i) => (
          // Words repeat ("Full Stack Stack"), so the index has to be part of
          // the key — but the word is kept in it so a language swap remounts
          // the run instead of re-using stale boxes.
          <Fragment key={`${word}-${i}`}>
            <span className="split-text__word">
              <motion.span className="split-text__glyph" variants={WORD}>
                {word}
              </motion.span>
            </span>
            {/* An explicit space text node. The word boxes are inline-block,
                and JSX inserts nothing between mapped siblings — without this
                they butt together and the heading renders as "ProfessionalBio".
                A real space is used rather than a margin so the gap scales with
                the font and wraps like normal word spacing. */}
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
};

export default SplitText;
