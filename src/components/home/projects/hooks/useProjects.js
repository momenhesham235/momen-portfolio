import { useState, useMemo } from "react";
import { projectsData } from "@constant/data/myProject.js";
import { PROJECTS_PER_PAGE, PROJECTS_LOAD_MORE_INCREMENT } from "@/config/constants";

/**
 * Custom hook for managing projects filtering and pagination
 * @returns {Object} Projects state and handlers
 */
const useProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  // Memoize filtered projects to avoid recalculation on every render
  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Memoize visible projects
  const visibleProjects = useMemo(() => {
    return [...filteredProjects].reverse().slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const total = filteredProjects.length;
  const hasMore = visibleCount < total;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_LOAD_MORE_INCREMENT);
  };

  const handleFilterChange = (value) => {
    setActiveFilter(value);
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  return {
    activeFilter,
    setActiveFilter,
    visibleCount,
    visibleProjects,
    total,
    hasMore,
    handleLoadMore,
    handleFilterChange,
  };
};

export default useProjects;
