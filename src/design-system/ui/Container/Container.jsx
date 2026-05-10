/**
 * Container primitive
 * Centered max-width wrapper with responsive padding.
 * Thin component — the main .container class lives in global CSS.
 * Use this when you need a contained block inside a section.
 */
const Container = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`ds-container ${className}`}
      style={{
        maxWidth: "var(--container-max-width, 900px)",
        marginInline: "auto",
        width: "100%",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
