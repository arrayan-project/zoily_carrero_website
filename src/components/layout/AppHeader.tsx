import { useState, useEffect, lazy } from "react";
import LogoComponent from "./LogoComponent";
import { useTheme } from "../context/themeContext";

const Navigation = lazy(() => import("../navigation/NavBarMenu"));

interface AppHeaderProps {
  pathname: string;
  shouldForceLightLogo: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  pathname,
  shouldForceLightLogo,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Actualiza el estado 'hasScrolled' para cambiar el fondo del header,
      // pero el header siempre permanecerá visible.
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLogoVariant = (): "light" | "dark" | undefined => {
    if (isMenuOpen) {
      return theme === "light" ? "dark" : "light";
    }
    if (hasScrolled) {
      // Si hay scroll, el logo debe contrastar con el fondo del header según el tema
      return theme === "dark" ? "light" : "dark";
    }
    if (shouldForceLightLogo) {
      return "light";
    }
    return undefined;
  };

  // Define el fondo del header dinámicamente según el scroll y el tema
  const headerBgClass = hasScrolled
    ? theme === "dark"
      ? "bg-[#1B1B1B]/90 backdrop-blur-sm shadow-lg" // Fondo oscuro para tema oscuro
      : "bg-[#e5ddd2]/90 backdrop-blur-sm shadow-lg" // Fondo beige para tema claro
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out ${headerBgClass}`}
    >
      <div className="relative w-full h-[80px] sm:h-[70px] md:h-[97px]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center space-y-2">
          <LogoComponent variant={getLogoVariant()} />
        </div>
        <Navigation
          currentPathname={pathname}
          hasScrolled={hasScrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};

export default AppHeader;