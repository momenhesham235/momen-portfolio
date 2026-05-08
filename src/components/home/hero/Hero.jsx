import { MdVerifiedUser } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Lottie from "lottie-react";
import { codingAnimation } from "@assets";
import "./hero.css";

/**
 * Hero Section Component
 * Main landing section with introduction and CTA
 */
const Hero = () => {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-container">
        {/* Left */}
        <div className="hero-left">
          <div className="avatar-wrapper">
            <img
              src="me.png"
              alt="Momen Hesham - Software Engineer"
              className="avatar"
              loading="eager"
              fetchpriority="high"
            />

            <span className="badge">
              <MdVerifiedUser className="badge-icon" aria-hidden="true" />
              Certified Developer
            </span>
          </div>

          <h1 id="hero-heading">
            Hi, I'm <span>Momen</span>
          </h1>

          <div className="typing-wrapper">
            <p className="typing-text">Frontend & Backend Developer</p>
          </div>

          <div className="cv-btn-wrapper">
            <a
              href="Momen-Hesham-CV.pdf"
              className="cv-btn"
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Momen Hesham CV as PDF"
            >
              Download CV
              <FiDownload className="cv-icon" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <Lottie
            animationData={codingAnimation}
            loop={true}
            aria-hidden="true"
            role="img"
            aria-label="Coding animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
