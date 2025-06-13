/**
 * Hook para determinar si la vista actual es móvil basándose en el ancho de la ventana.
 *
 * @module useMobileView
 * @param {number} [breakpoint=768] - El punto de corte en píxeles para considerar móvil (por defecto Tailwind 'md').
 * @returns {boolean} - True si el ancho de la ventana es menor que el breakpoint, false en caso contrario.
 */
import { useState, useEffect } from 'react';

const useMobileView = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useMobileView;