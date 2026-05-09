import { useState, useEffect } from "react";

/**
 * Tracks whether the page has been scrolled past a given threshold.
 * Use for scroll-aware sticky header effects.
 *
 * @param {number} threshold - Scroll distance in px before triggering (default 20)
 * @returns {{ scrolled: boolean }}
 */
export const useScrollEffect = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Set initial state in case the page loads already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled };
};
