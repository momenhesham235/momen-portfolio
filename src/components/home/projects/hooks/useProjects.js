import { useState } from "react";
import { projectsData } from "@constant/data/myProject.js";

const VISIBLE_COUNT = 6; // number of projects to show

const useProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT);

  // filtered projects
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const visibleProjects = [...filteredProjects]
    .reverse()
    .slice(0, visibleCount);

  const total = filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + VISIBLE_COUNT);
  };

  const handleFilterChange = (value) => {
    setActiveFilter(value);
    setVisibleCount(VISIBLE_COUNT);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return {
    activeFilter,
    setActiveFilter,
    visibleCount,
    visibleProjects,
    total,
    handleLoadMore,
    handleFilterChange,
    cardVariants,
    containerVariants,
  };
};

export default useProjects;
