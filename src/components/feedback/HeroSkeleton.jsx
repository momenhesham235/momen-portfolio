import "./skeleton.css";

const HeroSkeleton = () => {
  return (
    <section className="hero skeleton-hero" style={{ minHeight: "100vh" }}>
      <div className="hero-container">
        <div className="hero-left">
          <div
            className="avatar-wrapper skeleton-box"
            style={{ width: 120, height: 120, borderRadius: "50%" }}
          />
          <div className="skeleton-text short" />
          <div className="skeleton-text long" />
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {Array(4).fill(0).map((_, i) => (
              <div
                key={i}
                className="skeleton-box"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div className="skeleton-box" style={{ width: "100%", height: 200 }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
