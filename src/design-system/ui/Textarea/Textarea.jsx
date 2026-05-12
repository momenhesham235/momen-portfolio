import "./textarea.css";

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={["ds-textarea", className].filter(Boolean).join(" ")}
    {...props}
  />
);

export default Textarea;
