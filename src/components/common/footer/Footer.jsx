import { socialLinks } from "@constants/heroData";
import { getIcon } from "./icon-map";
import { getCurrentYear } from "@/utils/helpers";
import "./footer.css";

/**
 * Footer Component
 * Displays social links and copyright information
 */
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <p>
          Made with ❤️ by{" "}
          <strong style={{ color: "darkgoldenrod" }}>Momen Hesham</strong> —
          Thank you for visiting!
        </p>

        <div className="social-icons">
          {socialLinks.map((social) => {
            const IconComponent = getIcon(social.icon);
            
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`Visit ${social.title}`}
              >
                {IconComponent && <IconComponent aria-hidden="true" />}
              </a>
            );
          })}
        </div>

        <p className="footer-copy">
          &copy; {getCurrentYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
