import { cloneElement } from "react";
import Label from "@design-system/ui/Label/Label";
import { useRipple } from "@hooks/use-ripple";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./form-field.css";

/**
 * FormField — composition wrapper for accessible form controls.
 *
 * Injects `id`, `aria-invalid`, and `aria-describedby` into the child
 * control so the child stays a pure, dumb primitive.
 *
 * Also owns the focus ripple. It lives here rather than in Input/Textarea
 * because a form control cannot carry pseudo-elements or children of its own —
 * the wave needs a wrapper to be painted into, and putting that wrapper here
 * means every control composed through FormField gets it for free.
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
  const ripple = useRipple();

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

      {/* React's onFocus is backed by focusin, which bubbles — so a click or a
          tab into the control below both reach these handlers. */}
      <span className="ds-form-field__control" {...ripple}>
        {child}
        <span className="ds-form-field__ripple" aria-hidden="true">
          <span className="ds-form-field__wave" />
        </span>
      </span>

      {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
    </div>
  );
};

export default FormField;
