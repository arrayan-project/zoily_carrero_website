// src/components/about/FullWidthStatsSection.tsx
import React, { Suspense, lazy } from 'react';
import LazySectionLoader from '../common/LazySectionLoader';

const StatsSection = lazy(() => import('../StatsSection'));

// Podrías crear un esqueleto específico para StatsSection si lo deseas
const StatsSkeleton = () => (
  <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 animate-pulse" />
);

const FullWidthStatsSection: React.FC = React.memo(() => {
  return (
    <LazySectionLoader
      minHeight="150px" // Ajusta según sea necesario
      fallback={<StatsSkeleton />}
    >
      <Suspense fallback={<StatsSkeleton />}>
        <div className="w-full"> {/* Asegura que el contenedor de StatsSection sea de ancho completo */}
          <StatsSection />
        </div>
      </Suspense>
    </LazySectionLoader>
  );
});

export default FullWidthStatsSection;
