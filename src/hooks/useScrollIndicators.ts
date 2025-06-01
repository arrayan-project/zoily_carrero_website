// frontend/src/hooks/useScrollIndicators.ts
import { useState, useEffect, useCallback, RefObject } from 'react';

interface ScrollIndicatorsHookProps {
  contentRef: RefObject<HTMLElement | null>;
  isOpen: boolean;
  dependencies: any[]; // Array de dependencias que pueden afectar el scrollHeight
}

interface ScrollIndicatorsReturn {
  showScrollUpIndicator: boolean;
  showScrollDownIndicator: boolean;
  updateScrollIndicators: () => void; // Exponemos la función por si se necesita llamar manualmente
}

export const useScrollIndicators = ({
  contentRef,
  isOpen,
  dependencies,
}: ScrollIndicatorsHookProps): ScrollIndicatorsReturn => {
  const [showScrollUpIndicator, setShowScrollUpIndicator] = useState(false);
  const [showScrollDownIndicator, setShowScrollDownIndicator] = useState(false);

  const updateScrollIndicators = useCallback(() => {
    const element = contentRef.current;
    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const threshold = 10; // Pequeño umbral
      setShowScrollUpIndicator(scrollTop > threshold);
      setShowScrollDownIndicator(scrollTop + clientHeight < scrollHeight - threshold);
    } else {
      setShowScrollUpIndicator(false);
      setShowScrollDownIndicator(false);
    }
  }, [contentRef]);

  useEffect(() => {
    const element = contentRef.current;
    if (isOpen && element) {
      updateScrollIndicators(); // Comprobación inicial

      element.addEventListener('scroll', updateScrollIndicators);
      const resizeObserver = new ResizeObserver(updateScrollIndicators);
      resizeObserver.observe(element);

      // Observar cambios en los hijos del elemento de contenido también
      // ya que ResizeObserver en el contenedor no siempre detecta cambios de contenido interno
      // que no alteran el tamaño del contenedor pero sí el scrollHeight.
      // Para mayor robustez, se podría usar un MutationObserver en los hijos,
      // pero ResizeObserver en el elemento de contenido suele ser suficiente si el contenido
      // que cambia de tamaño está directamente dentro de él.
      // Por ahora, confiamos en las 'dependencies' para re-evaluar.

      return () => {
        element.removeEventListener('scroll', updateScrollIndicators);
        resizeObserver.unobserve(element);
      };
    } else {
      setShowScrollUpIndicator(false);
      setShowScrollDownIndicator(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, contentRef, updateScrollIndicators, ...dependencies]);
  // Incluimos 'dependencies' en el array de dependencias del useEffect

  return { showScrollUpIndicator, showScrollDownIndicator, updateScrollIndicators };
};
