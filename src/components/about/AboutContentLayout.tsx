// src/components/about/AboutContentLayout.tsx
import React, { Suspense, lazy } from 'react';
import LazySectionLoader from '../common/LazySectionLoader';
import AboutMainContentSkeleton from '../skeletons/About/AboutMainContentSkeleton';
import AboutWhyUsSkeleton from '../skeletons/About/AboutMainContentSkeleton'; // Asumiendo que es el mismo esqueleto
import AboutFeaturedImage from './AboutFeaturedImage'; // Importamos el nuevo componente

// Lazy load de los componentes de contenido
const AboutMainContent = lazy(() => import('./AboutMainContent'));
const AboutWhyUsSection = lazy(() => import('./AboutWhyUsSection'));

interface AboutContentLayoutProps {
  featuredImageSrc: string;
  featuredImageAlt: string;
}

const AboutContentLayout: React.FC<AboutContentLayoutProps> = React.memo(({
  featuredImageSrc,
  featuredImageAlt
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 md:py-16">
      {/* Left Column */}
      <div className="lg:w-1/2 flex flex-col gap-8 md:gap-12">
        <LazySectionLoader
          minHeight="200px"
          fallback={<AboutMainContentSkeleton />}
        >
          <Suspense fallback={<AboutMainContentSkeleton />}>
            <AboutMainContent />
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

      {/* Right Column - Image */}
      {/* Removed items-center to allow the child to stretch vertically (items-stretch is default) */}
      <div className="lg:w-1/2 flex justify-center">
        <AboutFeaturedImage
          src={featuredImageSrc}
          alt={featuredImageAlt}
        />
      </div>
    </div>
  );
});

export default AboutContentLayout;
