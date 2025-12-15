import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found-container">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/momen-portfolio/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
