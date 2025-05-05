import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import LayoutMobile from './components/layout/LayoutMobile';
import ThemeToggleButton from './components/buttons/ThemeToggleButton';
import AppRoutes from './Routes';

// Lazy loaded components
const Home              = lazy(() => import('./pages/Home'));
const ScrollToTopButton = lazy(() => import('./components/buttons/ScrollTopButton'));
const LazyFooter        = lazy(() => import('./components/common/LazyFooter'));

export interface LandingPageMobileProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

export default function LandingPageMobile({
  onSmoothScroll,
  isMobileView
}: LandingPageMobileProps) {
  const { pathname } = useLocation();
  const isHomeRoute = ['/', '/home'].includes(pathname);

  return (
    <LayoutMobile>
      {/* Theme toggle */}
      <div className="fixed top-4 left-4 z-50">
        <ThemeToggleButton />
      </div>

      {/* Main content: Home or routed pages */}
      <div className="w-full">
        <Suspense fallback={<div>Cargando…</div>}>
          {isHomeRoute ? (
            <Home onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
          ) : (
            <AppRoutes onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
          )}
        </Suspense>
      </div>

      {/* Mobile footer for selected routes */}
      {isMobileView && ['/', '/home', '/gallery', '/services', '/ugc', '/store', '/faq', '/terms', '/policy'].includes(pathname) && (
        <div className="w-full">
          <Suspense fallback={null}>
            <LazyFooter />
          </Suspense>
        </div>
      )}

      {/* Scroll to top button for key routes */}
      {['/', '/home', '/services', '/gallery','/ugc', '/store', '/gallery', '/about', '/contact', '/faq', '/terms', '/policy'].includes(pathname) && (
        <div className="fixed bottom-4 right-4 z-50">
          <Suspense fallback={null}>
            <ScrollToTopButton />
          </Suspense>
        </div>
      )}
    </LayoutMobile>
  );
}
