import { Trans, useTranslation } from "react-i18next";
import { socialLinks } from "@constants/heroData";
import { getCurrentYear } from "@/utils/helpers";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <p className="footer__tagline">
          <Trans
            i18nKey="footer.tagline"
            ns="common"
            components={{ strong: <strong /> }}
          />
        </p>

        <ul className="social-icons" aria-label="Social profiles">
          {socialLinks.map(({ id, Icon, link, title }) => (
            <li key={id}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`Visit ${title}`}
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer-copy">
          {t("footer.copyright", { year: getCurrentYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
