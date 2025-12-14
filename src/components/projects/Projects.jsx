import { useState } from "react";
import { projectsData } from "../../constant/data/myProject.js";
import FilterDropdown from "./FilterDropdown.jsx";
import { FaGithub } from "react-icons/fa6";
import { IoIosLink, IoIosArrowRoundForward } from "react-icons/io";

import "./projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Projects</h2>

        <FilterDropdown value={filter} onChange={setFilter} />
      </div>

      {/* Cards */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
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
                <div>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-more"
                  >
                    More <IoIosArrowRoundForward />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
