import React, { useState, useEffect, useRef } from "react";

interface SmoothImageProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  isTransitioning?: boolean;
  fallbackSrc?: string;
  imageRef?: React.RefObject<HTMLImageElement>;
  isGridImage?: boolean;
}

const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt = "",
  className = "",
  onClick,
  isTransitioning = false,
  fallbackSrc = "/img/default-image.png",
  imageRef,
  isGridImage = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const internalImageRef = useRef<HTMLImageElement>(null);
  const currentImageRef = imageRef || internalImageRef;

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (currentImageRef.current) {
        currentImageRef.current.src = src;
        setIsLoading(false);
      }
    };

    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <img
      ref={currentImageRef}
      src={isError ? fallbackSrc : ""}
      alt={isError ? `Error loading ${alt}` : alt}
      className={`w-full h-full ${isGridImage ? "object-cover" : "object-contain"} ${
        isTransitioning ? "transition-opacity duration-500" : ""
      } ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out ${className}`}
      onClick={onClick}
    />
  );
};

export default SmoothImage;
