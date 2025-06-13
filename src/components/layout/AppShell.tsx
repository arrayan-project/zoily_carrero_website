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
import ThemeToggleButton from "../buttons/ThemeToggleButton";
import LogoComponent from "../layout/LogoComponent";
import FloatingContactButton from "../buttons/FloatingContactButton";
import ContactUsModal from "../modals/ContactUsModal";
import AppLoader from "../../components/loader/AppLoader";
import { Helmet } from "react-helmet-async";

const Navigation = lazy(() => import("../navigation/NavBarMenu"));
const AppRoutes = lazy(() => import("../../Routes"));
const ScrollTopButton = lazy(() => import("../buttons/ScrollTopButton"));
const Footer = lazy(() => import("../common/LazyFooter"));

export default function AppShell() {
  const { pathname } = useLocation();

  const scrollTopEnabledRoutes = ["/home", "/gallery", "/ugc", "/store"];
  const showScrollTopButton = scrollTopEnabledRoutes.includes(pathname);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const { colors } = useTheme();

  const forceDarkLogoRoutes = ["/ugc", "/store"];
  const shouldForceDarkLogo = forceDarkLogoRoutes.includes(pathname);

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
        <div className="fixed top-4 left-4 z-[1001] flex flex-col items-center space-y-2">
          <LogoComponent
            variant={
              shouldForceDarkLogo
                ? "dark"
                : shouldForceLightLogo
                ? "light"
                : undefined
            }
          />
        </div>
        <Navigation currentPathname={pathname} />
        <AppRoutes />

        {/* ScrollToTopButton: Renders if on an enabled route. Positions itself. */}
        {showScrollTopButton && <ScrollTopButton />}

        {/* ThemeToggleButton: Positioned by its wrapper div. */}
        <div className="fixed bottom-3 left-3 z-50">
          {/* z-50 for wrapper, button itself has higher z-index */}
          <ThemeToggleButton />
        </div>

        {/* FloatingContactButton: Positions itself based on whether ScrollTopButton is shown. */}
        <FloatingContactButton
          ref={floatingBtnRef}
          onClick={openModal}
          positionVariant={
            showScrollTopButton ? "default" : "scrollTopReplacement"
          }
        />
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
