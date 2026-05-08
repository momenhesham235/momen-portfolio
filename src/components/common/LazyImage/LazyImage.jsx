import { useEffect, useRef, useState } from "react";
import { LAZY_IMAGE_THRESHOLD } from "@/config/constants";
import "./lazyImage.css";

/**
 * Lazy Image Component
 * Loads images only when they enter the viewport using Intersection Observer
 * Provides fade-in animation when image becomes visible
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text for accessibility
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.loading - Native loading attribute (lazy/eager)
 * @param {string} props.fetchPriority - Fetch priority hint (high/low/auto)
 */
const LazyImage = ({ 
  src = "", 
  alt = "", 
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(loading === "eager");
  const imgRef = useRef(null);

  useEffect(() => {
    // Skip intersection observer if loading is eager
    if (loading === "eager") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: LAZY_IMAGE_THRESHOLD }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`lazy-image ${isVisible ? "lazy-image-loaded" : ""} ${className}`}
      loading={loading}
      fetchpriority={fetchPriority}
      {...props}
    />
  );
};

export default LazyImage;
