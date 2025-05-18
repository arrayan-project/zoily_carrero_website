// src/components/layout/AppShell.tsx
import { Suspense, useState, useCallback, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook';
import ThemeToggleButton from '../buttons/ThemeToggleButton';
import LogoComponent from '../layout/LogoComponent';
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

    // Rutas donde quieres forzar el logo oscuro (para fondos claros de página)
  const forceDarkLogoRoutes = ['/ugc', '/store'];
  const shouldForceDarkLogo = forceDarkLogoRoutes.includes(pathname);

  // Rutas donde quieres forzar el logo claro (para fondos oscuros de página)
  const forceLightLogoRoutes = ['/home', '/services', '/about'];
  const shouldForceLightLogo = forceLightLogoRoutes.includes(pathname);

  return (
    <Suspense fallback={<div className="py-10 text-center">Cargando…</div>}>
      <div className={`${themeClasses} w-full min-h-screen overflow-x-hidden`}>
       {/* Contenedor para el Logo y el Botón de Tema */}
        <div className="fixed top-4 left-4 z-[1001] flex flex-col items-center space-y-2">
          <LogoComponent variant={shouldForceDarkLogo ? 'dark' : shouldForceLightLogo ? 'light' : undefined } />
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

        <div className="fixed bottom-20 left-4 z-50">
          <ThemeToggleButton />
        </div>

        {/* Botón flotante de contacto */}
        <div className="fixed bottom-4 left-4 z-50">
          <FloatingContactButton onClick={openModal} />
        </div>

        {/* Footer (móvil y desktop) */}
        <Footer />

        {/* Modal de contacto */}
        {isModalOpen && (
          <ContactUsModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </Suspense>
  );
}
