/**
 * PageWrapper
 * Semantic page-level wrapper with consistent top padding.
 * Intended as a direct child of the router outlet.
 */
const PageWrapper = ({ className = "", children, ...props }) => {
  return (
    <div className={`page-wrapper ${className}`} {...props}>
      {children}
    </div>
  );
};

export default PageWrapper;
