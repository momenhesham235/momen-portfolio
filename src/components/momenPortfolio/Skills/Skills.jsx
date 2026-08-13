import { useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  HiOutlineComputerDesktop,
  HiOutlineServerStack,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

import { Section } from "@design-system";
import { skills } from "@constants/skills";
import "./skills.css";

/** Group glyphs live here rather than in constants — they're presentation. */
const GROUP_ICONS = {
  frontend: HiOutlineComputerDesktop,
  backend: HiOutlineServerStack,
  tools: HiOutlineWrenchScrewdriver,
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

const Skills = () => {
  const { t } = useTranslation("portfolio");

  /**
   * Feeds the pointer position into the panel as CSS custom properties, which
   * a single radial-gradient overlay reads. One listener per group beats one
   * per card, and the effect stays entirely in CSS.
   */
  const trackPointer = useCallback((event) => {
    const panel = event.currentTarget;
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    panel.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Section
      id="skills"
      className="skills"
      eyebrow={t("skills.eyebrow")}
      heading={t("skills.heading")}
      subtitle={t("skills.subtitle")}
    >
      {skills.map((group) => {
        const GroupIcon = GROUP_ICONS[group.key];

        return (
          <div
            key={group.key}
            className="skills-group"
            onPointerMove={trackPointer}
          >
            <span className="skills-group__spotlight" aria-hidden="true" />

            <div className="skills-group__header">
              <span className="skills-group__icon" aria-hidden="true">
                {GroupIcon && <GroupIcon />}
              </span>
              <h3 className="skills-group__title">
                {t(`skills.groups.${group.key}`)}
              </h3>
              <span className="skills-group__count" aria-hidden="true">
                {group.items.length}
              </span>
            </div>

            <motion.ul
              className="skills-grid"
              role="list"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {group.items.map((skill) => (
                <motion.li
                  key={skill.name}
                  className="skill-card"
                  role="listitem"
                  variants={cardVariants}
                >
                  <span className="skill-card__icon-wrap">
                    <img
                      src={skill.img}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="skill-card__icon"
                    />
                  </span>
                  <span className="skill-card__name">{skill.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        );
      })}
    </Section>
  );
};

export default Skills;
