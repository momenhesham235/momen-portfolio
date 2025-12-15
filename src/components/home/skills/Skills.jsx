import { skills } from "../../../constant/data/skills.js";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      {skills.map((group) => (
        <div key={group.title} className="skills-group">
          <h3 className="skills-group-title">{group.title}</h3>

          <div className="skills-grid">
            {group.skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
