import { skills } from "../../../constant/data/skills.js";
import LazyImage from "../../../hooks/onLoad.jsx";
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
                <LazyImage src={skill.img} aria-hidden="true" />
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
