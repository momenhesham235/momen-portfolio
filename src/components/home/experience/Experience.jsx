import "./experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {/* Item 1 */}
        <div className="experience-item right">
          <div className="content">
            <span className="time">2023 — Present</span>
            <h3>Frontend & Backend Developer</h3>
            <p className="company">Freelance / Personal Projects</p>

            <ul>
              <li>Built full-stack applications using MERN Stack</li>
              <li>Developed responsive UIs with React</li>
              <li>Integrated REST APIs & authentication</li>
            </ul>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="experience-item left">
          <div className="content">
            <span className="time">2022 — 2023</span>
            <h3>Frontend Developer</h3>
            <p className="company">Learning & Practice</p>

            <ul>
              <li>Converted UI designs into HTML & CSS</li>
              <li>Built interactive features using JavaScript</li>
              <li>Created multiple landing pages</li>
            </ul>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="experience-item right">
          <div className="content">
            <span className="time">2021 — 2022</span>
            <h3>Web Developer</h3>
            <p className="company">Self Learning</p>

            <ul>
              <li>Learned core web technologies</li>
              <li>Practiced building small projects</li>
              <li>Focused on clean & accessible UI</li>
            </ul>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
