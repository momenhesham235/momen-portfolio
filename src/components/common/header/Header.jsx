import { useState } from "react";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

import { navbarData } from "@constants/navbar";
import { useTheme } from "@hooks/use-theme";
import { useLanguage } from "@hooks/use-language";
import { useFocusTrap } from "@hooks/use-focus-trap";
import { useLockBodyScroll } from "@hooks/use-lock-body-scroll";
import { useScrollEffect } from "@hooks/use-scroll-effect";
import { useActiveSection } from "@hooks/use-active-section";

import { LuSunMoon } from "react-icons/lu";
import { IoClose, IoMoonOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

import "./header.css";

const Header = () => {
  const { t } = useTranslation("common");
  const [showMenu, setShowMenu] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { scrolled } = useScrollEffect(20);
  const activeSection = useActiveSection();

  const menuRef = useFocusTrap(showMenu);
  useLockBodyScroll(showMenu);

  const closeMenu = () => setShowMenu(false);
  const langLabel = language.toUpperCase();
  const themeAriaLabel =
    theme === "dark" ? t("theme.switchToLight") : t("theme.switchToDark");

  return (
    <header
      className={`header${scrolled ? " header--scrolled" : ""}`}
      id="header"
    >
      <div className="header__inner">
        {/* ── Brand ── */}
        <a
          href="#home"
          className="header__brand"
          aria-label={t("header.backToTop")}
        >
          <span className="header__monogram" aria-hidden="true">
            MH
          </span>
          <span className="header__brand-name">{t("header.brand")}</span>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__nav-list">
            {navbarData.map((item) => {
              const sectionId = item.link.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className={`header__nav-link${isActive ? " header__nav-link--active" : ""}`}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {t(`nav.${item.key}`)}
                    {isActive && (
                      <span
                        className="header__nav-dot"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Actions ── */}
        <div className="header__actions">
          {/* Language toggle */}
          <button
            className="header__lang-btn"
            onClick={toggleLanguage}
            aria-label={t("header.toggleLanguage")}
            title={t("header.toggleLanguage")}
          >
            <MdLanguage aria-hidden="true" />
            <span aria-live="polite">{langLabel}</span>
          </button>

          {/* Theme toggle */}
          <button
            className="header__icon-btn"
            onClick={toggleTheme}
            aria-label={themeAriaLabel}
          >
            {theme === "dark" ? (
              <LuSunMoon aria-hidden="true" />
            ) : (
              <IoMoonOutline aria-hidden="true" />
            )}
          </button>

          {/* Resume download — desktop only */}
          <a
            href="Momen_Hesham_CV.pdf"
            className="header__resume-btn"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("header.downloadResume")}
          >
            <FiDownload aria-hidden="true" />
            <span>{t("header.resume")}</span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="header__hamburger"
            onClick={() => setShowMenu(true)}
            aria-label={t("header.openMenu")}
            aria-expanded={showMenu}
            aria-controls="mobile-drawer"
          >
            <IoIosMenu aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {/* Backdrop */}
            <motion.div
              className="mobile-overlay__backdrop"
              onClick={closeMenu}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer panel */}
            <motion.div
              className="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              id="mobile-drawer"
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Panel header */}
              <div className="mobile-drawer__header">
                <a
                  href="#home"
                  className="header__brand"
                  onClick={closeMenu}
                  aria-label={t("nav.home")}
                >
                  <span className="header__monogram" aria-hidden="true">
                    MH
                  </span>
                  <span className="header__brand-name">{t("header.brand")}</span>
                </a>
                <button
                  className="mobile-drawer__close"
                  onClick={closeMenu}
                  aria-label={t("header.closeMenu")}
                >
                  <IoClose aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <nav aria-label="Mobile Navigation">
                <ul className="mobile-drawer__nav">
                  {navbarData.map((item, index) => {
                    const sectionId = item.link.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.05 + index * 0.055,
                          type: "spring",
                          stiffness: 260,
                          damping: 24,
                        }}
                      >
                        <a
                          href={item.link}
                          className={`mobile-drawer__link${isActive ? " mobile-drawer__link--active" : ""}`}
                          onClick={closeMenu}
                          aria-current={isActive ? "location" : undefined}
                        >
                          <span
                            className="mobile-drawer__index"
                            aria-hidden="true"
                          >
                            0{index + 1}
                          </span>
                          {t(`nav.${item.key}`)}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Panel footer */}
              <div className="mobile-drawer__footer">
                <button
                  className="header__lang-btn"
                  onClick={toggleLanguage}
                  aria-label={t("header.toggleLanguage")}
                >
                  <MdLanguage aria-hidden="true" />
                  <span>{langLabel}</span>
                </button>
                <button
                  className="header__icon-btn"
                  onClick={toggleTheme}
                  aria-label={themeAriaLabel}
                >
                  {theme === "dark" ? (
                    <LuSunMoon aria-hidden="true" />
                  ) : (
                    <IoMoonOutline aria-hidden="true" />
                  )}
                </button>
                <a
                  href="Momen_Hesham_CV.pdf"
                  className="header__resume-btn header__resume-btn--full"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("header.downloadResume")}
                >
                  <FiDownload aria-hidden="true" />
                  <span>{t("header.downloadResume")}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
