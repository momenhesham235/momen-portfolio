import { useState, useEffect } from "react";
import "./footer.css";

const Footer = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newHeart = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          Made with{" "}
          <span className="heart" title="click to make a heart">
            ❤️
          </span>{" "}
          by <strong>Momen Hesham</strong> — Thank you for visiting!
        </p>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Render hearts */}
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="floating-heart"
            style={{ left: heart.x, top: heart.y }}
          >
            ❤️
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
