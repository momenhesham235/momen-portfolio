import { useTranslation } from "react-i18next";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaClock, FaLanguage } from "react-icons/fa6";
import { Section } from "@design-system";
import { ContactForm } from "@components/forms";
import { formatWhatsAppLink, formatEmailLink } from "@/utils/helpers";
import { SOCIAL_LINKS } from "@app/config/constants";
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation("portfolio");

  const infoItems = [
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      content: t("contact.phone"),
      href: formatWhatsAppLink(SOCIAL_LINKS.whatsapp),
      ariaLabel: "Contact via WhatsApp",
    },
    {
      Icon: FaEnvelope,
      label: "Email",
      content: SOCIAL_LINKS.email,
      href: formatEmailLink(SOCIAL_LINKS.email),
      ariaLabel: `Send email to ${SOCIAL_LINKS.email}`,
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      content: t("contact.location"),
    },
    {
      Icon: FaClock,
      label: "Availability",
      content: t("contact.availability"),
    },
    {
      Icon: FaLanguage,
      label: "Languages",
      content: t("contact.languages"),
    },
  ];

  return (
    <Section id="contact" heading={t("contact.heading")} className="contact">

      <div className="contact-info-grid">
        {infoItems.map((item) => (
          <div className="contact-info-card" key={item.label}>
            <div className="contact-info-card__icon">
              <item.Icon aria-hidden="true" />
            </div>
            <span className="contact-info-card__label">{item.label}</span>
            <div className="contact-info-card__content">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                >
                  {item.content}
                </a>
              ) : (
                <span>{item.content}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
