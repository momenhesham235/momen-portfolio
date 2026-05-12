import "./card.css";

/**
 * Card primitive
 * A surface container with border, radius, and optional hover effect.
 *
 * @param {boolean} hoverable - Enable hover gold-border lift
 * @param {React.ElementType} as - Render as a different element (e.g. motion.article)
 * @param {string} className
 */
const Card = ({
  hoverable = false,
  as: Tag = "div",
  className = "",
  children,
  ...props
}) => {
  const classes = ["ds-card", hoverable ? "ds-card--hoverable" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Card;
