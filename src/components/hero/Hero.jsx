import { socialLinks } from "../../constant/data/heroData.js";
import { MdVerifiedUser } from "react-icons/md";
import { FaXTwitter, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";


import { IoMail } from "react-icons/io5";

import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
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
