import { useEffect } from "react";

/**
 * Custom hook to scroll to top on mount
 * Useful for route changes to ensure user starts at top of page
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
};
