import "./skeleton.css";

/**
 * Mirrors the Hero's real two-column layout so the lazy chunk swaps in without
 * the page jumping — a placeholder of the wrong shape is its own layout shift.
 */
const HeroSkeleton = () => {
  return (
    <section className="skeleton-hero" aria-hidden="true">
      <div className="skeleton-hero__content">
        <div className="skeleton-box skeleton-pill" />
        <div className="skeleton-text short" />
        <div className="skeleton-box" style={{ height: 56, width: "80%" }} />
        <div className="skeleton-text" style={{ width: "45%" }} />
        <div className="skeleton-text long" />

        <div className="skeleton-hero__row">
          {Array(4).fill(0).map((_, i) => (
            <div
              key={i}
              className="skeleton-box"
              style={{ width: 84, height: 26, borderRadius: 6 }}
            />
          ))}
        </div>

        <div className="skeleton-hero__row" style={{ marginTop: "0.5rem" }}>
          <div className="skeleton-box" style={{ width: 148, height: 42, borderRadius: 10 }} />
          <div className="skeleton-box" style={{ width: 132, height: 42, borderRadius: 10 }} />
        </div>
      </div>

      <div className="skeleton-box skeleton-hero__avatar" />
    </section>
  );
};

export default HeroSkeleton;
