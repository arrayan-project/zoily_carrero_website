/**
 * Shell principal de la aplicación.
 * Gestiona la estructura general, navegación, botones flotantes, modal de contacto y pie de página.
 * Adapta colores y logos según la ruta y el tema actual.
 *
 * @component
 * @returns {JSX.Element}
 */
import { Suspense, useState, useCallback, lazy, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import ThemeToggleButton from "../buttons/ThemeToggleButton";
import ContactUsModal from "../modals/ContactUsModal";
import AppLoader from "../../components/loader/AppLoader";
import { Helmet } from "react-helmet-async";
import AppHeader from "./AppHeader";
import CartSidebar from "../shop/CartSidebar";
const AppRoutes = lazy(() => import("../../Routes"));
const ScrollTopButton = lazy(() => import("../buttons/ScrollTopButton"));
const Footer = lazy(() => import("../common/LazyFooter"));

export default function AppShell() {
  // Activa el scroll suave en toda la aplicación
  useSmoothScroll();

  const { pathname } = useLocation();

  const scrollTopEnabledRoutes = ["/home", "/gallery", "/ugc", "/shop"];
  const showScrollTopButton = scrollTopEnabledRoutes.includes(pathname);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const { colors } = useTheme();

  const forceLightLogoRoutes = ["/home", "/makeup", "/courses", "/about"]; // Actualizado
  const shouldForceLightLogo = forceLightLogoRoutes.includes(pathname);

  // Ref para restaurar el foco al cerrar el modal
  const floatingBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <Suspense fallback={<AppLoader />}>
      <Helmet>
        <html lang="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div
        style={{
          background: colors.background,
          color: colors.text,
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <AppHeader
          pathname={pathname}
          shouldForceLightLogo={shouldForceLightLogo}
        />
        <CartSidebar />
        <AppRoutes />

        {/* ScrollToTopButton: Renders if on an enabled route. Positions itself. */}
        {showScrollTopButton && <ScrollTopButton />}

        {/* ThemeToggleButton: Positioned by its wrapper div. */}
        <div className="fixed bottom-3 left-3 z-50">
          {/* z-50 for wrapper, button itself has higher z-index */}
          <ThemeToggleButton />
        </div>
        <Footer />
        {isModalOpen && (
          <ContactUsModal
            isOpen={isModalOpen}
            onClose={() => {
              closeModal();
              floatingBtnRef.current?.focus();
            }}
          />
        )}
      </div>
    </Suspense>
  );
}
