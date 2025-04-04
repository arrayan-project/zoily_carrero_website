import React, { useState, useEffect, useRef } from "react";
import { imageArrays } from "../../assets/img/images";

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
  let interval: NodeJS.Timeout;
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    const startInterval = () => {
      interval = setInterval(() => {
        setFadeOut(true);
        timeout = setTimeout(() => {
          setCurrentBg((prev) => (prev + 1) % backgroundsLength);
          setFadeOut(false);
        }, transitionDuration);
      }, intervalDuration);
    };

    const stopInterval = () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };

    if (!isPaused) {
      startInterval();
    }

    return () => {
      stopInterval();
    };
  }, [transitionDuration, intervalDuration, isPaused]);

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
