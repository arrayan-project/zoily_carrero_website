/**
 * Contenedor para el contenido de cada slide del carrusel de cursos.
 * Permite mostrar información personalizada sobre el curso en la posición adecuada.
 *
 * @component
 * @param {CoursesContentProps} props - Props del contenedor, incluyendo los hijos a renderizar.
 * @returns {JSX.Element}
 */
import React from 'react';
import { FONT_FAMILY_PRIMARY } from '../../constants/styles';

interface CoursesContentProps {
  children: React.ReactNode;
}

const CoursesContent: React.FC<CoursesContentProps> = ({ children }) => (
  <div className={`content absolute top-1/2 right-[30px] w-[300px] text-left -translate-y-1/2 ${FONT_FAMILY_PRIMARY} text-white hidden z-20`}>
    {children}
  </div>
);

export default CoursesContent;