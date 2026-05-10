// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Lottie from "lottie-react";
import { MdVerifiedUser } from "react-icons/md";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi2";
import { codingAnimation } from "@assets";
import { socialLinks } from "@constants/heroData";
import "./hero.css";

const ICON_MAP = {
  FaFacebook,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  TbBrandLeetcode,
};

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
              src="me.png"
              alt="Momen Hesham — Software Engineer"
              className="hero-avatar"
              loading="eager"
              fetchpriority="high"
              width="280"
              height="280"
            />
          </div>

          <div className="hero-badge" role="img" aria-label="Certified Developer">
            <MdVerifiedUser className="hero-badge__icon" aria-hidden="true" />
            <span>Certified Developer</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-greeting" variants={fadeUp}>
            Hello, World 👋
          </motion.span>

          <motion.h1 id="hero-heading" className="hero-heading" variants={fadeUp}>
            I&apos;m <span className="hero-heading__accent">Momen</span>
            <br />
            Hesham
          </motion.h1>

          <motion.div className="hero-typing-wrapper" variants={fadeUp}>
            <p className="hero-typing-text" aria-label="Frontend & Backend Developer">
              Frontend &amp; Backend Developer
            </p>
          </motion.div>

          <motion.p className="hero-bio" variants={fadeUp}>
            Building performant, accessible web experiences with React,
            TypeScript &amp; Node.js.
          </motion.p>

          <motion.div
            className="hero-socials"
            variants={fadeUp}
            role="list"
            aria-label="Social profiles"
          >
            {socialLinks.map((item) => {
              const Icon = ICON_MAP[item.icon];
              if (!Icon) return null;
              return (
                <a
                  key={item.id}
                  href={item.link}
                  className="hero-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                  role="listitem"
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </motion.div>

          <motion.div className="hero-cta" variants={fadeUp}>
            <a href="#projects" className="hero-cta__primary" aria-label="View my projects">
              View My Work
              <HiArrowRight className="hero-cta__arrow" aria-hidden="true" />
            </a>
            <a href="#contact" className="hero-cta__secondary" aria-label="Go to contact section">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
