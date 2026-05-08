import { useParams, Link } from "react-router-dom";
import { projectsData } from "../../../constant/data/myProject.js";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import FeaturesColumns from "../featuresColumns/FeaturesColumns.jsx";
import { SITE_URL } from "@/config/constants";
import "./detailsProject.css";

/**
 * Project Details Component
 * Displays comprehensive information about a single project
 */
const DetailsProject = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <p>🚫 Project not found</p>
        <Link to="/" className="back-btn">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <section className="project-details">
      {/* Back Button */}
      <Link to="/" className="back-btn" aria-label="Back to home page">
        ← Back to projects
      </Link>

      {/* Hero Image */}
      <div className="details-hero">
        <img 
          src={project.image} 
          alt={`${project.title} project screenshot`}
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="details-content">
        {/* Project Name & Description */}
        <div className="detail-item">
          <h1 className="detail-label">Project Name</h1>
          <p className="detail-value">{project.title}</p>
        </div>

        <div className="detail-item">
          <h2 className="detail-label">Description</h2>
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
            <h2 className="detail-label">Features</h2>
            <FeaturesColumns features={project.features} />
          </div>
        )}

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="detail-item">
            <h2 className="detail-label">Tech Stack</h2>
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
            <h2 className="detail-label">Performance</h2>
            <ul className="performance-list">
              {project.performance.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="detail-item">
          <h2 className="detail-label">Links</h2>
          <div className="details-links">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              <IoIosLink aria-hidden="true" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsProject;
