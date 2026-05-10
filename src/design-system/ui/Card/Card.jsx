import "./card.css";

/**
 * Card primitive
 * A surface container with border, radius, and optional hover effect.
 *
 * @param {boolean} hoverable - Enable hover lift effect
 * @param {string} className
 */
const Card = ({ hoverable = false, className = "", children, ...props }) => {
  const classes = ["ds-card", hoverable ? "ds-card--hoverable" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
