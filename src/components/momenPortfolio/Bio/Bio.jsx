// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "@design-system";
import CountUp from "@components/common/count-up/CountUp";
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

const statsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const statVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 20 },
  },
};

/**
 * Splits a stat like `"3+"` — or `"+3"`, which is how the Arabic locale writes
 * it — into the affixes and the number the counter can actually tween.
 *
 * Returns null when there is no number at all, so the caller can fall back to
 * rendering the raw string rather than showing a stray "0".
 */
const parseStatValue = (raw) => {
  const text = String(raw ?? "");
  const match = text.match(/\d+(?:\.\d+)?/);
  if (!match) return null;

  const [numeric] = match;
  return {
    prefix: text.slice(0, match.index),
    suffix: text.slice(match.index + numeric.length),
    number: Number(numeric),
    decimals: numeric.includes(".") ? numeric.split(".")[1].length : 0,
  };
};

const Bio = () => {
  const { t } = useTranslation("portfolio");
  const stats = t("about.stats", { returnObjects: true }) || [];

  return (
    <Section
      id="bio"
      className="bio"
      eyebrow={t("about.eyebrow")}
      heading={t("about.heading")}
    >
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
            variants={statsVariants}
          >
            {stats.map((stat) => {
              const parsed = parseStatValue(stat.value);

              return (
                <motion.li
                  key={stat.label}
                  className="bio-stat"
                  variants={statVariants}
                >
                  {/* The affixes stay outside CountUp so the tween never has to
                      re-parse them, and the whole value is announced once as
                      its final text rather than on every frame. */}
                  <span className="bio-stat__value" aria-label={stat.value}>
                    {parsed ? (
                      <span aria-hidden="true">
                        {parsed.prefix}
                        <CountUp
                          value={parsed.number}
                          decimals={parsed.decimals}
                        />
                        {parsed.suffix}
                      </span>
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="bio-stat__label">{stat.label}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </motion.div>
    </Section>
  );
};

export default Bio;
