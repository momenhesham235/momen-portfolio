// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Trans, useTranslation } from "react-i18next";
import { FiArrowUp } from "react-icons/fi";

import { socialLinks } from "@constants/heroData";
import { navbarData } from "@constants/navbar";
import { getCurrentYear } from "@/utils/helpers";
import "./footer.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 22 },
  },
};

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="footer" id="footer">
      <motion.div
        className="footer__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="footer__top">
          {/* ── Brand column ── */}
          <motion.div className="footer__col footer__col--brand" variants={fadeUp}>
            <a
              href="#home"
              className="footer__brand"
              aria-label={t("header.backToTop")}
            >
              <span className="footer__monogram" aria-hidden="true">MH</span>
              <span className="footer__brand-text">
                <span className="footer__brand-name">{t("header.fullName")}</span>
                <span className="footer__brand-role">{t("footer.role")}</span>
              </span>
            </a>

            <p className="footer__tagline">
              <Trans
                i18nKey="footer.tagline"
                ns="common"
                components={{ strong: <strong /> }}
              />
            </p>
          </motion.div>

          {/* ── Navigate column ── */}
          <motion.nav
            className="footer__col"
            aria-label={t("footer.navigate")}
            variants={fadeUp}
          >
            <h3 className="footer__col-title">{t("footer.navigate")}</h3>
            <ul className="footer__nav">
              {navbarData.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="footer__nav-link">
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* ── Connect column ── */}
          <motion.div className="footer__col" variants={fadeUp}>
            <h3 className="footer__col-title">{t("footer.connect")}</h3>
            <ul className="footer__socials" aria-label={t("socials.ariaList")}>
              {socialLinks.map(({ id, Icon, link, key }) => {
                const name = t(`socials.${key}`);
                return (
                  <li key={id}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label={t("socials.visit", { name })}
                    >
                      <Icon aria-hidden="true" />
                      <span>{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <motion.div className="footer__bottom" variants={fadeUp}>
          <p className="footer__copy">
            {t("footer.copyright", { year: getCurrentYear() })}
          </p>

          <a
            href="#home"
            className="footer__top-btn"
            aria-label={t("footer.backToTop")}
            title={t("footer.backToTop")}
          >
            <FiArrowUp aria-hidden="true" />
            <span>{t("footer.backToTop")}</span>
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
