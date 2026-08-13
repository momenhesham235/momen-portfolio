import "./skeleton.css";

const ProjectsSkeleton = () => {
  return (
    <section className="skeleton-section" aria-hidden="true">
      <div className="skeleton-header">
        <div className="skeleton-box skeleton-pill" />
        <div className="skeleton-box skeleton-title" />
        <div className="skeleton-box skeleton-subtitle" />
      </div>

      <div className="skeleton-grid">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-box skeleton-card__media" />
            <div className="skeleton-card__body">
              <div className="skeleton-text short" />
              <div className="skeleton-text long" />
              <div className="skeleton-text" style={{ width: "40%" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
