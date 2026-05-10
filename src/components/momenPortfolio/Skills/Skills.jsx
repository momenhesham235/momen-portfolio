import { skills } from "@constants/skills";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">
        Skills
      </h2>

      {skills.map((group) => (
        <div key={group.title} className="skills-group">
          <h3 className="skills-group-title">{group.title}</h3>

          <ul className="skills-grid" role="list">
            {group.skills.map((skill) => (
              <li key={skill.name} className="skill-card" role="listitem">
                <img src={skill.img} alt={`${skill.name} logo`} aria-hidden="true" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
