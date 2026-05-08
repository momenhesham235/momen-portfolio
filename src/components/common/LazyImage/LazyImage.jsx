import { useEffect, useRef, useState } from "react";
import "./lazyImage.css";

const LazyImage = ({
  src = "",
  alt = "",
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  ...props
}) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(loading === "eager");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (loading === "eager") return;
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px",
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={loading}
      fetchpriority={fetchPriority}
      onError={() => setHasError(true)}
      className={`lazy-image ${
        isVisible ? "lazy-image-loaded" : ""
      } ${className}`}
      {...props}
    />
  );
};

export default LazyImage;