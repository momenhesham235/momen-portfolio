import QRCode from "react-qr-code";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaClock, FaLanguage, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt />
            <span>+20 106 274 9282</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Egypt (Remote)</span>
          </div>

          <div className="info-item">
            <FaClock />
            <span>Available for freelance & full-time</span>
          </div>

          <div className="info-item">
            <FaLanguage />
            <span>Arabic (Native), English (Good)</span>
          </div>

          <div className="qr-box">
            <QRCode
              value="mailto:hmomen235@gmail.com?subject=Contact%20From%20Portfolio"
              size={110}
              bgColor="#ffffff"
              fgColor="#000000"
            />
            <p>Scan to email me</p>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
