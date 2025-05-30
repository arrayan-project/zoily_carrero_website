/**
 * Carrusel de fondo para el Home.
 * Cambia automáticamente entre imágenes de fondo con transición y permite pausar al pasar el mouse.
 *
 * @component
 * @param {BackgroundCarouselProps} props - Props del carrusel, incluyendo duración de transición, intervalo y pausa al hacer hover.
 * @returns {JSX.Element}
 */
import React, { useState, useRef } from "react";
import { imageArrays } from "../../assets/images";
import { useInterval } from "../../hooks/useInterval";

interface BackgroundCarouselProps {
  transitionDuration?: number;
  intervalDuration?: number;
  pauseOnHover?: boolean;
}

const { backgrounds } = imageArrays;
const backgroundsLength = backgrounds.length;

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({
  transitionDuration = 500,
  intervalDuration = 8000,
  pauseOnHover = false,
}) => {
  const [currentBg, setCurrentBg] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Usar useInterval para el cambio automático de fondo
  useInterval(() => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundsLength);
      setFadeOut(false);
    }, transitionDuration);
  }, intervalDuration, isPaused);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const gradientOverlay = "rgba(0, 0, 0, 0.5)";

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 
            bg-transition
            transition-opacity 
            duration-${transitionDuration} 
            bg-cover
            bg-center
            z-0
            ${index === currentBg ? "opacity-100" : "opacity-0"}
            ${fadeOut && index === currentBg ? "opacity-0" : ""}
            `}
          style={{
            backgroundImage: `linear-gradient(${gradientOverlay}, ${gradientOverlay}), url(${bg})`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCarousel;
