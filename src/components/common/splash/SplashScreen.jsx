import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

import { useLockBodyScroll } from "@hooks/use-lock-body-scroll";
import "./splash.css";

/** Total time the counter takes to climb from 0 → 100. */
const RAMP_MS = 1500;
/** Beat held at 100% before the curtain lifts, so the number is readable. */
const HOLD_MS = 320;
/** Per-session guard — the splash is an entrance, not a toll booth. */
const SESSION_KEY = "mh-splash-shown";

const MONOGRAM = ["M", "H"];

/**
 * Decides whether the splash should run at all.
 *
 * Read synchronously in `useState`'s initialiser (not in an effect) so the
 * overlay is present in the very first commit. Deciding later would let the
 * page paint first and then get covered — the exact flash the splash exists
 * to prevent.
 */
const shouldPlay = () => {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  } catch {
    // Private-mode / blocked storage — play it, but never block the site.
    return true;
  }
};

const SplashScreen = () => {
  const { t } = useTranslation("common");

  const [visible, setVisible] = useState(shouldPlay);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  useLockBodyScroll(visible);

  useEffect(() => {
    if (!visible) return undefined;

    let hideTimer = 0;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      // easeOutCubic — the counter sprints early and settles at the end,
      // which feels like real loading rather than a linear fake.
      const linear = Math.min(elapsed / RAMP_MS, 1);
      const eased = 1 - Math.pow(1 - linear, 3);

      setProgress(Math.round(eased * 100));

      if (linear < 1) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      hideTimer = window.setTimeout(() => setVisible(false), HOLD_MS);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(hideTimer);
    };
  }, [visible]);

  const markSeen = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable — the splash simply replays next visit */
    }
  };

  return (
    <AnimatePresence onExitComplete={markSeen}>
      {visible && (
        <motion.div
          className="splash"
          role="status"
          aria-live="polite"
          aria-label={t("splash.loading")}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            // Pull back slightly on the way out so the site appears to rise
            // toward the viewer instead of the overlay simply dissolving.
            scale: 1.06,
            filter: "blur(8px)",
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="splash__aura" aria-hidden="true" />
          <div className="splash__grid" aria-hidden="true" />

          <div className="splash__stage">
            {/* ── Monogram mark ── */}
            <motion.div
              className="splash__mark"
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="splash__ring" aria-hidden="true" />
              <span className="splash__mark-inner">
                {MONOGRAM.map((letter, i) => (
                  <motion.span
                    key={letter}
                    className="splash__letter"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.18 + i * 0.09,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.div>

            {/* ── Wordmark ── */}
            <motion.p
              className="splash__name"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("header.fullName")}
            </motion.p>

            <motion.p
              className="splash__role"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("footer.role")}
            </motion.p>

            {/* ── Progress ── */}
            <motion.div
              className="splash__progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div
                className="splash__track"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={t("splash.loading")}
              >
                <span
                  className="splash__bar"
                  style={{ transform: `scaleX(${progress / 100})` }}
                />
              </div>
              <span className="splash__count">
                {String(progress).padStart(3, "0")}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
