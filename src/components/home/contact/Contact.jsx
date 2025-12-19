import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaClock, FaLanguage } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import Lottie from "lottie-react";
import codingAnimation from "../../../assets/animations/contact us.json";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">
        Contact Me
      </h2>

      <div className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaWhatsapp aria-hidden="true" />
            <a
              href="https://wa.me/201062749282"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
            >
              +20 106 274 9282
            </a>
          </div>

          <div className="info-item">
            <FaEnvelope aria-hidden="true" />
            <a
              href="mailto:hmomen235@gmail.com?subject=Contact%20From%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email to hmomen235@gmail.com"
            >
              hmomen235@gmail.com
            </a>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Egypt (Remote)</span>
          </div>

          <div className="info-item">
            <FaClock aria-hidden="true" />
            <span>Available for freelance & full-time</span>
          </div>

          <div className="info-item">
            <FaLanguage aria-hidden="true" />
            <span>Arabic (Native), English (Good)</span>
          </div>

          <div className="contact-animation">
            <Lottie
              animationData={codingAnimation}
              loop={true}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
