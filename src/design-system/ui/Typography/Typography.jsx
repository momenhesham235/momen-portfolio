/**
 * Typography primitive
 * Polymorphic text component for consistent type rendering.
 *
 * @param {"h1"|"h2"|"h3"|"h4"|"p"|"span"|"small"|"caption"} as - HTML element
 * @param {"primary"|"secondary"|"accent"|"muted"} color
 * @param {string} className
 */
const Typography = ({
  as: Tag = "p",
  color = "primary",
  className = "",
  children,
  ...props
}) => {
  const colorMap = {
    primary: "var(--title-color)",
    secondary: "var(--subtitle-color)",
    accent: "var(--accent-color)",
    muted: "var(--subtitle-color)",
  };

  return (
    <Tag
      className={className}
      style={{ color: colorMap[color] }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;
