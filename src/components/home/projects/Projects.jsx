import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

import useProjects from "./hooks/useProjects.js";
import { LazyImage } from "@components/common";
import FilterDropdown from "./FilterDropdown.jsx";

import { fadeInUp, staggerContainer } from "@/config/animation-variants";
import { truncateText } from "@/utils/helpers";

import { FaGithub } from "react-icons/fa6";
import { IoIosLink, IoIosArrowRoundForward } from "react-icons/io";

import "./projects.css";

/**
 * Projects Section Component
 * Displays filterable and paginated project portfolio
 */
const Projects = () => {
  const {
    activeFilter,
    setActiveFilter,
    visibleProjects,
    hasMore,
    handleLoadMore,
    handleFilterChange,
  } = useProjects();

  return (
    <section
      id="projects"
      className="projects"
      role="region"
      aria-label="Projects"
    >
      {/* Header */}
      <div className="projects-header">
        <h2>Projects</h2>
        <FilterDropdown value={activeFilter} onChange={handleFilterChange} />
      </div>

      {/* Projects Grid */}
      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.length === 0 ? (
            <div className="no-projects">
              <p>
                🚫 No projects found{" "}
                {activeFilter !== "all" && (
                  <>
                    for <strong>{activeFilter}</strong>
                  </>
                )}
              </p>
              <button
                className="reset-filter"
                onClick={() => setActiveFilter("all")}
              >
                Show all projects
              </button>
            </div>
          ) : (
            visibleProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="project-card"
              >
                <LazyImage
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="project-image"
                />

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {truncateText(project.description, 100)}
                  </p>

                  <div className="project-links">
                    <div>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub aria-hidden="true" />
                      </a>

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <IoIosLink aria-hidden="true" />
                      </a>
                    </div>

                    <Link
                      to={`details/${project.id}`}
                      className="project-more"
                      aria-label={`View more details about ${project.title}`}
                    >
                      More
                      <IoIosArrowRoundForward aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {hasMore && (
        <div className="load-more-wrapper">
          <button onClick={handleLoadMore} className="load-more-btn">
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
