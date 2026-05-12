import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { Section, Card } from "@design-system";
import { skills } from "@constants/skills";
import "./skills.css";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 20 },
  },
};

const Skills = () => {
  const { t } = useTranslation("portfolio");

  return (
    <Section id="skills" heading={t("skills.heading")} className="skills">
      {skills.map((group) => (
        <div key={group.key} className="skills-group">
          <h3 className="skills-group__title">
            {t(`skills.groups.${group.key}`)}
          </h3>

          <motion.ul
            className="skills-grid"
            role="list"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {group.items.map((skill) => (
              <Card
                key={skill.name}
                as={motion.li}
                hoverable
                role="listitem"
                className="skill-card"
                variants={cardVariants}
              >
                <img
                  src={skill.img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="skill-card__icon"
                />
                <span className="skill-card__name">{skill.name}</span>
              </Card>
            ))}
          </motion.ul>
        </div>
      ))}
    </Section>
  );
};

export default Skills;
