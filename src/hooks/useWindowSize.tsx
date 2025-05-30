/**
 * Hook para obtener el tamaño de la ventana y detectar si es vista móvil.
 * Devuelve el ancho actual de la ventana y un booleano indicando si está bajo el breakpoint móvil.
 *
 * @module useWindowSize
 * @returns {{ windowWidth: number, isMobileView: boolean }} Objeto con el ancho de la ventana y si es vista móvil.
 */
import { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT } from '../constants/breakpoints';

interface WindowSize {
  windowWidth: number;
  isMobileView: boolean;
}

const getWindowWidth = () =>
  typeof window !== "undefined" ? window.innerWidth : 1200;

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: getWindowWidth(),
    isMobileView: getWindowWidth() < MOBILE_BREAKPOINT,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        isMobileView: window.innerWidth < MOBILE_BREAKPOINT,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
