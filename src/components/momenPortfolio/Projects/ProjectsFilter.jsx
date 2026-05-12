import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Select } from "@design-system";
import { optionsSelect } from "@constants/myProject";

const ProjectsFilter = ({ value, onChange }) => {
  const { t } = useTranslation("portfolio");

  const options = useMemo(
    () =>
      optionsSelect.map((option) => ({
        value: option.value,
        label: t(`projects.filters.${option.value}`),
      })),
    [t]
  );

  return (
    <Select
      className="projects-filter"
      value={value}
      onChange={onChange}
      options={options}
      aria-label={t("projects.heading")}
    />
  );
};

export default ProjectsFilter;
