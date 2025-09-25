/**
 * Hook para ejecutar un callback en cada frame de animación mientras esté activo.
 * Útil para auto-scroll u otras animaciones basadas en requestAnimationFrame.
 *
 * @module useAutoScroll
 * @param {() => void} callback - Función a ejecutar en cada frame.
 * @param {boolean} [isActive=true] - Si está activo, ejecuta el callback continuamente.
 */
import { useEffect, useRef } from "react";

export function useAutoScroll(
  callback: () => void,
  isActive: boolean = true
) {
  const frame = useRef<number>();

  useEffect(() => {
    if (!isActive) return;
    const animate = () => {
      callback();
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [callback, isActive]);
}