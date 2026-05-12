import "./label.css";

const Label = ({ children, required = false, className = "", ...props }) => (
  <label
    className={["ds-label", className].filter(Boolean).join(" ")}
    {...props}
  >
    {children}
    {required && (
      <span className="ds-label__required" aria-hidden="true">
        {" "}*
      </span>
    )}
  </label>
);

export default Label;
