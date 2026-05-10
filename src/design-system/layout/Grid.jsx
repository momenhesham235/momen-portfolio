/**
 * Grid layout primitive
 * CSS grid with configurable columns and gap.
 *
 * @param {number|string} cols - Number of columns or CSS grid-template-columns value
 * @param {"xs"|"sm"|"md"|"lg"|"xl"} gap
 * @param {string} minColWidth - Minimum column width for auto-fill (e.g. "200px")
 */
const GAP = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
};

const Grid = ({
  cols,
  gap = "md",
  minColWidth,
  className = "",
  style = {},
  children,
  ...props
}) => {
  let gridTemplateColumns;

  if (minColWidth) {
    gridTemplateColumns = `repeat(auto-fill, minmax(${minColWidth}, 1fr))`;
  } else if (typeof cols === "number") {
    gridTemplateColumns = `repeat(${cols}, 1fr)`;
  } else if (typeof cols === "string") {
    gridTemplateColumns = cols;
  }

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns,
        gap: GAP[gap] ?? gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
