import { useTranslation } from "react-i18next";
import { HiOutlinePlusSmall } from "react-icons/hi2";

const LoadMoreButton = ({ onClick, remaining = 0 }) => {
  const { t } = useTranslation("portfolio");

  return (
    <div className="projects-load-more">
      <button
        type="button"
        className="projects-load-more__btn"
        onClick={onClick}
      >
        <HiOutlinePlusSmall aria-hidden="true" />
        <span>{t("projects.loadMore")}</span>
        {remaining > 0 && (
          <span className="projects-load-more__count" aria-hidden="true">
            {remaining}
          </span>
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;
