import { skills } from "../../constant/data/skills.js";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <h4 className="skill-name">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
