import "./error-message.css";

const ErrorMessage = ({ id, children }) => (
  <p id={id} className="ds-form-error" role="alert" aria-live="polite">
    {children}
  </p>
);

export default ErrorMessage;
