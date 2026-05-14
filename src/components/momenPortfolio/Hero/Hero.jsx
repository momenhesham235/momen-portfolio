// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { MdVerifiedUser } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi2";
import { codingAnimation } from "@assets";
import { socialLinks } from "@constants/heroData";
import "./hero.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.15 },
  },
};

const Hero = () => {
  const { t } = useTranslation("portfolio");
  const firstName = t("hero.firstName");
  const lastName = t("hero.lastName");
  const role = t("hero.role");

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-container">

        <motion.div
          className="hero-avatar-col"
          variants={slideLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-avatar-glow" aria-hidden="true" />

          <div className="hero-avatar-frame">
            <div className="hero-lottie-bg" aria-hidden="true">
              <Lottie animationData={codingAnimation} loop={true} aria-hidden="true" />
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
          </div>

          <div className="hero-badge" role="img" aria-label={t("hero.badge")}>
            <MdVerifiedUser className="hero-badge__icon" aria-hidden="true" />
            <span>{t("hero.badge")}</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-greeting" variants={fadeUp}>
            {t("hero.greeting")}
          </motion.span>

          <motion.h1 id="hero-heading" className="hero-heading" variants={fadeUp}>
            {t("hero.intro")} <span className="hero-heading__accent">{firstName}</span>
            <br />
            {lastName}
          </motion.h1>

          <motion.div className="hero-typing-wrapper" variants={fadeUp}>
            <p className="hero-typing-text" aria-label={role}>
              {role}
            </p>
          </motion.div>

          <motion.p className="hero-bio" variants={fadeUp}>
            {t("hero.bio")}
          </motion.p>

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

          <motion.div className="hero-cta" variants={fadeUp}>
            <a
              href="#projects"
              className="hero-cta__primary"
              aria-label={t("hero.ctaPrimary")}
            >
              {t("hero.ctaPrimary")}
              <HiArrowRight className="hero-cta__arrow" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="hero-cta__secondary"
              aria-label={t("hero.ctaSecondary")}
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
