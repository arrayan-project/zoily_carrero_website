// CourseCarouselLogic.tsx
/**
 * Hook de lógica para el carrusel de cursos.
 * Gestiona el índice principal, la lista de cursos y las transiciones animadas.
 *
 * @module CourseCarouselLogic
 * @param {CourseLogicProps} props - Props con el array inicial de cursos.
 * @returns {CourseLogicReturn} Índice actual, cursos, función de transición y ref de transición.
 */
import { useState, useRef, useCallback, useEffect } from "react";
import { Course } from "../../types/CourseInterfaces";

// Duración de la animación de deslizamiento (en milisegundos)
// Asegúrate de que coincida con la duración definida en tu CSS (ej. 0.7s = 700ms)
const SLIDE_ANIMATION_DURATION = 1200;

interface CourseLogicProps {
  initialCourseItems: Course[];
}

interface CourseLogicReturn {
  currentIndex: number;
  currentItem: Course | undefined;
  previousIndex: number | null;
  previousItem: Course | undefined;
  handleCourseTransition: (direction: "next" | "prev") => void;
  isTransitioning: React.MutableRefObject<boolean>;
  animationClasses: { current: string; previous: string };
}

const CourseLogic = ({
  initialCourseItems,
}: CourseLogicProps): CourseLogicReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const courseItems = initialCourseItems;
  const totalItems = courseItems.length;
  const isTransitioning = useRef(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCourseTransition = useCallback(
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
  ); // directionParam no es una dependencia porque se pasa como argumento

  // Limpiar el timeout si el componente se desmonta
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const previousItem =
    previousIndex !== null ? courseItems[previousIndex] : undefined;

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
    currentItem: courseItems[currentIndex],
    previousIndex,
    previousItem,
    handleCourseTransition,
    isTransitioning,
    animationClasses: {
      current: currentItemAnimClass,
      previous: previousItemAnimClass,
    },
  };
};

export default CourseLogic;
