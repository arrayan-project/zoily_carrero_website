import React, { useState, useEffect } from 'react';
import { imageArrays } from '../../assets/img/images';

//Creamos un type para las props, e incluimos nuevos atributos
interface BackgroundCarouselProps {
    transitionDuration?: number;
    intervalDuration?: number;
    pauseOnHover?: boolean; // Nueva prop para pausar al pasar el ratón
  }
  
const { backgrounds } = imageArrays;
const backgroundsLength = backgrounds.length; // Se calcula fuera del useEffect

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({ transitionDuration = 500, intervalDuration = 8000, pauseOnHover = false }) => {
  const [currentBg, setCurrentBg] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // Nuevo estado para controlar la pausa
  let interval: NodeJS.Timeout; // Declaramos interval como NodeJS.Timeout
  let timeout: NodeJS.Timeout; // Declaramos timeout como NodeJS.Timeout

  useEffect(() => {
    const startInterval = () => {
          //inicia el carrusel, seteando un interval y un settimeout.
      interval = setInterval(() => {
        setFadeOut(true);
        timeout = setTimeout(() => { // Asignamos el valor devuelto por setTimeout a timeout
          setCurrentBg((prev) => (prev + 1) % backgroundsLength);
          setFadeOut(false);
        }, transitionDuration);
      }, intervalDuration);
    };

    const stopInterval = () => {
          //Detiene el interval para detener el carrusel.
      clearInterval(interval);
      clearTimeout(timeout); // Limpiamos el timeout
    };


    if (!isPaused) {
      startInterval();
    }

    return () => {
      // Funcion de limpieza del interval
      stopInterval();
    };
  }, [transitionDuration, intervalDuration, isPaused]);

//Funcion para manejar el mouse del componente, si esta en pause se activa, si esta activado se pausa.
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true); // Pausa el carrusel al pasar el mouse
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false); // Reactiva el carrusel al salir el mouse
    }
  };

  const gradientOverlay = 'rgba(0, 0, 0, 0.5)';//variable para color de gradiente, se usa mas abajo en la linea 79


  return (
    <>
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
            ${index === currentBg ? 'opacity-100' : 'opacity-0'}
            ${fadeOut && index === currentBg ? 'opacity-0' : ''}
            `}
          style={{
            backgroundImage: `linear-gradient(${gradientOverlay}, ${gradientOverlay}), url(${bg})`
          }}
          onMouseEnter={handleMouseEnter} //se añade la funcion
          onMouseLeave={handleMouseLeave} //se añade la funcion
        />
      ))}
    </>
  );
};

export default BackgroundCarousel;
