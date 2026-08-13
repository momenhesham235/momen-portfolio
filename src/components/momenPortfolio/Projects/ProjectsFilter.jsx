import { useMemo } from "react";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import { optionsSelect } from "@constants/myProject";

/**
 * Segmented filter rail.
 *
 * Replaces the old <Select>: with six short categories the whole taxonomy fits
 * on screen, so the choices are scannable instead of hidden behind a dropdown.
 * Rendered as a radio group so arrow keys and screen readers treat it as the
 * single-choice control it is.
 */
const ProjectsFilter = ({ value, onChange, counts = {} }) => {
  const { t } = useTranslation("portfolio");

  const options = useMemo(
    () =>
      optionsSelect.map((option) => ({
        value: option.value,
        label: t(`projects.filters.${option.value}`),
        count: counts[option.value] ?? 0,
      })),
    [t, counts]
  );

  return (
    <div
      className="projects-filter"
      role="radiogroup"
      aria-label={t("projects.filterLabel")}
    >
      {options.map((option) => {
        const isActive = option.value === value;
        const isEmpty = option.count === 0;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            disabled={isEmpty}
            className={`projects-filter__chip${isActive ? " is-active" : ""}`}
            onClick={() => onChange(option.value)}
          >
            {isActive && (
              <motion.span
                className="projects-filter__pill"
                layoutId="projects-filter-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                aria-hidden="true"
              />
            )}
            <span className="projects-filter__label">{option.label}</span>
            <span className="projects-filter__count" aria-hidden="true">
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectsFilter;
