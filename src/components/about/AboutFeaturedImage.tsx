// src/components/about/AboutFeaturedImage.tsx
/**
 * Componente para mostrar la imagen destacada de Zoily vistiendo una bata beige en la página "Sobre Mí".
 * Se encarga de la carga diferida (lazy loading) de la imagen, mostrando un esqueleto (skeleton)
 * mientras la imagen se carga para mejorar la experiencia del usuario.
 *
 * @component
 * @param {AboutFeaturedImageProps} props - Propiedades para la imagen destacada.
 * @property {string} src - La URL de la imagen a mostrar.
 * @property {string} alt - El texto alternativo para la imagen.
 * @property {string} [minHeight] - Altura mínima para el contenedor del lazy loader.
 * @returns {JSX.Element} El componente de imagen renderizado.
 */
import React, { Suspense } from 'react';
import LazySectionLoader from '../common/LazySectionLoader';
import { ImageObject } from '../../utils/getImageObject';

interface AboutFeaturedImageProps {
  imageObject: ImageObject | null;
  alt: string;
  minHeight?: string; // Para LazySectionLoader
  skeletonMinHeightClass?: string; // Para el div del esqueleto
}

const AboutFeaturedImage: React.FC<AboutFeaturedImageProps> = React.memo(({
  imageObject,
  alt,
  minHeight = "400px",
  skeletonMinHeightClass = "h-[400px] lg:h-[600px]"
}) => {
  const skeleton = <div className={`w-full ${skeletonMinHeightClass} bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse`}></div>;

  return (
    <LazySectionLoader
      minHeight={minHeight}
      fallback={skeleton}
    >
      <Suspense fallback={skeleton}>
        <div className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] shadow-xl overflow-hidden ">
          <picture>
            {imageObject?.avif && <source srcSet={imageObject.avif} type="image/avif" />}
            {imageObject?.webp && <source srcSet={imageObject.webp} type="image/webp" />}
            <img
              src={imageObject?.webp || '/img/default-image.png'}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </Suspense>
    </LazySectionLoader>
  );
});

export default AboutFeaturedImage;
