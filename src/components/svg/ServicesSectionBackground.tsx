// src/components/svg/ServicesSectionBackground.tsx

import React from 'react';
import { useTheme } from '../context/useThemeHook'; // Si necesitas el tema para el color

interface ServicesSectionBackgroundProps {
  children: React.ReactNode;
  backgroundImage: string; // Ruta de la imagen para pantallas grandes
  backgroundImageMobile?: string; // Ruta de la imagen para móviles (opcional)
  objectPosition?: string; // Posición del objeto (ej: "center", "top", "bottom")
}

const ServicesSectionBackground: React.FC<ServicesSectionBackgroundProps> = ({
  children,
  backgroundImage,
  backgroundImageMobile,
  objectPosition = "center", // Valor por defecto: centrado
}) => {
  const { theme } = useTheme(); // Si necesitas el tema para el color

  return (
    <div className="relative w-full">
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
            alt="Fondo de Servicios"
            className={`w-full h-full object-cover object-${objectPosition}`} // Ajusta la imagen para cubrir el contenedor
          />
        </picture>
      </div>
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ServicesSectionBackground;
