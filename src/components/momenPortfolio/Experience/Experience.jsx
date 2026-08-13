import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaBriefcase } from "react-icons/fa6";
import { HiOutlineCalendar } from "react-icons/hi2";

import { Section } from "@design-system";
import { experienceData } from "@constants/experience";
import "./experience.css";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 20 },
  },
};

const Experience = () => {
  const { t } = useTranslation("portfolio");
  const items = t("experience.items", { returnObjects: true }) || [];

  const timelineRef = useRef(null);

  // The rail fills as the timeline crosses the viewport, so the gold line
  // reads as a progress track through the career rather than static chrome.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 65%"],
  });
  const railFill = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <Section
      id="experience"
      className="experience"
      eyebrow={t("experience.eyebrow")}
      heading={t("experience.heading")}
      subtitle={t("experience.subtitle")}
    >
      <div className="timeline" role="list" ref={timelineRef}>
        <span className="timeline__rail" aria-hidden="true">
          <motion.span
            className="timeline__rail-fill"
            style={{ scaleY: railFill }}
          />
        </span>

        {experienceData.map((entry, index) => {
          const item = items[index] || {};
          const side = index % 2 === 0 ? "right" : "left";
          const isCurrent = entry.current;

          return (
            <motion.div
              key={entry.id}
              className={`experience-item experience-item--${side}${
                isCurrent ? " is-current" : ""
              }`}
              role="listitem"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="experience-marker" aria-hidden="true">
                <FaBriefcase />
              </span>

              <article className="experience-card">
                <span className="experience-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <header className="experience-card__header">
                  <div className="experience-card__heading">
                    <h3 className="experience-card__title">{item.title}</h3>
                    <p className="experience-card__company">{item.company}</p>
                  </div>

                  {isCurrent && (
                    <span className="experience-card__badge">
                      <span
                        className="experience-card__badge-dot"
                        aria-hidden="true"
                      />
                      {t("experience.currentLabel")}
                    </span>
                  )}
                </header>

                <p className="experience-card__date">
                  <HiOutlineCalendar aria-hidden="true" />
                  <span>
                    {item.startDate} – {item.endDate}
                  </span>
                </p>

                {Array.isArray(item.description) && item.description.length > 0 && (
                  <ul className="experience-card__list">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}

                {entry.tech?.length > 0 && (
                  <ul className="experience-card__tech" aria-label="Tech stack">
                    {entry.tech.map((techItem) => (
                      <li key={techItem}>{techItem}</li>
                    ))}
                  </ul>
                )}
              </article>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
