import { Link } from "react-router-dom";
import useProjects from "./hooks/useProjects.js";

import LazyImage from "@hooks/onLoad.jsx";
import FilterDropdown from "./FilterDropdown.jsx";

import { FaGithub } from "react-icons/fa6";
import { IoIosLink, IoIosArrowRoundForward } from "react-icons/io";

// eslint-disable-next-line
import { motion, AnimatePresence } from "motion/react";

import "./projects.css";

const Projects = () => {
  const {
    activeFilter,
    setActiveFilter,
    visibleCount,
    visibleProjects,
    total,
    handleLoadMore,
    handleFilterChange,
    cardVariants,
    containerVariants,
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
        variants={containerVariants}
        initial="hidden"
      >
        <AnimatePresence>
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
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="project-card"
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description.substring(0, 100) + "..."}
                  </p>

                  <div className="project-links">
                    <div>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`GitHub repository of ${project.title}`}
                      >
                        <FaGithub aria-hidden="true" />
                      </a>

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <IoIosLink
                          aria-label={`Live demo of ${project.title}`}
                        />
                      </a>
                    </div>

                    <Link
                      to={`details/${project.id}`}
                      className="project-more"
                      title={`More details about ${project.title}`}
                    >
                      More
                      <IoIosArrowRoundForward
                        aria-label={`More details about ${project.title}`}
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pagination / Slider */}
      {visibleCount < total && (
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
