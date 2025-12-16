import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section class="coming-soon">
      <div class="coming-soon-container">
        <h1>🚧 Coming Soon</h1>
        <p>This page is under construction and will be available soon. </p>
        <Link to="/" class="back-home">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Project;
