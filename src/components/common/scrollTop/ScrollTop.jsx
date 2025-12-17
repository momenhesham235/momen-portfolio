import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import "./scrollTop.css";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`scroll-top ${showScroll ? "show" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollTop;
