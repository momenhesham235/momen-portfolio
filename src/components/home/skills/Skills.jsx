import { skills } from "../../../constant/data/skills.js";
import { LazyImage } from "@components/common";
import "./skills.css";

/**
 * Skills Section Component
 * Displays technical skills grouped by category
 */
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
                <img 
                  src={skill.img} 
                  alt={`${skill.name} logo`}
                  aria-hidden="true" 
                />
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
