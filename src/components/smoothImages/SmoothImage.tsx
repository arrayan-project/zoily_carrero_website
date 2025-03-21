// src/components/SmoothImage.tsx
import React, { useState, useEffect, useRef } from 'react';

interface SmoothImageProps {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  isTransitioning?: boolean;
  fallbackSrc?: string;
}

const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt = '',
  className = '',
  onClick,
  isTransitioning = false,
  fallbackSrc = '/img/default-image.png',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (imageRef.current) {
        imageRef.current.src = src;
        setIsLoading(false);
      }
    };

    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      {isError && (
        <img
          src={fallbackSrc}
          alt={`Error loading ${alt}`}
          className={`w-full h-full object-cover ${
            isTransitioning ? 'transition-opacity duration-500' : ''
          }`}
          onClick={onClick}
        />
      )}
      {!isError && (
        <img
          ref={imageRef}
          src=""
          alt={alt}
          className={`w-full h-full object-cover ${
            isTransitioning ? 'transition-opacity duration-500' : ''
          } ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default SmoothImage;
