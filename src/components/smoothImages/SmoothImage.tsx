/**
 * Componente de imagen con transición suave.
 * Muestra una imagen con animación de opacidad al cargar, fallback en caso de error y opciones para grilla o transición interna.
 *
 * @component
 * @param {SmoothImageProps} props - Props del componente, incluyendo src, alt, clases, fallback, transición y referencia.
 * @returns {JSX.Element}
 */
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
  disableInternalTransition?: boolean;
  loading?: "lazy" | "eager";
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
  disableInternalTransition = false,
  loading,
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

  const transitionClasses = !disableInternalTransition
  ? `${isTransitioning ? "transition-opacity duration-500" : ""} ${
      isLoading ? "opacity-0" : "opacity-100"
    } transition-opacity duration-500 ease-in-out`
  : "";

  return (
    <img
      ref={currentImageRef}
      src={isError ? fallbackSrc : ""}
      alt={isError ? `Error loading ${alt}` : alt}
      loading={loading ?? "eager"}
      className={`w-full h-full ${
        isGridImage ? "object-cover" : "object-contain"
      } ${transitionClasses} ${className}`}
      onClick={onClick}
      
    />
  );
};

export default SmoothImage;
