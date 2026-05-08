import "./skip-link.css";

/**
 * Skip to Content Link
 * Accessibility feature for keyboard navigation
 * Allows users to skip directly to main content
 */
const SkipLink = () => {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
};

export default SkipLink;
