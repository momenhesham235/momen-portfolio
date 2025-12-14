import { useState } from "react";
import { projectsData } from "../../constant/data/myProject.js";
import "./projects.css";
import FilterDropdown from "./FilterDropdown.jsx";

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
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <span className="tag">{project.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
