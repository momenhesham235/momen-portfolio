import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectsData } from "@constants/myProject";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import FeaturesColumns from "./FeaturesColumns.jsx";
import "./detailsProject.css";

const DetailsProject = () => {
  const { t } = useTranslation("portfolio");
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <p>{t("projectDetails.notFound")}</p>
        <Link to="/" className="back-btn">
          {t("projectDetails.backToHome")}
        </Link>
      </div>
    );
  }

  return (
    <section className="project-details">
      <Link to="/" className="back-btn" aria-label={t("projectDetails.backToProjects")}>
        {t("projectDetails.backToProjects")}
      </Link>

      <div className="details-hero">
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          loading="eager"
        />
      </div>

      <div className="details-content">
        <div className="detail-item">
          <h1 className="detail-label">{t("projectDetails.projectName")}</h1>
          <p className="detail-value">{project.title}</p>
        </div>

        <div className="detail-item">
          <h2 className="detail-label">{t("projectDetails.description")}</h2>
          <p className="detail-value">{project.description}</p>
        </div>

        <div className="project-info-grid">
          <div className="info-item">
            <h3 className="detail-label">{t("projectDetails.year")}</h3>
            <p className="detail-value">{project.year}</p>
          </div>
          <div className="info-item">
            <h3 className="detail-label">{t("projectDetails.role")}</h3>
            <p className="detail-value">{project.role}</p>
          </div>
          <div className="info-item">
            <h3 className="detail-label">{t("projectDetails.status")}</h3>
            <p className="detail-value">{project.status}</p>
          </div>
          <div className="info-item">
            <h3 className="detail-label">{t("projectDetails.duration")}</h3>
            <p className="detail-value">{project.duration}</p>
          </div>
        </div>

        {project.features?.length > 0 && (
          <div className="detail-item">
            <h2 className="detail-label">{t("projectDetails.features")}</h2>
            <FeaturesColumns features={project.features} />
          </div>
        )}

        {project.tech?.length > 0 && (
          <div className="detail-item">
            <h2 className="detail-label">{t("projectDetails.techStack")}</h2>
            <div className="tech-list">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        )}

        {project.performance?.length > 0 && (
          <div className="detail-item">
            <h2 className="detail-label">{t("projectDetails.performance")}</h2>
            <ul className="performance-list">
              {project.performance.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-item">
          <h2 className="detail-label">{t("projectDetails.links")}</h2>
          <div className="details-links">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.github")} — ${project.title}`}
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.liveDemo")} — ${project.title}`}
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
