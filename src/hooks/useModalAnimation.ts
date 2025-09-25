// c:\Users\Juan\Desktop\WebSiteProject\react-zoily-carrero-web\frontend\src\hooks\useModalAnimation.ts
/**
 * Hook personalizado para gestionar la lógica de animación de apertura y cierre de un modal.
 * Controla el estado de renderizado del modal y la clase CSS que dispara la animación.
 *
 * @hook
 * @param {UseModalAnimationProps} props - Propiedades para configurar la animación del modal.
 * @param {boolean} props.isOpen - Indica si el modal debe estar abierto o cerrado.
 * @param {() => void} [props.onAnimationEnd] - Callback opcional que se ejecuta al finalizar la animación de cierre.
 * @param {number} [props.animationDuration=1000] - Duración de la animación en milisegundos.
 * @param {number} [props.animationBuffer=20] - Pequeño buffer en milisegundos para asegurar la correcta aplicación de clases de animación.
 * @returns {{ isModalRendered: boolean, animationTriggerClass: string }} Objeto con el estado de renderizado y la clase de animación.
 */

import { useState, useEffect } from 'react';

interface UseModalAnimationProps {
  isOpen: boolean;
  onAnimationEnd?: () => void;
  animationDuration?: number;
  animationBuffer?: number;
}

export const useModalAnimation = ({
  isOpen,
  onAnimationEnd,
  animationDuration = 1000, // Corresponds to Tailwind's duration-1000
  animationBuffer = 20,    // Small buffer for class application
}: UseModalAnimationProps) => {
  const [isModalRendered, setIsModalRendered] = useState(isOpen);
  const [animationTriggerClass, setAnimationTriggerClass] = useState('translate-x-full'); // Initial state: off-screen

  useEffect(() => {
    if (isOpen) {
      setIsModalRendered(true);
      // Short timeout to ensure the initial (off-screen) class is applied before transitioning
      const openTimer = setTimeout(() => {
        setAnimationTriggerClass('translate-x-0'); // Animate in
      }, animationBuffer);
      return () => clearTimeout(openTimer);
    } else {
      // Only animate out if the modal was rendered or in the process of opening
      if (isModalRendered) {
        setAnimationTriggerClass('translate-x-full'); // Animate out
        const closeTimer = setTimeout(() => {
          setIsModalRendered(false); // Logically unmount after animation
          if (onAnimationEnd) {
            onAnimationEnd(); // Callback for post-animation cleanup (e.g., clear content)
          }
        }, animationDuration + animationBuffer); // Wait for animation to complete
        return () => clearTimeout(closeTimer);
      } else {
        // If isOpen is false and the modal was never rendered (or already closed and unrendered),
        // still call onAnimationEnd if provided, to ensure content cleanup.
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    }
  }, [isOpen, isModalRendered, onAnimationEnd, animationDuration, animationBuffer]);

  return { isModalRendered, animationTriggerClass };
};
