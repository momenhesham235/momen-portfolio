import { useTranslation } from "react-i18next";
import "./featuresColumns.css";

const FeaturesColumns = ({ features }) => {
  const { t } = useTranslation("portfolio");
  const mid = Math.ceil(features.length / 2);

  return (
    <div className="features-columns">
      <ul>
        {features.slice(0, mid).map((f, i) => (
          <li key={i}>
            <strong>{t("projectDetails.featureLabel", { number: i + 1 })}:</strong> {f}
          </li>
        ))}
      </ul>
      <ul>
        {features.slice(mid).map((f, i) => (
          <li key={i}>
            <strong>{t("projectDetails.featureLabel", { number: i + 1 + mid })}:</strong> {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesColumns;
