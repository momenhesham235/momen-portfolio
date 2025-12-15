import "./featuresColumns.css";

const FeaturesColumns = ({ features }) => {
  return (
    <div className="features-columns">
      <ul>
        {features.slice(0, Math.ceil(features.length / 2)).map((f, i) => (
          <li key={i}>
            <strong>Feature {i + 1}:</strong> {f}
          </li>
        ))}
      </ul>
      <ul>
        {features.slice(Math.ceil(features.length / 2)).map((f, i) => (
          <li key={i}>
            <strong>Feature {i + 1 + Math.ceil(features.length / 2)}:</strong>{" "}
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesColumns;
