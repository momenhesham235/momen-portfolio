import "./button.css";

/**
 * Button primitive
 *
 * @param {"primary"|"secondary"|"ghost"} variant
 * @param {"sm"|"md"|"lg"} size
 * @param {boolean} fullWidth
 * @param {React.ElementType} as - render as a different element (e.g. "a")
 */
const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  as: Tag = "button",
  className = "",
  children,
  ...props
}) => {
  const classes = [
    "ds-btn",
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    fullWidth ? "ds-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
