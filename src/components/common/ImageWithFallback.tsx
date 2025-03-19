// src/components/ImageWithFallback.tsx
import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
}) => {
  const [isError, setIsError] = useState(false);

  return (
    <img
      src={isError ? fallbackSrc : src}
      alt={isError ? "Imagen no disponible" : alt}
      className={className}
      onError={() => setIsError(true)}
    />
  );
};

export default ImageWithFallback;
