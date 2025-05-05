// src/components/layout/AppShell.tsx
import React, { Suspense, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../navigation/NavBarMenu';
import ThemeToggleButton from '../buttons/ThemeToggleButton';
import LandingPageMobile from '../../LandingPageMobile';
import DesktopView from './DesktopView';

const ScrollToTopButton = React.lazy(() => import('../buttons/ScrollTopButton'));
const LazyFooter = React.lazy(() => import('../common/LazyFooter'));


export interface AppShellProps {
  onSmoothScroll: (sectionId: string) => void;
}

export default function AppShell({ onSmoothScroll }: AppShellProps) {
  const { pathname } = useLocation();
  const isMobileView = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  // Rutas donde debe aparecer el botón ScrollToTop (excluir FAQ, Terms, Policy)
  const showScrollToTop = ['/', '/home', '/services', '/ugc', '/store', '/gallery', '/about', '/contact'].includes(pathname);

  // Refs para navegación interna
  const isInternalScroll = useRef<boolean>(false);
  const isNavigating = useRef<boolean>(false);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Suspense fallback={<div className="py-10 text-center">Cargando...</div>}>
        {/* Toggle de tema */}
        <div className="fixed top-4 left-4 z-50">
          <ThemeToggleButton />
        </div>

        {/* Navegación principal */}
        <Navigation
          onSmoothScroll={onSmoothScroll}
          isMobileView={isMobileView}
          isInternalScroll={isInternalScroll}
          isNavigating={isNavigating}
        />

        {/* Contenido principal: móvil o desktop */}
        {isMobileView
          ? <LandingPageMobile onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
          : <DesktopView onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
        }

        {/* Botón scroll-to-top para rutas de landing */}
        {showScrollToTop && (
          <div className="fixed bottom-4 right-4 z-50">
            <ScrollToTopButton />
          </div>
        )}
         {!isMobileView && <LazyFooter />}
      </Suspense>
    </div>
  );
}