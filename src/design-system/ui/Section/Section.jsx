import "./section.css";

/**
 * Section primitive
 * Provides consistent vertical rhythm and an optional landmark header made of
 * an eyebrow pill, the heading, and a supporting subtitle.
 *
 * @param {string} id - Section anchor id
 * @param {string} eyebrow - Small uppercase label rendered above the heading
 * @param {string} heading - Visible section heading
 * @param {string} subtitle - Supporting line rendered below the heading
 * @param {string} headingId - id for the heading element (for aria-labelledby)
 * @param {"center"|"start"} align - Header alignment
 * @param {React.ReactNode} headerAside - Content pinned to the header's end edge
 * @param {string} className - Additional class names
 */
const Section = ({
  id,
  eyebrow,
  heading,
  subtitle,
  headingId,
  align = "center",
  headerAside,
  className = "",
  children,
  ...props
}) => {
  const hId = headingId || (id ? `${id}-heading` : undefined);
  const hasHeader = Boolean(eyebrow || heading || subtitle || headerAside);

  return (
    <section
      id={id}
      className={`ds-section ${className}`}
      aria-labelledby={heading ? hId : undefined}
      {...props}
    >
      {hasHeader && (
        <div
          className={`ds-section__header ds-section__header--${align}${
            headerAside ? " ds-section__header--split" : ""
          }`}
        >
          <div className="ds-section__header-main">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {heading && (
              <h2 id={hId} className="ds-section__heading">
                {heading}
              </h2>
            )}
            {subtitle && <p className="ds-section__subtitle">{subtitle}</p>}
          </div>

          {headerAside && (
            <div className="ds-section__header-aside">{headerAside}</div>
          )}
        </div>
      )}

      {children}
    </section>
  );
};

export default Section;
