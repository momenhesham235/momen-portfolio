import { useState, useMemo } from "react";
import { projectsData } from "@constants/myProject";
import { PROJECTS_PER_PAGE, PROJECTS_LOAD_MORE_INCREMENT } from "@app/config/constants";

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
