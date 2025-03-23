// src/components/svg/CourseSectionBackground.tsx

import React from 'react';
import { useTheme } from '../context/useThemeHook'; // Si necesitas el tema para el color

interface CoursesSectionBackgroundProps {
  children: React.ReactNode;
  backgroundImage: string; // Ruta de la imagen para pantallas grandes
  backgroundImageMobile?: string; // Ruta de la imagen para móviles (opcional)
  objectPosition?: string; // Posición del objeto (ej: "center", "top", "bottom")
}

const CoursesSectionBackground: React.FC<CoursesSectionBackgroundProps> = ({
  children,
  backgroundImage,
  backgroundImageMobile,
  objectPosition = "center", // Valor por defecto: centrado
}) => {

  return (
    <section className="relative w-full flex-grow"> {/* Asegura que ocupe todo el ancho */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet={backgroundImageMobile} />
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
            style={{
              objectPosition,
              opacity: 0.4, // Añadido opacidad
              filter: 'blur(4px)', // Añadido desenfoque
            }} // Ajusta la imagen para cubrir el contenedor
          />
        </picture>
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default CoursesSectionBackground;
