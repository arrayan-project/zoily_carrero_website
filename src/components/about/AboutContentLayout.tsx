// src/components/about/AboutContentLayout.tsx
/**
 * Componente de layout para el contenido principal de la página "Sobre Mí".
 * Organiza el contenido en una estructura de dos columnas en pantallas grandes (texto a la izquierda, imagen a la derecha)
 * y una sola columna en pantallas pequeñas.
 * Carga de forma diferida los componentes de contenido para optimizar el rendimiento.
 *
 * @component
 * @param {AboutContentLayoutProps} props - Propiedades para el layout.
 * @property {string} featuredImageSrc - URL de la imagen destacada.
 * @property {string} featuredImageAlt - Texto alternativo para la imagen destacada.
 * @returns {JSX.Element} El layout del contenido principal renderizado.
 */
import React, { Suspense, lazy } from 'react';
import LazySectionLoader from '../common/LazySectionLoader';
import AboutMainContentSkeleton from '../skeletons/About/AboutMainContentSkeleton';
import AboutWhyUsSkeleton from '../skeletons/About/AboutMainContentSkeleton'; // Asumiendo que es el mismo esqueleto
import AboutFeaturedImage from './AboutFeaturedImage';
import { ImageObject } from '../../utils/getImageObject';

// Lazy load de los componentes de contenido
const AboutParagraphContent = lazy(() => import('./AboutParagraphContent'));
const AboutTitlesContent = lazy(() => import('./AboutTitlesContent'));
const AboutWhyUsSection = lazy(() => import('./AboutWhyUsSection'));

interface AboutContentLayoutProps {
  imageObject: ImageObject | null;
  featuredImageAlt: string;
}

const AboutContentLayout: React.FC<AboutContentLayoutProps> = React.memo(({
  imageObject,
  featuredImageAlt
}) => {
  return (
    <div className="py-12 md:py-16">
      {/* Títulos y "Por qué nosotros" en la columna izquierda */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-1/2 flex flex-col gap-8 md:gap-12">
          <LazySectionLoader
            minHeight="200px"
            fallback={<AboutMainContentSkeleton />}
          >
            <Suspense fallback={<AboutMainContentSkeleton />}>
              <AboutTitlesContent />
            </Suspense>
          </LazySectionLoader>

          <LazySectionLoader
            minHeight="200px"
            fallback={<AboutWhyUsSkeleton />}
          >
            <Suspense fallback={<AboutWhyUsSkeleton />}>
              <div className='mt-12'>
                <AboutWhyUsSection />
              </div>
            </Suspense>
          </LazySectionLoader>
        </div>
        <div className="lg:w-1/2 flex justify-center z-10">
          <AboutFeaturedImage imageObject={imageObject} alt={featuredImageAlt} />
        </div>
      </div>

      {/* Párrafos adicionales debajo */}
      <div className="mt-12 lg:mt-16">
        <LazySectionLoader
          minHeight="150px" // Ajusta según sea necesario
          fallback={<AboutMainContentSkeleton />} // O un esqueleto más pequeño
        >
          <Suspense fallback={<AboutMainContentSkeleton />}>
            <AboutParagraphContent />
          </Suspense>
        </LazySectionLoader>
      </div>
    </div>
  );
});
export default AboutContentLayout;
