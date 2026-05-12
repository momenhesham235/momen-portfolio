import { useTranslation } from "react-i18next";

const ProjectsEmptyState = ({ activeFilter, onReset }) => {
  const { t } = useTranslation("portfolio");
  const hasFilter = activeFilter !== "all";

  return (
    <div className="projects-empty">
      <p className="projects-empty__message">
        🚫 {t("projects.noProjects")}
        {hasFilter && (
          <>
            {" "}
            {t("projects.noProjectsFor")} <strong>{activeFilter}</strong>
          </>
        )}
      </p>
      <button
        type="button"
        className="projects-empty__reset"
        onClick={onReset}
      >
        {t("projects.showAll")}
      </button>
    </div>
  );
};

export default ProjectsEmptyState;
