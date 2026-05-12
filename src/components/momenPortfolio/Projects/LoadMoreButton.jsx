import { useTranslation } from "react-i18next";

const LoadMoreButton = ({ onClick }) => {
  const { t } = useTranslation("portfolio");

  return (
    <div className="projects-load-more">
      <button
        type="button"
        className="projects-load-more__btn"
        onClick={onClick}
      >
        {t("projects.loadMore")}
      </button>
    </div>
  );
};

export default LoadMoreButton;
