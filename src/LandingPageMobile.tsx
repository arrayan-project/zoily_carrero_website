// src/LandingPageMobile.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import LayoutMobile from './components/layout/LayoutMobile';
import ThemeToggleButton from './components/buttons/ThemeToggleButton';
import Home from './pages/Home';
import AppRoutes from './Routes';
import { lazy, Suspense } from 'react';

const ScrollToTopButton = lazy(() => import('./components/buttons/ScrollTopButton'));

export interface LandingPageMobileProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

export default function LandingPageMobile({
  onSmoothScroll,
  isMobileView
}: LandingPageMobileProps) {
  const { pathname } = useLocation();
  // Rutas que renderizan directamente Home.tsx en móvil
  const isHomeRoute = ['/', '/home'].includes(pathname);

  return (
    <LayoutMobile>
      <div className="fixed top-4 left-4 z-50">
        <ThemeToggleButton />
      </div>

      <div className="w-full">
        {isHomeRoute
          ? <Home onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
          : <AppRoutes onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />
        }
      </div>

      {/* Mostrar ScrollToTop en rutas principales, excluyendo FAQ, Terms, Policy */}
      {['/', '/home', '/services', '/ugc', '/store', '/gallery', '/about', '/contact'].includes(pathname) && (
        <div className="fixed bottom-4 right-4 z-50">
          <ScrollToTopButton />
        </div>
      )}
    </LayoutMobile>
  );
}