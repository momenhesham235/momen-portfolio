import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useTranslation } from "react-i18next";
import { HiArrowUp } from "react-icons/hi2";

import "./scroll-to-top.css";

/** How far down the page the button becomes useful rather than noise. */
const REVEAL_AT = 520;

/**
 * Floating "back to top" control wrapped in a ring that doubles as a
 * read-progress indicator, so the button reports position as well as offering
 * an action.
 */
const ScrollToTop = () => {
  const { t } = useTranslation("common");
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  // Spring-smooth the raw progress: the ring should glide, not jitter with
  // every wheel tick.
  const ringProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > REVEAL_AT);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="scroll-top"
          onClick={scrollUp}
          aria-label={t("footer.backToTop")}
          title={t("footer.backToTop")}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
        >
          <svg className="scroll-top__ring" viewBox="0 0 44 44" aria-hidden="true">
            <circle className="scroll-top__ring-track" cx="22" cy="22" r="20" />
            <motion.circle
              className="scroll-top__ring-fill"
              cx="22"
              cy="22"
              r="20"
              style={{ pathLength: ringProgress }}
            />
          </svg>

          <HiArrowUp className="scroll-top__icon" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
