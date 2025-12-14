import "./contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope />
            <span>hmomen235@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+20 106 274 9282</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Egypt / Mansoura City</span>
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
