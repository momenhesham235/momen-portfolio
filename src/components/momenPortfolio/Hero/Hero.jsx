import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { HiArrowRight, HiOutlineChevronDown } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";

import { codingAnimation } from "@assets";
import { AVATAR_URL, RESUME_URL } from "@app/config/constants";
import { socialLinks, heroStack, heroOrbitBadges } from "@constants/heroData";
import { useMagnetic } from "@hooks/use-magnetic";
import { useMotionSafe, usePointerMotion } from "@hooks/use-motion-pref";
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

/** Magnetic pull is stronger on the primary CTA than on the small icon links. */
const CTA_MAGNET = { strength: 0.34, maxOffset: 12 };
const SOCIAL_MAGNET = { strength: 0.45, maxOffset: 8 };

const Hero = () => {
  const { t } = useTranslation("portfolio");
  const motionSafe = useMotionSafe();
  const pointerMotion = usePointerMotion();

  const firstName = t("hero.firstName");
  const lastName = t("hero.lastName");
  const role = t("hero.role");

  /* ── Scroll parallax ──────────────────────────────────────────────────
     Measured over the hero's own travel out of the viewport, so progress is
     0 while it is parked at the top and 1 once its bottom edge reaches the
     top of the screen. Every layer reads the same progress at a different
     rate — that difference in rate is the whole effect. */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  /* Blur is held at zero for the first half of the travel: a filter animating
     from the very first scrolled pixel costs a full-column repaint on every
     frame, for an effect nobody sees until the hero is already leaving. */
  const contentBlur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["blur(0px)", "blur(0px)", "blur(5px)"]
  );

  // The portrait outruns the text — the near layer in the parallax.
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -170]);
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* The blobs keep their own looping CSS drift, so the parallax rides on the
     wrapper instead: a running CSS animation outranks an inline transform and
     would otherwise swallow it whole. */
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0]);

  /* ── Pointer spotlight ────────────────────────────────────────────────
     Publishes the pointer to the section as custom properties that a single
     radial-gradient overlay reads. Batched into a frame so a fast sweep sets
     the properties once per paint rather than once per event. */
  const frame = useRef(0);
  const trackPointer = useCallback(
    (event) => {
      if (!pointerMotion) return;
      const el = heroRef.current;
      if (!el || frame.current) return;

      const { clientX, clientY } = event;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = 0;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--hx", `${clientX - rect.left}px`);
        el.style.setProperty("--hy", `${clientY - rect.top}px`);
      });
    },
    [pointerMotion]
  );

  useEffect(
    () => () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    },
    []
  );

  /* ── Magnetic CTAs ── */
  const primaryMagnet = useMagnetic(CTA_MAGNET);
  const secondaryMagnet = useMagnetic(CTA_MAGNET);
  const resumeMagnet = useMagnetic(CTA_MAGNET);

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
    <section
      ref={heroRef}
      className="hero"
      id="home"
      aria-labelledby="hero-heading"
      onPointerMove={trackPointer}
    >
      {/* ── Ambient backdrop ── */}
      <motion.div
        className="hero__ambient"
        aria-hidden="true"
        style={motionSafe ? { y: ambientY } : undefined}
      >
        <span className="hero__blob hero__blob--gold" />
        <span className="hero__blob hero__blob--blue" />
        <motion.span
          className="hero__grid"
          style={motionSafe ? { y: gridY, opacity: gridOpacity } : undefined}
        />
        {/* Pointer-tracked light. Idle position is off-canvas so it isn't
            parked in a corner before the pointer has ever entered. */}
        <span className="hero__spotlight" />
      </motion.div>

      <div className="hero-container">
        {/* ── Content column ── */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={
            motionSafe
              ? {
                  y: contentY,
                  opacity: contentOpacity,
                  scale: contentScale,
                  filter: contentBlur,
                }
              : undefined
          }
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

          {/* CTAs — each leans toward the pointer while it is over them. The
              lift on hover stays in CSS as `translate`, which composes with the
              inline `transform` Motion writes here instead of fighting it. */}
          <motion.div className="hero-cta" variants={fadeUp}>
            <motion.a
              href="#projects"
              className="hero-cta__primary"
              aria-label={t("hero.ctaPrimary")}
              {...primaryMagnet}
            >
              <span>{t("hero.ctaPrimary")}</span>
              <HiArrowRight className="hero-cta__arrow" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#contact"
              className="hero-cta__secondary"
              aria-label={t("hero.ctaSecondary")}
              {...secondaryMagnet}
            >
              {t("hero.ctaSecondary")}
            </motion.a>
            <motion.a
              href={RESUME_URL}
              className="hero-cta__ghost"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("hero.ctaResume")}
              {...resumeMagnet}
            >
              <FiDownload aria-hidden="true" />
              <span>{t("hero.ctaResume")}</span>
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero-socials"
            variants={fadeUp}
            role="list"
            aria-label={t("socials.ariaList", { ns: "common" })}
          >
            {socialLinks.map((social) => (
              <MagneticSocial
                key={social.id}
                social={social}
                label={t(`socials.${social.key}`, { ns: "common" })}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Portrait column ── */}
        <motion.div
          className="hero-avatar-col"
          variants={avatarIn}
          initial="hidden"
          animate="visible"
          style={motionSafe ? { y: avatarY, opacity: avatarOpacity } : undefined}
        >
          <div className="hero-avatar-glow" aria-hidden="true" />

          <div className="hero-avatar-frame">
            <span className="hero-avatar-ring" aria-hidden="true" />

            <div className="hero-lottie-bg" aria-hidden="true">
              <Lottie animationData={codingAnimation} loop aria-hidden="true" />
            </div>

            <img
              src={AVATAR_URL}
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

/**
 * Split out because `useMagnetic` is a hook: the social links are a mapped
 * list, and a hook cannot be called inside the map.
 */
const MagneticSocial = ({ social, label }) => {
  const magnet = useMagnetic(SOCIAL_MAGNET);
  const { Icon, link } = social;

  return (
    <motion.a
      href={link}
      className="hero-social-link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      role="listitem"
      {...magnet}
    >
      <Icon aria-hidden="true" />
    </motion.a>
  );
};

export default Hero;
