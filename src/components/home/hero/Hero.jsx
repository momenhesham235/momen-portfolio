import { MdVerifiedUser } from "react-icons/md";
import Lottie from "lottie-react";
import codingAnimation from "../../../assets/animations/Coding.json";
import "./hero.css";
import LazyImage from "../../../hooks/onLoad.jsx";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left */}
        <div className="hero-left">
          <div className="avatar-wrapper">
            <LazyImage
              src="me.png"
              alt="Momen Hesham"
              className="avatar"
              loading="lazy"
            />
            <span className="badge">
              <MdVerifiedUser className="badge-icon" /> Certified Developer
            </span>
          </div>

          <h1>
            Hi, I’m <span>Momen</span>
          </h1>

          <p className="typing-text">Frontend & Backend Developer</p>

          <div className="cv-btn-wrapper">
            <a
              href="Momen-Hesham-CV.pdf"
              className="cv-btn"
              download
              target="_blank"
              rel="noopener noreferrer"
              title="Download My CV"
            >
              Download CV
              <FiDownload className="cv-icon" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <Lottie
            animationData={codingAnimation}
            loop={true}
            // style={{ width: "80%", height: "80%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
