import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaClock, FaLanguage } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import Lottie from "lottie-react";
import { contactAnimation } from "@assets";
import { formatWhatsAppLink, formatEmailLink } from "@/utils/helpers";
import { SOCIAL_LINKS } from "@app/config/constants";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">
        Contact Me
      </h2>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaWhatsapp aria-hidden="true" />
            <a
              href={formatWhatsAppLink(SOCIAL_LINKS.whatsapp)}
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
              href={formatEmailLink(SOCIAL_LINKS.email)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Send email to ${SOCIAL_LINKS.email}`}
            >
              {SOCIAL_LINKS.email}
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
              animationData={contactAnimation}
              loop={true}
              aria-hidden="true"
              role="img"
              aria-label="Contact animation"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
