// src/components/about/ContainedImagesSection.tsx
import React, { Suspense, lazy } from 'react';
import LazySectionLoader from '../common/LazySectionLoader';
import AboutImagesSkeleton from '../skeletons/About/AboutImagesSkeleton';

const AboutImagesSection = lazy(() => import('./AboutImagesSection'));

const ContainedImagesSection: React.FC = React.memo(() => {
  return (
    // El <main> que lo contiene en About.tsx ya proporciona max-w y padding
    <LazySectionLoader
      minHeight="200px"
      fallback={<AboutImagesSkeleton />}
    >
      <Suspense fallback={<AboutImagesSkeleton />}>
        <div className="py-12 md:py-16"> {/* Espaciado vertical interno */}
          <AboutImagesSection />
        </div>
      </Suspense>
    </LazySectionLoader>
  );
});

export default ContainedImagesSection;
