// src/components/about/AboutFeaturedImage.tsx
import React, { Suspense } from 'react';
import LazySectionLoader from '../common/LazySectionLoader';

interface AboutFeaturedImageProps {
  src: string;
  alt: string;
  minHeight?: string; // Para LazySectionLoader
  skeletonMinHeightClass?: string; // Para el div del esqueleto
}

const AboutFeaturedImage: React.FC<AboutFeaturedImageProps> = React.memo(({
  src,
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
        <div className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] rounded-lg shadow-xl overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </Suspense>
    </LazySectionLoader>
  );
});

export default AboutFeaturedImage;
