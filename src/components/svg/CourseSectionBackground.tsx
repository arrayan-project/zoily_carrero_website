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
  const { theme } = useTheme(); // Si necesitas el tema para el color

  return (
    <section className="relative w-full flex-grow"> {/* Asegura que ocupe todo el ancho */}
      {/* Fondo de Imagen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Usamos <picture> para cargar diferentes imágenes */}
        <picture>
          {/* Si hay una imagen para móviles, la cargamos en pantallas pequeñas */}
          {backgroundImageMobile && (
            <source media="(max-width: 767px)" srcSet={backgroundImageMobile} />
          )}
          {/* Imagen por defecto (para pantallas grandes) */}
          <img
            src={backgroundImage}
            alt="Fondo de Cursos"
            className={`w-full h-full object-cover object-${objectPosition}`} // Ajusta la imagen para cubrir el contenedor
          />
        </picture>
      </div>
      {/* Contenido */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default CoursesSectionBackground;
