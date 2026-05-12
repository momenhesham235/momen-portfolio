import { useTranslation } from "react-i18next";
import "./skip-link.css";

/**
 * Skip to Content Link
 * Accessibility feature for keyboard navigation
 * Allows users to skip directly to main content
 */
const SkipLink = () => {
  const { t } = useTranslation("common");
  return (
    <a href="#main-content" className="skip-link">
      {t("a11y.skipToContent")}
    </a>
  );
};

export default SkipLink;
