import { cloneElement } from "react";
import Label from "@design-system/ui/Label/Label";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./form-field.css";

/**
 * FormField — composition wrapper for accessible form controls.
 *
 * Injects `id`, `aria-invalid`, and `aria-describedby` into the child
 * control so the child stays a pure, dumb primitive.
 *
 * Usage:
 *   <FormField label="Email" htmlFor="email" required error={emailError}>
 *     <Input name="email" type="email" />
 *   </FormField>
 */
const FormField = ({
  label,
  htmlFor,
  required = false,
  error,
  children,
  className = "",
}) => {
  const errorId = htmlFor ? `${htmlFor}-error` : undefined;

  const child = cloneElement(children, {
    id: htmlFor,
    ...(error && {
      "aria-invalid": "true",
      "aria-describedby": errorId,
    }),
  });

  return (
    <div className={["ds-form-field", className].filter(Boolean).join(" ")}>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {child}
      {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
    </div>
  );
};

export default FormField;
