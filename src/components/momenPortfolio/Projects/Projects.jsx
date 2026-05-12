// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

import { Section } from "@design-system";
import { staggerContainer } from "@app/config/animation-variants";

import useProjects from "./hooks/useProjects.js";
import ProjectsFilter from "./ProjectsFilter.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectsEmptyState from "./ProjectsEmptyState.jsx";
import LoadMoreButton from "./LoadMoreButton.jsx";

import "./projects.css";

const Projects = () => {
  const { t } = useTranslation("portfolio");
  const {
    activeFilter,
    visibleProjects,
    hasMore,
    handleLoadMore,
    handleFilterChange,
  } = useProjects();

  const isEmpty = visibleProjects.length === 0;

  return (
    // h2 lives inside .projects-header alongside the filter — aria-label used instead
    <Section
      id="projects"
      className="projects"
      aria-label={t("projects.heading")}
    >
      <div className="projects-header">
        <h2>{t("projects.heading")}</h2>
        <ProjectsFilter value={activeFilter} onChange={handleFilterChange} />
      </div>

      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
      >
        <AnimatePresence mode="popLayout">
          {isEmpty ? (
            <ProjectsEmptyState
              activeFilter={activeFilter}
              onReset={() => handleFilterChange("all")}
            />
          ) : (
            visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {hasMore && <LoadMoreButton onClick={handleLoadMore} />}
    </Section>
  );
};

export default Projects;
