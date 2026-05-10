import "./badge.css";

/**
 * Badge primitive
 * Small pill label for tech stacks, categories, statuses.
 *
 * @param {"default"|"accent"|"ghost"} variant
 * @param {string} className
 */
const Badge = ({ variant = "default", className = "", children, ...props }) => {
  const classes = [
    "ds-badge",
    `ds-badge--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
