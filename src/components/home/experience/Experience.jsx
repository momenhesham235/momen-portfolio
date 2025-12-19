import "./experience.css";
import { experienceData } from "../../../constant/data/experience";

const Experience = () => {
  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="section-title">
        Experience
      </h2>

      <div className="timeline">
        {experienceData.map((item, index) => {
          const position = index % 2 === 0 ? "right" : "left";
          return (
            <div className={`experience-item ${position}`} key={item.id}>
              <div className="content">
                <span className="time">
                  {item.startDate} - {item.endDate}
                </span>
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>

                <ul className="description">
                  {item.description
                    .split(". ")
                    .map((desc, i) =>
                      desc ? <li key={i}>{desc.trim()}</li> : null
                    )}
                </ul>

                <div className="tech-stack">
                  {item.tech.map((techItem, i) => (
                    <span key={i}>{techItem}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
