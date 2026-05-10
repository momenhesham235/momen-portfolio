/**
 * Stack layout primitive
 * Flex column or row with uniform gap.
 *
 * @param {"column"|"row"} direction
 * @param {"xs"|"sm"|"md"|"lg"|"xl"} gap
 * @param {"flex-start"|"center"|"flex-end"|"stretch"} align
 * @param {"flex-start"|"center"|"flex-end"|"space-between"|"space-around"} justify
 * @param {boolean} wrap
 */
const GAP = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
};

const Stack = ({
  direction = "column",
  gap = "md",
  align = "stretch",
  justify = "flex-start",
  wrap = false,
  className = "",
  style = {},
  children,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: direction,
        gap: GAP[gap] ?? gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Stack;
