import { useState } from "react";
import "./footer.css";
import { socialLinks } from "../../constant/data/heroData";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Footer = () => {
  const [hearts, setHearts] = useState([]);

  const handleHeartClick = (e) => {
    // نجيب إحداثيات القلب نفسه بالنسبة للصفحة
    const rect = e.currentTarget.getBoundingClientRect();
    const newHeart = {
      id: Date.now(),
      x: rect.left + rect.width / 2, // منتصف القلب
      y: rect.top, // أعلى القلب
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <p>
          Made with{" "}
          <button
            className="heart"
            onClick={handleHeartClick}
            aria-label="Give a heart ❤️"
            type="button"
          >
            ❤️
          </button>{" "}
          by <strong style={{ color: "darkgoldenrod" }}>Momen Hesham</strong> —
          Thank you for visiting!
        </p>

        <div className="social-icons">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={social.title}
            >
              {social.icon === "FaFacebook" && (
                <FaFacebook aria-hidden="true" />
              )}
              {social.icon === "FaXTwitter" && (
                <FaXTwitter aria-hidden="true" />
              )}
              {social.icon === "FaLinkedin" && (
                <FaLinkedin aria-hidden="true" />
              )}
              {social.icon === "FaGithub" && <FaGithub aria-hidden="true" />}
              {social.icon === "TbBrandLeetcode" && (
                <TbBrandLeetcode aria-hidden="true" />
              )}
            </a>
          ))}
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Render floating hearts */}
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="floating-heart"
            style={{ left: heart.x, top: heart.y }}
            aria-hidden="true"
          >
            ❤️
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
