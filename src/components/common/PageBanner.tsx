/*
##### Función #####
- Muestra un banner con un título, una imagen de fondo y una superposición.

##### Componentes que lo usan #####
- Se utiliza en varias páginas para mostrar un banner.
*/

import React, { useState } from 'react';
import { useTheme } from '../context/useThemeHook';
import { SERVICES_TITLE_CLASS } from '../../constants/styles';
import { getTextColorClass } from '../../utils/utils';

interface PageBannerProps {
  title: string;
  imageSrcs: string[];
  objectPosition?: 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
  marginTop?: string;
  className?: string;
  children?: React.ReactNode;
  imageOpacity?: number;
}

/**
 * @description Componente para mostrar un banner con un título, una imagen de fondo y una superposición.
 * @param {PageBannerProps} props - Propiedades del componente.
 */
const PageBanner: React.FC<PageBannerProps> = ({ title, imageSrcs, objectPosition = 'center', children, imageOpacity }) => {
  const bannerImageSrc = imageSrcs && imageSrcs.length > 0 ? imageSrcs[0] : null;
  const defaultImageOpacity = imageOpacity !== undefined ? imageOpacity : 0.7;
  const { theme, colors } = useTheme();
  const [error] = useState<string | null>(null);

  // Define el color de superposición por defecto basado en el tema
  const defaultOverlayColor = theme === 'dark' ? colors.bannerImageOverlay : colors.bannerImageOverlay;

  //Variables para clases repetidas
  const bannerImage = `h-full w-full object-cover object-${objectPosition}`;

  if (error) {
    console.error("Error en PageBanner:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado en el banner.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="relative h-full">
        <div className="absolute inset-0 h-full">
          {bannerImageSrc && (
            <img
              key={bannerImageSrc} // Añadimos key
              className={bannerImage}
              src={bannerImageSrc}
              alt={title}
              style={{ opacity: defaultImageOpacity }}
              loading="lazy" // Añade carga diferida
            />
          )}
          {/* Capa de superposición con color temático */}
          <div
            className="absolute inset-0 h-full"
            style={{ backgroundColor: defaultOverlayColor }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-800 to-transparent opacity-60 mix-blend-overlay" aria-hidden="true" />
        </div>
        <div className={"relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8"}>
          <h1 className={`${SERVICES_TITLE_CLASS} ${getTextColorClass(theme)}`}>
            {title}
          </h1>
          {children && (
            <div className="flex justify-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
