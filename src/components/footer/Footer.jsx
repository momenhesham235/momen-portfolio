import { useState } from "react";
import "./footer.css";
import { socialLinks } from "../../constant/data/heroData";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
    <footer className="footer">
      <div className="footer-container">
        <p>
          Made with{" "}
          <span
            className="heart"
            onClick={handleHeartClick}
            title="Click me! ❤️"
          >
            ❤️
          </span>{" "}
          by <strong style={{ color: "darkgoldenrod" }}>Momen Hesham</strong> —
          Thank you for visiting!
        </p>

        <div className="social-icons">
          {socialLinks.map((social) => {
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                {social.icon === "FaFacebook" && <FaFacebook />}
                {social.icon === "FaXTwitter" && <FaXTwitter />}
                {social.icon === "FaGithub" && <FaGithub />}
                {social.icon === "FaLinkedin" && <FaLinkedin />}
              </a>
            );
          })}
        </div>
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
