import { useState, useEffect } from "react";

const SECTION_IDS = ["home", "bio", "projects", "experience", "skills", "contact"];

/**
 * Tracks which page section is currently in view.
 * Uses IntersectionObserver to detect the active section as the user scrolls.
 * Section IDs are hardcoded to avoid stale-closure / infinite-loop issues
 * with array dependencies.
 *
 * @returns {string} The id of the currently active section
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        // Enter the "active" state when 30% of the section is in view
        // and leave it when only the top 40% remains visible
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return activeSection;
};
