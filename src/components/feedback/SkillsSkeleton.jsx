import "./skeleton.css";

const SkillsSkeleton = () => {
  return (
    <section className="skeleton-section" aria-hidden="true">
      <div className="skeleton-header">
        <div className="skeleton-box skeleton-pill" />
        <div className="skeleton-box skeleton-title" />
        <div className="skeleton-box skeleton-subtitle" />
      </div>

      {Array(3).fill(0).map((_, i) => (
        <div key={i} className="skeleton-panel">
          <div className="skeleton-text short" style={{ width: "30%" }} />
          <div className="skeleton-panel__grid">
            {Array(6).fill(0).map((_, j) => (
              <div key={j} className="skeleton-box skeleton-tile" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSkeleton;
