import { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { HiArrowRight, HiOutlineChevronDown } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";

import { codingAnimation } from "@assets";
import { socialLinks, heroStack, heroOrbitBadges } from "@constants/heroData";
import "./hero.css";

/** Dwell time per role before the headline rotates to the next one. */
const ROLE_INTERVAL_MS = 2800;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.085, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 130, damping: 20 },
  },
};

const avatarIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18, delay: 0.15 },
  },
};

const Hero = () => {
  const { t } = useTranslation("portfolio");

  const firstName = t("hero.firstName");
  const lastName = t("hero.lastName");
  const role = t("hero.role");

  // `hero.roles` is the rotating list; `hero.role` remains the single-value
  // fallback so a locale that hasn't been updated still renders something.
  const roles = useMemo(() => {
    const list = t("hero.roles", { returnObjects: true });
    return Array.isArray(list) && list.length > 0 ? list : [role];
  }, [t, role]);

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // A single role has nothing to rotate to.
    if (roles.length < 2) return undefined;

    const id = window.setInterval(
      () => setRoleIndex((i) => i + 1),
      ROLE_INTERVAL_MS
    );
    return () => window.clearInterval(id);
  }, [roles.length]);

  // Modulo at read time: switching language can shrink the list under a
  // pointer that has already advanced past the new end.
  const currentRole = roles[roleIndex % roles.length];

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      {/* ── Ambient backdrop ── */}
      <div className="hero__ambient" aria-hidden="true">
        <span className="hero__blob hero__blob--gold" />
        <span className="hero__blob hero__blob--blue" />
        <span className="hero__grid" />
      </div>

      <div className="hero-container">
        {/* ── Content column ── */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-status" variants={fadeUp}>
            <span className="hero-status__dot" aria-hidden="true" />
            {t("hero.available")}
          </motion.span>

          <motion.span className="hero-greeting" variants={fadeUp}>
            {t("hero.greeting")}
          </motion.span>

          <motion.h1 id="hero-heading" className="hero-heading" variants={fadeUp}>
            <span className="hero-heading__intro">{t("hero.intro")}</span>{" "}
            <span className="hero-heading__name">
              {firstName} {lastName}
            </span>
          </motion.h1>

          {/* Rotating role — the visible node is decorative; the full list is
              exposed once to assistive tech instead of announcing every swap. */}
          <motion.div className="hero-roles" variants={fadeUp}>
            <span className="hero-roles__prefix" aria-hidden="true">
              &lt;/&gt;
            </span>
            <span className="hero-roles__viewport" aria-hidden="true">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={currentRole}
                  className="hero-roles__item"
                  initial={{ opacity: 0, y: "0.7em" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-0.7em" }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  {currentRole}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="hero-roles__caret" aria-hidden="true" />
            <span className="sr-only">{roles.join(" · ")}</span>
          </motion.div>

          <motion.p className="hero-bio" variants={fadeUp}>
            {t("hero.bio")}
          </motion.p>

          {/* Headline stack */}
          <motion.ul
            className="hero-stack"
            variants={fadeUp}
            aria-label={t("hero.stackLabel")}
          >
            {heroStack.map((tech) => (
              <li key={tech} className="hero-stack__chip">
                {tech}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div className="hero-cta" variants={fadeUp}>
            <a
              href="#projects"
              className="hero-cta__primary"
              aria-label={t("hero.ctaPrimary")}
            >
              <span>{t("hero.ctaPrimary")}</span>
              <HiArrowRight className="hero-cta__arrow" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="hero-cta__secondary"
              aria-label={t("hero.ctaSecondary")}
            >
              {t("hero.ctaSecondary")}
            </a>
            <a
              href="Momen_Hesham_CV.pdf"
              className="hero-cta__ghost"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("hero.ctaResume")}
            >
              <FiDownload aria-hidden="true" />
              <span>{t("hero.ctaResume")}</span>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero-socials"
            variants={fadeUp}
            role="list"
            aria-label={t("socials.ariaList", { ns: "common" })}
          >
            {socialLinks.map(({ id, Icon, link, key }) => (
              <a
                key={id}
                href={link}
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(`socials.${key}`, { ns: "common" })}
                role="listitem"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Portrait column ── */}
        <motion.div
          className="hero-avatar-col"
          variants={avatarIn}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-avatar-glow" aria-hidden="true" />

          <div className="hero-avatar-frame">
            <span className="hero-avatar-ring" aria-hidden="true" />

            <div className="hero-lottie-bg" aria-hidden="true">
              <Lottie animationData={codingAnimation} loop aria-hidden="true" />
            </div>

            <img
              src="Momen_Hesham.png"
              alt={`${firstName} ${lastName} — ${role}`}
              className="hero-avatar"
              loading="eager"
              fetchpriority="high"
              width="280"
              height="280"
            />

            {/* Orbiting stack badges.
                Two nested elements on purpose: Motion owns `transform` on the
                outer slot for the entrance spring, while the inner chip runs a
                looping CSS bob — a running CSS animation outranks inline style,
                so sharing one element would let the bob eat the entrance. */}
            {heroOrbitBadges.map((badge, i) => (
              <motion.span
                key={badge.id}
                className={`hero-orbit-slot hero-orbit-slot--${badge.position}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.55 + i * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >
                <span
                  className={`hero-orbit hero-orbit--${badge.position}`}
                  title={badge.label}
                >
                  <img src={badge.img} alt="" aria-hidden="true" loading="lazy" />
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.a
        href="#bio"
        className="hero-scroll"
        aria-label={t("hero.scrollCue")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <span className="hero-scroll__label">{t("hero.scrollCue")}</span>
        <HiOutlineChevronDown className="hero-scroll__icon" aria-hidden="true" />
      </motion.a>
    </section>
  );
};

export default Hero;
