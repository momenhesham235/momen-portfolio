const ProjectsSkeleton = () => {
  return (
    <section className="projects skeleton-projects">
      <div className="projects-header">
        <h2 className="section-title skeleton-text short"></h2>
        <div
          className="dropdown-btn skeleton-box"
          style={{ width: 120, height: 40 }}
        ></div>
      </div>

      <div className="projects-grid">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="project-card skeleton">
              <div
                className="project-image skeleton-box"
                style={{ height: 180 }}
              ></div>
              <div className="project-content">
                <div className="skeleton-text short"></div>
                <div className="skeleton-text long"></div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
