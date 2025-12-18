import { useParams, Link } from "react-router-dom";
import { projectsData } from "../../../constant/data/myProject.js";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import "./detailsProject.css";
import FeaturesColumns from "../featuresColumns/FeaturesColumns.jsx";
import { useEffect } from "react";

const DetailsProject = () => {
  useEffect(() => {
    document.title = "Project Details | Momen Hesham Portfolio";
  }, []);

  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <p style={{ textAlign: "center" }}>Project not found 🚫</p>;
  }

  return (
    <section className="project-details">
      {/* Back */}
      <Link to="/momen-portfolio/" className="back-btn">
        ← Back to projects
      </Link>

      {/* Hero */}
      <div className="details-hero">
        <img src={project.image} alt={project.title} />
      </div>

      {/* Content */}
      <div className="details-content">
        {/* Project Name & Description */}
        <div className="detail-item">
          <h3 className="detail-label">Project Name</h3>
          <p className="detail-value">{project.title}</p>
        </div>

        <div className="detail-item">
          <h3 className="detail-label">Description</h3>
          <p className="detail-value">{project.description}</p>
        </div>

        {/* Project Info Grid */}
        <div className="project-info-grid">
          <div className="info-item">
            <h3 className="detail-label">Year</h3>
            <p className="detail-value">{project.year}</p>
          </div>
          <div className="info-item">
            <h3 className="detail-label">Role</h3>
            <p className="detail-value">{project.role}</p>
          </div>
          <div className="info-item">
            <h3 className="detail-label">Status</h3>
            <p className="detail-value">{project.status}</p>
          </div>
          <div className="info-item">
            <h3 className="detail-label">Duration</h3>
            <p className="detail-value">{project.duration}</p>
          </div>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="detail-item">
            <h3 className="detail-label">Features</h3>
            <FeaturesColumns features={project.features} />
          </div>
        )}

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="detail-item">
            <h3 className="detail-label">Tech Stack</h3>
            <div className="tech-list">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Performance */}
        {project.performance && project.performance.length > 0 && (
          <div className="detail-item">
            <h3 className="detail-label">Performance</h3>
            <ul className="performance-list">
              {project.performance.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="detail-item">
          <h3 className="detail-label">Links</h3>
          <div className="details-links">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <IoIosLink /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsProject;
