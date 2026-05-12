import "./input.css";

const Input = ({ className = "", ...props }) => (
  <input
    className={["ds-input", className].filter(Boolean).join(" ")}
    {...props}
  />
);

export default Input;
