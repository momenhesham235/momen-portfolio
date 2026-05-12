import { Link, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./error-boundary.css";

const ErrorBoundary = () => {
  const { t } = useTranslation("portfolio");
  const error = useRouteError();

  const status = error?.status ?? 500;
  const message =
    error?.statusText ||
    error?.message ||
    t("projectDetails.notFound");

  return (
    <div className="error-boundary" role="alert" aria-live="polite">
      <p className="error-boundary__status">{status}</p>
      <p className="error-boundary__message">{message}</p>
      <Link to="/" replace className="error-boundary__link">
        {t("projectDetails.backToHome")}
      </Link>
    </div>
  );
};

export default ErrorBoundary;
