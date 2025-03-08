import React, { useState, useEffect } from 'react';
import { backgrounds } from '../assets/img/images';

const BackgroundCarousel = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setFadeOut(false);
      }, 500); // Ajustar el tiempo de la transición a 500ms
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-transition transition-opacity duration-500 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          } ${fadeOut && index === currentBg ? 'opacity-0' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
};

export default BackgroundCarousel;
