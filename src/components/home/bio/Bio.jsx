import "./bio.css";
const Bio = () => {
  return (
    <section className="bio" id="bio" aria-labelledby="bio-heading">
      <div className="bio-container">
        <h2>Professional Bio</h2>

        <article className="bio-text">
          Software Engineer specializing in building modern, scalable web
          applications using <strong>JavaScript, React, and Node.js</strong>.
          Passionate about clean code, performance optimization, and delivering
          high-quality user experiences.
        </article>
      </div>
    </section>
  );
};

export default Bio;
