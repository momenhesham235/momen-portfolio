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
    filterCounts,
    hasMore,
    remaining,
    handleLoadMore,
    handleFilterChange,
  } = useProjects();

  const isEmpty = visibleProjects.length === 0;

  return (
    <Section
      id="projects"
      className="projects"
      eyebrow={t("projects.eyebrow")}
      heading={t("projects.heading")}
      subtitle={t("projects.subtitle")}
    >
      <ProjectsFilter
        value={activeFilter}
        onChange={handleFilterChange}
        counts={filterCounts}
      />

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

      {hasMore && <LoadMoreButton onClick={handleLoadMore} remaining={remaining} />}
    </Section>
  );
};

export default Projects;
