/**
 * Contenedor para el contenido de cada slide del carrusel de servicios.
 * Permite mostrar información personalizada sobre el servicio en la posición adecuada.
 *
 * @component
 * @param {ServicesContentProps} props - Props del contenedor, incluyendo los hijos a renderizar.
 * @returns {JSX.Element}
 */
import React from 'react';
import { FONT_FAMILY_PRIMARY,  } from '../../constants/styles';

interface ServicesContentProps {
  children: React.ReactNode;
}

const ServicesContent: React.FC<ServicesContentProps> = ({ children }) => (
  <div className={`content absolute top-1/2 left-[100px] w-[300px] text-left -translate-y-1/2 ${FONT_FAMILY_PRIMARY} text-white hidden z-20`}>
    {children}
  </div>
);

export default ServicesContent;
