import { useRef } from "react";
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

  return (
    <Section
      id="experience"
      className="experience"
      eyebrow={t("experience.eyebrow")}
      heading={t("experience.heading")}
      subtitle={t("experience.subtitle")}
    >
      <div className="exp-stack" role="list" ref={stackRef}>
        {/* Progress rail. Purely a readout of the deck's own scroll, so it is
            hidden from assistive tech — the cards already carry the sequence
            in their "01 / 04" step markers. */}
        {motionSafe && (
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
            currentLabel={t("experience.currentLabel")}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
