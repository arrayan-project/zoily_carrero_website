// src/components/layout/AppShell.tsx
import { Suspense, useState, useCallback, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook';
import ThemeToggleButton from '../buttons/ThemeToggleButton';
import FloatingContactButton from '../buttons/FloatingContactButton';
import ContactUsModal from '../modals/ContactUsModal';

// Lazy-load de componentes
const Navigation      = lazy(() => import('../navigation/NavBarMenu'));
const AppRoutes       = lazy(() => import('../../Routes'));
const ScrollTopButton = lazy(() => import('../buttons/ScrollTopButton'));
const Footer          = lazy(() => import('../common/LazyFooter'));

export default function AppShell() {
  const { pathname } = useLocation();
  const { theme }    = useTheme();

  // Rutas donde mostramos "scroll-to-top"
  const scrollRoutes = ['/home','/services','/gallery','/ugc','/store','/about','/contact'];
  const showScroll   = scrollRoutes.includes(pathname);

  // Estado para modal de contacto
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal  = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  // Clases de tema (antes en LayoutMobile)
  const themeClasses = theme === 'light'
    ? 'bg-white text-amber-700'
    : 'bg-gray-800 text-rose-400';

  return (
    <Suspense fallback={<div className="py-10 text-center">Cargando…</div>}>
      <div className={`${themeClasses} w-full min-h-screen overflow-x-hidden`}>
        {/* Toggle de tema */}
        <div className="fixed top-4 left-4 z-50">
          <ThemeToggleButton />
        </div>

        {/* Menú de navegación */}
        <Navigation />

        {/* Rutas de la app */}
        <AppRoutes />

        {/* Scroll-to-top (móvil y desktop) */}
        {showScroll && (
          <div className="fixed bottom-4 right-4 z-50">
            <ScrollTopButton />
          </div>
        )}

        {/* Footer (móvil y desktop) */}
        <Footer />

        {/* Botón flotante de contacto */}
        <div className="fixed bottom-4 left-4 z-50">
          <FloatingContactButton onClick={openModal} />
        </div>

        {/* Modal de contacto */}
        {isModalOpen && (
          <ContactUsModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </Suspense>
  );
}
