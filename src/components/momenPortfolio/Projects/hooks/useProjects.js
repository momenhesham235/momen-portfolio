import { useCallback, useMemo, useState } from "react";
import { projectsData, optionsSelect } from "@constants/myProject";
import {
  PROJECTS_PER_PAGE,
  PROJECTS_LOAD_MORE_INCREMENT,
} from "@app/config/constants";

const useProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const visibleProjects = useMemo(() => {
    return [...filteredProjects].reverse().slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  /**
   * How many projects sit behind each filter, so the chips can carry a count
   * and empty categories can be visibly disabled rather than silently
   * returning nothing when clicked.
   */
  const filterCounts = useMemo(() => {
    return optionsSelect.reduce((acc, { value }) => {
      acc[value] =
        value === "all"
          ? projectsData.length
          : projectsData.filter((p) => p.category === value).length;
      return acc;
    }, {});
  }, []);

  const hasMore = visibleCount < filteredProjects.length;
  const remaining = Math.max(filteredProjects.length - visibleCount, 0);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + PROJECTS_LOAD_MORE_INCREMENT);
  }, []);

  const handleFilterChange = useCallback((value) => {
    setActiveFilter(value);
    setVisibleCount(PROJECTS_PER_PAGE);
  }, []);

  return {
    activeFilter,
    visibleProjects,
    filterCounts,
    totalCount: filteredProjects.length,
    hasMore,
    remaining,
    handleLoadMore,
    handleFilterChange,
  };
};

export default useProjects;
