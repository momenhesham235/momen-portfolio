import { Trans, useTranslation } from "react-i18next";
import { Section } from "@design-system";
import "./bio.css";

const Bio = () => {
  const { t } = useTranslation("portfolio");

  return (
    <Section id="bio" className="bio" aria-labelledby="bio-heading">
      <div className="bio-container">
        <h2 id="bio-heading">{t("about.heading")}</h2>

        <article className="bio-text">
          <Trans
            i18nKey="about.body"
            ns="portfolio"
            components={{ strong: <strong /> }}
          />
        </article>
      </div>
    </Section>
  );
};

export default Bio;
