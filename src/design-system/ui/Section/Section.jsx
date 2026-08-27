import Reveal from "@components/common/reveal/Reveal";
import SplitText from "@components/common/split-text/SplitText";
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
          {/* Each part of the header gets exactly one entrance: the eyebrow and
              subtitle are uncovered by a clip curtain, the heading rises word
              by word. Stacking both on one element reads as a stutter. */}
          <div className="ds-section__header-main">
            {eyebrow && (
              <Reveal as="span" className="eyebrow" duration={0.6} amount={0.6}>
                {eyebrow}
              </Reveal>
            )}
            {heading && (
              <SplitText
                as="h2"
                id={hId}
                text={heading}
                gradient
                className="ds-section__heading"
                stagger={0.05}
                amount={0.4}
              />
            )}
            {subtitle && (
              <Reveal
                as="p"
                className="ds-section__subtitle"
                delay={0.14}
                duration={0.75}
                amount={0.4}
              >
                {subtitle}
              </Reveal>
            )}
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
