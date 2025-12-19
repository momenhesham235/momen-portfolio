import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../../../constant/data/myProject.js";
import FilterDropdown from "./FilterDropdown.jsx";
import { FaGithub } from "react-icons/fa6";
import { IoIosLink, IoIosArrowRoundForward } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";
import "./projects.css";
import LazyImage from "../../../hooks/onLoad.jsx";

const VISIBLE_COUNT = 6; // عدد المشاريع المعروضة

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [startIndex, setStartIndex] = useState(0); // pointer for pagination

  // filtered projects
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // projects length
  const total = filteredProjects.length;

  // projects to show
  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  // update startIndex when activeFilter changes
  useEffect(() => {
    setStartIndex(0);
  }, [activeFilter]);

  // Next handler
  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < total) {
      setStartIndex((prev) => prev + 1);
    }
  };

  // Prev handler
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

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
        <FilterDropdown value={activeFilter} onChange={setActiveFilter} />
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
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
                layout
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
                      to={`/momen-portfolio/details/${project.id}`}
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
      </div>

      {/* Pagination / Slider */}
      <div className="pagination">
        <button
          disabled={startIndex === 0}
          onClick={handlePrev}
          aria-label="Previous projects"
        >
          Prev
        </button>
        <span>
          {startIndex + 1} - {Math.min(startIndex + VISIBLE_COUNT, total)} of{" "}
          {total}
        </span>
        <button
          disabled={startIndex + VISIBLE_COUNT >= total}
          onClick={handleNext}
          aria-label="Next projects"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
