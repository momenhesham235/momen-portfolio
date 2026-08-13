// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosLink } from "react-icons/io";

import { fadeInUp } from "@app/config/animation-variants";
import { getProjectDetailsRoute } from "@app/routes/paths.js";
import { truncateText } from "@/utils/helpers";

import "./projectCard.css";

const DESCRIPTION_MAX_LENGTH = 108;
/** Chips beyond this are rolled into a "+n" pill so cards stay the same height. */
const VISIBLE_TECH = 3;

const ProjectCard = ({ project }) => {
  const { t } = useTranslation("portfolio");

  const tech = project.tech ?? [];
  const shownTech = tech.slice(0, VISIBLE_TECH);
  const overflowTech = tech.length - shownTech.length;

  return (
    <motion.article
      className="project-card"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      {/* ── Media ── */}
      <div className="project-card__media">
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="project-card__image"
          loading="lazy"
          decoding="async"
          width="400"
          height="200"
        />

        <span className="project-card__scrim" aria-hidden="true" />

        <span className="project-card__category">
          {t(`projects.filters.${project.category}`)}
        </span>

        <span className="project-card__year">{project.year}</span>

        {/* Quick links surface on hover, but stay reachable by keyboard at all
            times — they are real anchors, only their opacity is animated. */}
        <div className="project-card__quick">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__quick-link"
            aria-label={`${t("projects.github")} — ${project.title}`}
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__quick-link"
            aria-label={`${t("projects.liveDemo")} — ${project.title}`}
          >
            <IoIosLink aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">
          {truncateText(project.description, DESCRIPTION_MAX_LENGTH)}
        </p>

        {tech.length > 0 && (
          <ul className="project-card__tech" aria-label={t("projectDetails.techStack")}>
            {shownTech.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {overflowTech > 0 && (
              <li className="project-card__tech-more">+{overflowTech}</li>
            )}
          </ul>
        )}

        <Link
          to={getProjectDetailsRoute(project.id)}
          className="project-card__more"
          aria-label={`${t("projects.moreDetails")} — ${project.title}`}
        >
          {t("projects.moreDetails")}
          <HiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
