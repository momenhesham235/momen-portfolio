import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { IoIosLink, IoIosArrowRoundForward } from "react-icons/io";

import { Card } from "@design-system";
import { fadeInUp } from "@app/config/animation-variants";
import { getProjectDetailsRoute } from "@app/routes/paths.js";
import { truncateText } from "@/utils/helpers";

import "./projectCard.css";

const DESCRIPTION_MAX_LENGTH = 100;

const ProjectCard = ({ project }) => {
  const { t } = useTranslation("portfolio");

  return (
    <Card
      as={motion.article}
      hoverable
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="project-card"
    >
      <img
        src={project.image}
        alt={`${project.title} project screenshot`}
        className="project-card__image"
        loading="lazy"
        decoding="async"
        width="400"
        height="180"
      />

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">
          {truncateText(project.description, DESCRIPTION_MAX_LENGTH)}
        </p>

        <div className="project-card__footer">
          <div className="project-card__links">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`${t("projects.github")} — ${project.title}`}
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`${t("projects.liveDemo")} — ${project.title}`}
            >
              <IoIosLink aria-hidden="true" />
            </a>
          </div>

          <Link
            to={getProjectDetailsRoute(project.id)}
            className="project-card__more"
            aria-label={`${t("projects.moreDetails")} — ${project.title}`}
          >
            {t("projects.moreDetails")}
            <IoIosArrowRoundForward aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
