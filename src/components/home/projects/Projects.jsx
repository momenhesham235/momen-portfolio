import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../../../constant/data/myProject.js";
import FilterDropdown from "./FilterDropdown.jsx";
import { FaGithub } from "react-icons/fa6";
import { IoIosLink, IoIosArrowRoundForward } from "react-icons/io";

import "./projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);
  return (
    <section id="projects" className="projects">
      {/* Header */}
      <div className="projects-header">
        <h2>Projects</h2>

        <FilterDropdown value={activeFilter} onChange={setActiveFilter} />
      </div>

      {/* Cards */}
      <div className="projects-grid">
        {filteredProjects.length === 0 ? (
          <div className="no-projects">
            <p>
              🚫 No projects found{" "}
              {activeFilter !== "All" && (
                <>
                  for <strong>{activeFilter}</strong>
                </>
              )}
            </p>

            <button
              className="reset-filter"
              onClick={() => setActiveFilter("All")}
            >
              Show all projects
            </button>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-links">
                  <div>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <IoIosLink />
                    </a>
                  </div>

                  <Link
                    to={`/momen-portfolio/details/${project.id}`}
                    className="project-more"
                  >
                    More <IoIosArrowRoundForward />
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
