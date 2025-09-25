// MakeUpCarouselLogic.tsx
/**
 * Hook de lógica para el carrusel de makeup.
 * Gestiona el índice principal, la lista de makeup y las transiciones animadas.
 *
 * @module MakeUpCarouselLogic
 * @param {ServicesLogicProps} props - Props con el array inicial de makeup.
 * @returns {ServicesLogicReturn} Índice actual, makeup, función de transición y ref de transición.
 */
import { useState, useRef, useCallback, useEffect } from "react";
import { Service } from "../../types/ServiceInterfaces";

const SLIDE_ANIMATION_DURATION = 1200; // Debe coincidir con la duración en CSS

interface ServicesLogicProps {
  initialServiceItems: Service[];
}

interface ServicesLogicReturn {
  currentIndex: number;
  currentItem: Service | undefined;
  previousIndex: number | null;
  previousItem: Service | undefined;
  handleServiceTransition: (direction: "next" | "prev") => void;
  isTransitioning: React.MutableRefObject<boolean>;
  animationClasses: { current: string; previous: string };
}

const ServicesLogic = ({
  initialServiceItems,
}: ServicesLogicProps): ServicesLogicReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const serviceItems = initialServiceItems;
  const totalItems = serviceItems.length;
  const isTransitioning = useRef(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServiceTransition = useCallback(
    (directionParam: "next" | "prev") => {
      if (isTransitioning.current || totalItems === 0) return;
      isTransitioning.current = true;
      setDirection(directionParam);
      setPreviousIndex(currentIndex); // El actual se convierte en el previo

      setCurrentIndex((prevIndex) => {
        const newIndex =
          directionParam === "next"
            ? (prevIndex + 1) % totalItems
            : (prevIndex - 1 + totalItems) % totalItems;
        return newIndex;
      });

      if (animationTimeoutRef.current)
        clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = setTimeout(() => {
        isTransitioning.current = false;
        setDirection(null);
        setPreviousIndex(null); // Limpiar el índice previo después de la transición
      }, SLIDE_ANIMATION_DURATION);
    },
    [totalItems, currentIndex]
  );

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const previousItem =
    previousIndex !== null ? serviceItems[previousIndex] : undefined;

  let currentItemAnimClass = "active "; // Siempre activo si es el current
  let previousItemAnimClass = "";

  if (direction === "next") {
    currentItemAnimClass += "carousel-item-slide-in-from-right";
    if (previousIndex !== null) {
      previousItemAnimClass = "exiting carousel-item-slide-out-to-left";
    }
  } else if (direction === "prev") {
    currentItemAnimClass += "carousel-item-slide-in-from-left";
    if (previousIndex !== null) {
      previousItemAnimClass = "exiting carousel-item-slide-out-to-right";
    }
  } else {
    // Si no hay dirección de transición activa (estado inicial o después de la transición)
    // No aplicamos animate-fadeIn aquí para evitar el flash post-transición.
  }

  return {
    currentIndex,
    currentItem: serviceItems[currentIndex],
    previousIndex,
    previousItem,
    handleServiceTransition,
    isTransitioning,
    animationClasses: {
      current: currentItemAnimClass,
      previous: previousItemAnimClass,
    },
  };
};

export default ServicesLogic;
