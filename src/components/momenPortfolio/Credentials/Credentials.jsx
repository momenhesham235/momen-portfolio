import { useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineBuildingLibrary,
  HiOutlineCalendar,
  HiOutlineDocumentCheck,
  HiOutlineTrophy,
} from "react-icons/hi2";

import { Section } from "@design-system";
import "./credentials.css";

/**
 * Credentials — awards, certifications and the degree, in one section.
 *
 * Deliberately one section rather than three: each list holds only two
 * entries, and three separate headings would spend three screens of vertical
 * rhythm on four cards. The degree leads as a full-width plate because it is
 * the one item that frames the other two lists.
 *
 * Every field here is prose, so unlike `experience` there is no companion
 * constants file — the locale JSON *is* the data, read with `returnObjects`
 * and rendered in order.
 */

/* Lane glyphs live here rather than in the locale — presentation, not copy. */
const LANE_ICONS = {
  awards: HiOutlineTrophy,
  certifications: HiOutlineDocumentCheck,
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 190, damping: 22 },
  },
};

/**
 * Feeds the pointer position into a panel as CSS custom properties, which a
 * single radial-gradient overlay reads — the same one-listener-per-panel
 * spotlight the Skills groups use, so the two sections read as one system.
 */
const useSpotlight = () =>
  useCallback((event) => {
    const panel = event.currentTarget;
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    panel.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

/** One lane: a spotlit panel wrapping a stack of cards. */
const Lane = ({ lane, title, count, onPointerMove, children }) => {
  const LaneIcon = LANE_ICONS[lane];

  return (
    <div className={`cred-lane cred-lane--${lane}`} onPointerMove={onPointerMove}>
      <span className="cred-lane__spotlight" aria-hidden="true" />

      <div className="cred-lane__header">
        <span className="cred-lane__icon" aria-hidden="true">
          {LaneIcon && <LaneIcon />}
        </span>
        <h3 className="cred-lane__title">{title}</h3>
        <span className="cred-lane__count" aria-hidden="true">
          {count}
        </span>
      </div>

      <motion.ul
        className="cred-list"
        role="list"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.ul>
    </div>
  );
};

const Credentials = () => {
  const { t } = useTranslation("portfolio");
  const trackPointer = useSpotlight();

  const education = t("credentials.education", { returnObjects: true }) || {};
  const awardsRaw = t("credentials.awards", { returnObjects: true });
  const certsRaw = t("credentials.certifications", { returnObjects: true });

  const awards = Array.isArray(awardsRaw) ? awardsRaw : [];
  const certifications = Array.isArray(certsRaw) ? certsRaw : [];

  return (
    <Section
      id="credentials"
      className="credentials"
      eyebrow={t("credentials.eyebrow")}
      heading={t("credentials.heading")}
      subtitle={t("credentials.subtitle")}
    >
      {/* ── Degree plate ── */}
      {education.degree && (
        <motion.article
          className="cred-education"
          onPointerMove={trackPointer}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
        >
          <span className="cred-lane__spotlight" aria-hidden="true" />

          <span className="cred-education__icon" aria-hidden="true">
            <HiOutlineAcademicCap />
          </span>

          <div className="cred-education__body">
            <span className="cred-education__label">{education.label}</span>
            <h3 className="cred-education__degree">{education.degree}</h3>
            <p className="cred-education__school">
              <HiOutlineBuildingLibrary aria-hidden="true" />
              <span>{education.school}</span>
            </p>
          </div>

          <div className="cred-education__meta">
            <p className="cred-education__period">
              <HiOutlineCalendar aria-hidden="true" />
              <span>{education.period}</span>
            </p>
            {education.gpa && (
              <p className="cred-education__gpa">
                <span className="cred-education__gpa-label">
                  {education.gpaLabel}
                </span>
                <span className="cred-education__gpa-value">{education.gpa}</span>
              </p>
            )}
          </div>
        </motion.article>
      )}

      {/* ── Awards + certifications, side by side ── */}
      <div className="cred-lanes">
        <Lane
          lane="awards"
          title={t("credentials.lanes.awards")}
          count={awards.length}
          onPointerMove={trackPointer}
        >
          {awards.map((award, index) => (
            <motion.li
              key={award.title || index}
              className="cred-card cred-card--award"
              variants={cardVariants}
            >
              <div className="cred-card__head">
                <h4 className="cred-card__title">{award.title}</h4>
                <span className="cred-card__date">
                  <HiOutlineCalendar aria-hidden="true" />
                  <span>{award.date}</span>
                </span>
              </div>

              <p className="cred-card__issuer">{award.issuer}</p>

              {award.description && (
                <p className="cred-card__desc">{award.description}</p>
              )}

              {award.highlight && (
                /* The grant figure is the hardest number in the section, so it
                   carries the only filled accent surface here — everything
                   else stays on the neutral glass scale. */
                <span className="cred-card__prize">
                  <HiOutlineBanknotes aria-hidden="true" />
                  <strong>{award.highlight}</strong>
                  {award.highlightLabel && <em>{award.highlightLabel}</em>}
                </span>
              )}
            </motion.li>
          ))}
        </Lane>

        <Lane
          lane="certifications"
          title={t("credentials.lanes.certifications")}
          count={certifications.length}
          onPointerMove={trackPointer}
        >
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.title || index}
              className="cred-card cred-card--cert"
              variants={cardVariants}
            >
              <span className="cred-card__seal" aria-hidden="true">
                <HiOutlineDocumentCheck />
              </span>

              <div className="cred-card__body">
                <h4 className="cred-card__title">{cert.title}</h4>
                <p className="cred-card__issuer">{cert.issuer}</p>
                <p className="cred-card__date">
                  <HiOutlineCalendar aria-hidden="true" />
                  <span>{cert.date}</span>
                </p>
              </div>
            </motion.li>
          ))}
        </Lane>
      </div>
    </Section>
  );
};

export default Credentials;
