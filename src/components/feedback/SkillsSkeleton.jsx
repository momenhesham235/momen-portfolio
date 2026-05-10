import "./skeleton.css";

const SkillsSkeleton = () => {
  return (
    <section className="skills skeleton-skills">
      <div className="section-title skeleton-text short" />
      {Array(2).fill(0).map((_, i) => (
        <div key={i} className="skills-group">
          <div className="skills-group-title skeleton-text short" />
          <div className="skills-grid">
            {Array(4).fill(0).map((_, j) => (
              <div key={j} className="skill-card">
                <div className="skeleton-box" style={{ height: 80 }} />
                <div className="skeleton-text short" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSkeleton;
