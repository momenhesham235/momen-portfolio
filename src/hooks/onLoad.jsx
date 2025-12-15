import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  // if image is not visible return a placeholder
  if (!isVisible) {
    return <div ref={imgRef} style={{ minHeight: "100px" }} />;
  }

  return <img ref={imgRef} src={src} alt={alt} className={className} />;
};

export default LazyImage;
