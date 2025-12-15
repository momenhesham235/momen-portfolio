import "./skeleton.css";

const SkillsSkeleton = () => {
  return (
    <section className="skills skeleton-skills">
      <h2 className="section-title skeleton-text short"></h2>
      {Array(2)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="skills-group">
            <h3 className="skills-group-title skeleton-text short"></h3>
            <div className="skills-grid">
              {Array(4)
                .fill(0)
                .map((_, j) => (
                  <div key={j} className="skill-card">
                    <div className="skeleton-box" style={{ height: 80 }}></div>
                    <div className="skeleton-text short"></div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default SkillsSkeleton;
