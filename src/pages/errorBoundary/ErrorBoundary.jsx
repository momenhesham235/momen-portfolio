import { Link } from "react-router-dom";

// import { LottieHandler } from "@components/feedback";

const ErrorBoundary = () => {
  return (
    <div>
      <div className="" style={{ height: "100vh" }}>
        {/* <LottieHandler type="notFound" /> */}
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;

// d-flex flex-column justify-content-center align-items-center
