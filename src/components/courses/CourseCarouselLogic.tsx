/**
 * Hook de lógica para el carrusel de cursos.
 * Gestiona el índice principal, la lista de cursos y las transiciones animadas.
 *
 * @module CourseCarouselLogic
 * @param {CourseLogicProps} props - Props con el array inicial de cursos.
 * @returns {CourseLogicReturn} Índice actual, cursos, función de transición y ref de transición.
 */
import { useState, useRef } from 'react';
import { Course } from '../../types/CourseInterfaces';

// Duraciones de las animaciones (en milisegundos)
const FADE_OUT_DURATION = 300;
const FADE_IN_DURATION = 300;
const TOTAL_TRANSITION_COOLDOWN = FADE_OUT_DURATION + FADE_IN_DURATION + 100; //

interface CourseLogicProps {
  initialCourseItems: Course[];
}

interface CourseLogicReturn {
  currentIndex: number;
  currentItem: Course | undefined;
  handleCourseTransition: (direction: 'next' | 'prev') => void;
  isTransitioning: React.MutableRefObject<boolean>;
  totalItems: number;
  currentAnimationClass: string;
}

const CourseLogic = ({ 
  initialCourseItems,
 }: CourseLogicProps): CourseLogicReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnimationClass, setCurrentAnimationClass] = useState(""); // Clase para la animación del wrapper
  // Mantenemos initialServiceItems como una referencia estable.
  const courseItems = initialCourseItems;
  const totalItems = courseItems.length;
  const isTransitioning = useRef(false);

  const handleCourseTransition = (direction: 'next' | 'prev') => {
    if (isTransitioning.current || totalItems === 0) return;
    isTransitioning.current = true;
    setCurrentAnimationClass("carousel-item-fade-out"); // Inicia fade-out

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex;
        if (direction === 'next') {
          newIndex = (prevIndex + 1) % totalItems;
        } else if (direction === 'prev') {
          newIndex = (prevIndex - 1 + totalItems) % totalItems;
        }
        return newIndex;
      });
      // El contenido se actualiza aquí debido a setCurrentIndex.
      // Ahora, el nuevo contenido debe hacer fade-in.
      setCurrentAnimationClass("carousel-item-fade-in"); // Esto quitará opacity-0 y permitirá el fade-in
    }, FADE_OUT_DURATION);

    setTimeout(() => {
      isTransitioning.current = false;
      setCurrentAnimationClass(""); // Resetea la clase para que el item sea visible sin animar activamente
    }, TOTAL_TRANSITION_COOLDOWN);
  };

  return { 
    currentIndex, 
    currentItem: courseItems[currentIndex], 
    handleCourseTransition,
    isTransitioning, // Mantener la referencia para control externo si es necesario
    totalItems,
    currentAnimationClass, // Exponer la clase de animación
   };
};

export default CourseLogic;