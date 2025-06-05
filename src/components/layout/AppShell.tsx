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


const Navigation = lazy(() => import("../navigation/NavBarMenu"));
const AppRoutes = lazy(() => import("../../Routes"));
const ScrollTopButton = lazy(() => import("../buttons/ScrollTopButton"));
const Footer = lazy(() => import("../common/LazyFooter"));

export default function AppShell() {
  const { pathname } = useLocation();

  const scrollRoutes = [
    "/home",
    "/gallery",
    "/makeup",
    "/courses",
    "/ugc",
    "/store",
    "/about",
    "/contact",
  ];
  const showScroll = scrollRoutes.includes(pathname);

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
        {showScroll && (
          <div className="fixed bottom-4 right-4 z-50">
            <ScrollTopButton />
          </div>
        )}
        <div className="fixed bottom-20 left-4 z-50">
          <ThemeToggleButton />
        </div>
        <div className="fixed bottom-4 left-4 z-50">
          <FloatingContactButton ref={floatingBtnRef} onClick={openModal} />
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
