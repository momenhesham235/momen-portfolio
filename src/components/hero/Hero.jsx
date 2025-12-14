import { MdVerifiedUser } from "react-icons/md";
import { FaXTwitter, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";
import {
  IoIosLink,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";
import { IoMail } from "react-icons/io5";

import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="About">
      <div className="hero-container">
        {/* Left */}
        <div className="hero-left">
          <div className="avatar-wrapper">
            <img src="me.png" alt="Momen Hesham" className="avatar" />
            <span className="badge">
              <MdVerifiedUser className="badge-icon" /> Certified Developer
            </span>
          </div>

          <h1>
            Hi, I’m <span>Momen</span>
          </h1>

          <p className="typing-text">Frontend & Backend Developer</p>

          <div className="social-icons">
            <FaFacebook />
            <FaXTwitter />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="animation">Animation / Illustration</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
