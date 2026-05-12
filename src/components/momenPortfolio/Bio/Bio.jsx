// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "@design-system";
import "./bio.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 20 },
  },
};

const Bio = () => {
  const { t } = useTranslation("portfolio");
  const stats = t("about.stats", { returnObjects: true }) || [];

  return (
    <Section id="bio" heading={t("about.heading")} className="bio">
      <motion.div
        className="bio-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.article className="bio-text" variants={fadeUp}>
          <Trans
            i18nKey="about.body"
            ns="portfolio"
            components={{ strong: <strong /> }}
          />
        </motion.article>

        {Array.isArray(stats) && stats.length > 0 && (
          <motion.ul
            className="bio-stats"
            role="list"
            aria-label={t("about.heading")}
            variants={fadeUp}
          >
            {stats.map((stat) => (
              <li key={stat.label} className="bio-stat">
                <span className="bio-stat__value">{stat.value}</span>
                <span className="bio-stat__label">{stat.label}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </Section>
  );
};

export default Bio;
