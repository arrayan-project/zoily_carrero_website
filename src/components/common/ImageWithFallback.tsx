// src/components/ImageWithFallback.tsx
import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  loading,
}) => {
  const [isError, setIsError] = useState(false);

  return (
    <img
      src={isError ? fallbackSrc : src}
      alt={isError ? "Imagen no disponible" : alt}
      className={className}
      onError={() => setIsError(true)}
      loading={loading ?? "eager"}
    />
  );
};

export default ImageWithFallback;
