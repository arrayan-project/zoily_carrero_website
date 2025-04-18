// src/MobileView.tsx
import ThemeToggleButton from "./components/buttons/ThemeToggleButton";
import ScrollToTopButton from "./components/buttons/ScrollTopButton";
import LayoutMobile from "./components/layout/MobileFrame";
import MyRoutes from "./Routes"; // Importa MyRoutes
import Content from "./components/layout/PageSections"; // Importa PageSections
import { useLocation } from 'react-router-dom'; // Importa useLocation

interface LandingPageMobileProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

function LandingPageMobile({ onSmoothScroll, isMobileView }: LandingPageMobileProps) {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <LayoutMobile>
      <div className="fixed top-4 left-4 z-50">
        <ThemeToggleButton />
      </div>
      <div className="w-full"> {/* Añadimos w-full */}
        {location.pathname === "/" || location.pathname === "/store" || location.pathname === "/about" || location.pathname === "/contact" ? (
          <Content onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} /> // Renderiza Content si la ruta es "/", "/store", "/about" o "/contact"
        ) : (
          <MyRoutes onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} /> // Renderiza MyRoutes para otras rutas
        )}
      </div>
      <ScrollToTopButton />
    </LayoutMobile>
  );
}

export default LandingPageMobile;
