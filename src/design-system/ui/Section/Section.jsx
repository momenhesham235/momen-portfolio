import "./section.css";

/**
 * Section primitive
 * Provides consistent vertical rhythm and optional landmark heading.
 *
 * @param {string} id - Section anchor id
 * @param {string} heading - Visible section heading
 * @param {string} headingId - id for the heading element (for aria-labelledby)
 * @param {string} className - Additional class names
 */
const Section = ({
  id,
  heading,
  headingId,
  className = "",
  children,
  ...props
}) => {
  const hId = headingId || (id ? `${id}-heading` : undefined);

  return (
    <section
      id={id}
      className={`ds-section ${className}`}
      aria-labelledby={heading ? hId : undefined}
      {...props}
    >
      {heading && (
        <h2 id={hId} className="ds-section__heading">
          {heading}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
