import { Link, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "motion/react";
import "./error-boundary.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 20 },
  },
};

const ErrorBoundary = () => {
  const { t } = useTranslation("portfolio");
  const error = useRouteError();
  const reduced = useReducedMotion();

  const status = error?.status ?? 500;
  const message =
    error?.statusText || error?.message || t("projectDetails.notFound");

  return (
    <section className="error-boundary" role="alert" aria-live="polite">
      <div className="error-boundary__glow" aria-hidden="true" />
      <div className="error-boundary__grid" aria-hidden="true" />

      <motion.div
        className="error-boundary__panel"
        variants={containerVariants}
        initial={reduced ? false : "hidden"}
        animate="visible"
      >
        <motion.h1
          className="error-boundary__status"
          variants={fadeUp}
          aria-label={`Error ${status}`}
        >
          <span aria-hidden="true">{status}</span>
        </motion.h1>

        <motion.p className="error-boundary__message" variants={fadeUp}>
          {message}
        </motion.p>

        <motion.div className="error-boundary__actions" variants={fadeUp}>
          <Link to="/" replace className="error-boundary__link">
            {t("projectDetails.backToHome")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ErrorBoundary;
