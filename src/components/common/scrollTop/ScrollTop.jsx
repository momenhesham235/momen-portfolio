import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./scrollTop.css";

const ScrollTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  // تابع scroll position
  const handleScroll = () => {
    setShowGoTop(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll up smooth
  const handleScrollUp = () => {
    const scrollStep = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -100); // speed of scroll
        requestAnimationFrame(scrollStep);
      } else {
        setShowGoTop(false); // hide button when scroll to top
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <button
      className={`scroll-top ${showGoTop ? "show" : ""}`}
      aria-label="Scroll to top"
      title="Scroll to top"
      onPointerDown={handleScrollUp} // support Desktop + Mobile
    >
      <IoIosArrowUp aria-hidden="true" />
    </button>
  );
};

export default ScrollTop;
