import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useTranslation } from "react-i18next";

import { Section } from "@design-system";
import { experienceData } from "@constants/experience";
import { useMotionSafe } from "@hooks/use-motion-pref";
import ExperienceItem from "./ExperienceItem.jsx";
import "./experience.css";

/**
 * One station on the rail. Split into its own component because each dot needs
 * its own `useTransform` off the shared deck progress, and hooks cannot be
 * called from inside a map.
 */
const RailDot = ({ progress, at }) => {
  // Lights up just before the matching card pins, so the rail leads the deck
  // by a hair instead of confirming a change the eye has already made.
  const range = [at - 0.08, at];
  const opacity = useTransform(progress, range, [0.3, 1]);
  const scale = useTransform(progress, range, [0.75, 1.15]);

  return (
    <motion.span
      className="exp-rail__dot"
      style={{ top: `${at * 100}%`, opacity, scale }}
    />
  );
};

/** Resolves a CSS length token like "6rem" or "22px" to pixels. */
const toPx = (value, remPx) => {
  const n = parseFloat(value);
  if (Number.isNaN(n)) return 0;
  return value.includes("rem") ? n * remPx : n;
};

/**
 * Is there room to actually stack the deck?
 *
 * A `position: sticky` card taller than the space below the header can never
 * be scrolled: pinning freezes it in place, so everything past the fold inside
 * it becomes unreachable. That is a content-length problem, not a breakpoint
 * one — a long role description breaks a wide desktop just as easily as a
 * phone — so this measures the real cards instead of guessing at a media
 * query, and the deck falls back to plain document flow whenever the tallest
 * card would not fit.
 */
const useDeckFits = (ref, total) => {
  const [fits, setFits] = useState(true);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const cards = el.querySelectorAll(".experience-card");
    if (!cards.length) return;

    let tallest = 0;
    for (const card of cards) {
      tallest = Math.max(tallest, card.getBoundingClientRect().height);
    }

    const remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const styles = getComputedStyle(el);
    const top = toPx(styles.getPropertyValue("--stack-top"), remPx);
    const step = toPx(styles.getPropertyValue("--stack-step"), remPx);

    // Worst case is the last card: it carries the largest sticky offset.
    const offset = top + Math.max(0, total - 1) * step;
    setFits(tallest + offset + 16 <= window.innerHeight);
  }, [ref, total]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Cards reflow on font load, language swap and width change alike, so
    // observe the element rather than listening for resize alone.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ref, measure]);

  return fits;
};

const Experience = () => {
  const { t } = useTranslation("portfolio");
  const items = t("experience.items", { returnObjects: true }) || [];

  const stackRef = useRef(null);

  /**
   * Progress across the whole deck, tracked on the container rather than on
   * the individual cards — the cards are `position: sticky`, and a pinned
   * element's measured offset stops reporting its flow position, so a
   * per-card tracker would freeze the moment the card pinned.
   *
   * `end start` (not `end end`) is what makes the range map cleanly onto the
   * cards: progress then runs 0 → 1 over exactly the deck's own height, so
   * card N pins at roughly N / total.
   */
  const { scrollYProgress: deckProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end start"],
  });

  /* The rail reads the same progress the cards do, smoothed — an unsprung fill
     tracks the scroll wheel's own jitter and reads as a glitch rather than a
     line being drawn. */
  const railFill = useSpring(deckProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const motionSafe = useMotionSafe();
  const total = experienceData.length;

  /* When the deck cannot pin safely the cards revert to normal flow, and the
     depth cues have to go with them: a shrinking, dimming card that is not
     being covered by anything just looks broken. */
  const stacked = useDeckFits(stackRef, total) && motionSafe;

  return (
    <Section
      id="experience"
      className="experience"
      eyebrow={t("experience.eyebrow")}
      heading={t("experience.heading")}
      subtitle={t("experience.subtitle")}
    >
      <div
        className={`exp-stack${stacked ? "" : " exp-stack--flat"}`}
        role="list"
        ref={stackRef}
      >
        {/* Progress rail. Purely a readout of the deck's own scroll, so it is
            hidden from assistive tech — the cards already carry the sequence
            in their "01 / 04" step markers. */}
        {stacked && (
          <div className="exp-rail" aria-hidden="true">
            <span className="exp-rail__track" />
            <motion.span
              className="exp-rail__fill"
              style={{ scaleY: railFill }}
            />
            {experienceData.map((entry, index) => (
              <RailDot
                key={entry.id}
                progress={railFill}
                /* Card N pins at roughly N / total — the same slicing the
                   cards use for their own shrink-and-dim. */
                at={index / total}
              />
            ))}
          </div>
        )}

        {experienceData.map((entry, index) => (
          <ExperienceItem
            key={entry.id}
            entry={entry}
            item={items[index] || {}}
            index={index}
            total={total}
            deckProgress={deckProgress}
            stacked={stacked}
            currentLabel={t("experience.currentLabel")}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
