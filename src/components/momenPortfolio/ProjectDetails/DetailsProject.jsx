// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { IoIosLink, IoIosArrowRoundBack } from "react-icons/io";

import { Badge, Button, Card } from "@design-system";
import { fadeInUp, staggerContainer } from "@app/config/animation-variants";
import { projectsData } from "@constants/myProject";

import "./detailsProject.css";

const DetailsProject = () => {
  const { t } = useTranslation("portfolio");
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="project-details project-details--empty">
        <p className="project-details__missing">{t("projectDetails.notFound")}</p>
        <Button as={Link} to="/" variant="primary" size="md">
          <IoIosArrowRoundBack aria-hidden="true" />
          {t("projectDetails.backToHome")}
        </Button>
      </section>
    );
  }

  const meta = [
    { key: "year",     label: t("projectDetails.year"),     value: project.year },
    { key: "role",     label: t("projectDetails.role"),     value: project.role },
    { key: "status",   label: t("projectDetails.status"),   value: project.status },
    { key: "duration", label: t("projectDetails.duration"), value: project.duration },
  ];

  return (
    <motion.section
      className="project-details"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="project-details__topbar" variants={fadeInUp}>
        <Button
          as={Link}
          to="/"
          variant="ghost"
          size="sm"
          aria-label={t("projectDetails.backToProjects")}
        >
          <IoIosArrowRoundBack aria-hidden="true" />
          {t("projectDetails.backToProjects")}
        </Button>
      </motion.div>

      <motion.header className="project-details__hero" variants={fadeInUp}>
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          loading="eager"
          className="project-details__hero-img"
        />
        <div className="project-details__hero-overlay">
          <h1 className="project-details__title">{project.title}</h1>
          {project.tech?.length > 0 && (
            <div className="project-details__hero-tech">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          <div className="project-details__hero-actions">
            <Button
              as="a"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              aria-label={`${t("projects.liveDemo")} — ${project.title}`}
            >
              <IoIosLink aria-hidden="true" />
              {t("projects.liveDemo")}
            </Button>
            <Button
              as="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              aria-label={`${t("projects.github")} — ${project.title}`}
            >
              <FaGithub aria-hidden="true" />
              {t("projects.github")}
            </Button>
          </div>
        </div>
      </motion.header>

      <motion.ul className="project-details__meta" variants={fadeInUp} role="list">
        {meta.map((item) => (
          <Card key={item.key} as="li" className="project-details__meta-item">
            <span className="project-details__meta-label">{item.label}</span>
            <span className="project-details__meta-value">{item.value}</span>
          </Card>
        ))}
      </motion.ul>

      <motion.section className="project-details__block" variants={fadeInUp}>
        <h2 className="project-details__heading">
          {t("projectDetails.description")}
        </h2>
        <p className="project-details__prose">{project.description}</p>
      </motion.section>

      {project.features?.length > 0 && (
        <motion.section className="project-details__block" variants={fadeInUp}>
          <h2 className="project-details__heading">
            {t("projectDetails.features")}
          </h2>
          <ul className="project-details__features" role="list">
            {project.features.map((feature, i) => (
              <Card key={feature} as="li" className="project-details__feature">
                <span className="project-details__feature-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="project-details__feature-text">{feature}</span>
              </Card>
            ))}
          </ul>
        </motion.section>
      )}

      {project.performance?.length > 0 && (
        <motion.section className="project-details__block" variants={fadeInUp}>
          <h2 className="project-details__heading">
            {t("projectDetails.performance")}
          </h2>
          <ul className="project-details__performance" role="list">
            {project.performance.map((item) => (
              <li key={item} className="project-details__performance-item">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>
      )}
    </motion.section>
  );
};

export default DetailsProject;
