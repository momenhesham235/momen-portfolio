import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src = "", alt = "", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt || "Image alternate text"}
      className={`${className} lazy-image ${isVisible ? "show" : ""}`}
      loading="lazy"
    />
  );
};

export default LazyImage;
