/**
 * Hook para manejar gestos táctiles (swipe) para navegación.
 * Permite ejecutar acciones al detectar deslizamientos horizontales en dispositivos táctiles.
 *
 * @module useSwipeNavigation
 * @param {() => void} onSwipeLeft - Callback para ejecutar al deslizar hacia la izquierda.
 * @param {() => void} onSwipeRight - Callback para ejecutar al deslizar hacia la derecha.
 * @param {React.RefObject<HTMLElement>} targetRef - Referencia al elemento que escuchará los eventos táctiles.
 * @param {boolean} [isEnabled=true] - Controla si el hook está activo.
 */
import { useState, useEffect, useCallback, RefObject } from 'react';

interface UseSwipeNavigationProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  targetRef: RefObject<HTMLElement>;
  isEnabled?: boolean;
}

const SWIPE_THRESHOLD = 50; // Mínima distancia en píxeles para considerar un swipe

const useSwipeNavigation = ({
  onSwipeLeft,
  onSwipeRight,
  targetRef,
  isEnabled = true,
}: UseSwipeNavigationProps) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null); // Para rastrear el inicio Y

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!isEnabled || e.touches.length !== 1) return;
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY); // Guardar la posición Y inicial
  }, [isEnabled]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isEnabled || touchStartX === null || touchStartY === null || e.touches.length !== 1) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartX;
    const diffY = currentY - touchStartY;

    // Prevenir el comportamiento predeterminado del navegador (como scroll)
    // si el movimiento es predominantemente horizontal.
    // Esto evita el "arrastre" visual no deseado.
    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
    }

    if (Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX > 0) { // Swipe hacia la derecha
        onSwipeRight();
      } else { // Swipe hacia la izquierda
        onSwipeLeft();
      }
      setTouchStartX(null); // Resetear para evitar múltiples acciones por un solo gesto
      setTouchStartY(null); // Resetear Y también
    }
  }, [isEnabled, touchStartX, touchStartY, onSwipeLeft, onSwipeRight]);

  const handleTouchEndOrCancel = useCallback(() => {
    if (!isEnabled) return;
    setTouchStartX(null); // Resetear en touchend o touchcancel
    setTouchStartY(null);
  }, [isEnabled]);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) {
      return; // Si no hay elemento, no hacer nada.
    }

    const originalTouchActionAttr = 'data-original-touch-action';

    if (isEnabled) {
      // Guardar el estilo original si no se ha guardado antes
      if (!element.hasAttribute(originalTouchActionAttr)) {
        element.setAttribute(originalTouchActionAttr, element.style.touchAction || '');
      }
      // Aplicar touch-action para indicar al navegador que manejaremos el swipe horizontal
      element.style.touchAction = 'pan-y';

      element.addEventListener("touchstart", handleTouchStart, { passive: true });
      element.addEventListener("touchmove", handleTouchMove, { passive: false }); // passive: false es necesario para preventDefault
      element.addEventListener("touchend", handleTouchEndOrCancel, { passive: true });
      element.addEventListener("touchcancel", handleTouchEndOrCancel, { passive: true });
    }

    // La función de limpieza se ejecuta cuando el componente se desmonta o antes de que el efecto
    // se vuelva a ejecutar si las dependencias cambian (ej. isEnabled cambia).
    // Esta función limpiará los listeners y restaurará el estilo si es necesario,
    // independientemente de si isEnabled era true o false en la ejecución anterior del efecto.
    return () => {
      if (element.hasAttribute(originalTouchActionAttr)) {
        element.style.touchAction = element.getAttribute(originalTouchActionAttr)!;
        element.removeAttribute(originalTouchActionAttr);
      }
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEndOrCancel);
      element.removeEventListener("touchcancel", handleTouchEndOrCancel);
    };
  }, [targetRef, isEnabled, handleTouchStart, handleTouchMove, handleTouchEndOrCancel]);

   // Este hook no necesita devolver nada, solo configura los event listeners.
 };
export default useSwipeNavigation;
