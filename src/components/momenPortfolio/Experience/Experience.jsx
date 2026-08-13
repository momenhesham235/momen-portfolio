import { useRef } from "react";
import { useScroll } from "motion/react";
import { useTranslation } from "react-i18next";

import { Section } from "@design-system";
import { experienceData } from "@constants/experience";
import ExperienceItem from "./ExperienceItem.jsx";
import "./experience.css";

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

  return (
    <Section
      id="experience"
      className="experience"
      eyebrow={t("experience.eyebrow")}
      heading={t("experience.heading")}
      subtitle={t("experience.subtitle")}
    >
      <div className="exp-stack" role="list" ref={stackRef}>
        {experienceData.map((entry, index) => (
          <ExperienceItem
            key={entry.id}
            entry={entry}
            item={items[index] || {}}
            index={index}
            total={experienceData.length}
            deckProgress={deckProgress}
            currentLabel={t("experience.currentLabel")}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
