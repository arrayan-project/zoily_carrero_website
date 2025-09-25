import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useHeaderStyles } from "../../hooks/useHeaderStyles";
import AnimatedDecorativeLines from "../animation/AnimatedDecorativeLines";
import NavLinksList from "./NavLinksList";
import CartIcon from "./CartIcon";

interface NavigationProps {
  className?: string;
  currentPathname?: string;
  hasScrolled?: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavSubItem {
  label: string;
  path: string;
  prefetch: () => Promise<any>;
}
export interface NavItem {
  id: string;
  label: string;
  path?: string;
  prefetch?: () => Promise<any>;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  { id: "home", label: "INICIO", path: "/home", prefetch: () => import("../../pages/Home") },
  {
    id: "services",
    label: "SERVICIOS",
    subItems: [
      { label: "Maquillaje", path: "/makeup", prefetch: () => import("../../pages/MakeUp") },
      { label: "Cursos", path: "/courses", prefetch: () => import("../../pages/Courses") }
    ]
  },
  { id: "gallery", label: "GALERÍA", path: "/gallery", prefetch: () => import("../../pages/Gallery") },
  { id: "ugc", label: "UGC", path: "/ugc", prefetch: () => import("../../pages/UGC") },
  { id: "shop", label: "TIENDA", path: "/shop", prefetch: () => import("../../pages/Shop") },
  { id: "about", label: "ACERCA DE", path: "/about", prefetch: () => import("../../pages/About") },
  { id: "contact", label: "CONTACTO", path: "/contact", prefetch: () => import("../../pages/Contact") }
];

const footerNavItems = [
  { label: "Guías & Ideas", path: "/guides" },
  { label: "Tips & Trucos", path: "/tips" },
  { label: "FAQ", path: "/faq" },
  { label: "Términos", path: "/terms" },
  { label: "Privacidad", path: "/policy" },
];

export default function NavBarMenu({
  className,
  currentPathname,
  hasScrolled,
  isMenuOpen,
  setIsMenuOpen,
}: NavigationProps) {
  const { colors } = useTheme();
  const location = useLocation();

  // Bloquear scroll cuando el menú está abierto
  useBodyScrollLock(isMenuOpen);

  const { navBarMenuButtonColor, decorativeLineColorClass, headerButtonClasses } =
    useHeaderStyles({ hasScrolled, currentPathname });

  // Líneas decorativas
  // El ancho de cada línea se calcula para dejar espacio para el gap y un padding a los costados.
  // Fórmula: 50vw - (gap + padding_lateral)
  // md: 50vw - (56px (gap-14) + 48px) = 50vw - 104px
  const sideContainerWidthClasses = "w-[calc(50vw-80px)] sm:w-[calc(50vw-80px)] md:w-[calc(50vw-104px)]";
  const linePositionClasses = "top-[80px] sm:top-[70px] md:top-[100px]";
  // Líneas del icono hamburguesa
  const menuButtonSpanBase = `block w-full h-px bg-current transition-transform duration-300 scale-y-50`;

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  return (
    <nav className={`${className} relative z-40 h-full`} aria-label="Menú principal">
      {/* Botón hamburguesa / cerrar */}
      <button
        onClick={() => {
          setIsMenuOpen(o => !o);
        }}
        className={`absolute top-1/2 -translate-y-1/2 left-8 md:left-36 p-4 z-50 hover:opacity-80 transition-colors duration-300 ${!isMenuOpen ? navBarMenuButtonColor : ''}`}
        style={{ color: isMenuOpen ? colors.text : undefined }}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
      >
        <div className="w-10 space-y-2">
          <span className={`${menuButtonSpanBase} ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}></span>
          <span className={`${menuButtonSpanBase} ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
        </div>
      </button>

      {/* Botón "Agenda tu cita" en el header */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1 md:right-12 xl:right-56  z-50 flex items-center">
        <NavLink
          to="/contact"
          className={`font-cinzel border px-2 py-1 md:px-4 md:py-1 text-xs md:text-sm transition-colors duration-300 ${!isMenuOpen ? headerButtonClasses : 'hover:opacity-80'}`}
          style={isMenuOpen ? { color: colors.text, borderColor: colors.border } : {}}
        >
          AGENDA AHORA
        </NavLink>
        <CartIcon
          className={!isMenuOpen ? navBarMenuButtonColor : ''}
          style={{ color: isMenuOpen ? colors.text : undefined }}
        />
      </div>

      {/* Overlay full viewport */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 h-screen w-screen z-40 flex flex-col items-start justify-center pl-8 md:pl-40"
          style={{ backgroundColor: colors.background }}
        >
          <NavLinksList navItems={navItems} onLinkClick={() => setIsMenuOpen(false)} />

          {/* Footer Links */}
          <div className="absolute bottom-0 left-0 right-0 w-full px-8 md:px-40 py-8">
            <div className="flex flex-wrap justify-start items-center gap-x-6 gap-y-2">
              {footerNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-cinzel text-xs md:text-sm transition-colors hover:underline"
                  style={{ color: colors.text }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Líneas decorativas cuando cerrado */}
      <AnimatedDecorativeLines
        isExpanded={!isMenuOpen && !hasScrolled}
        widthClasses={sideContainerWidthClasses}
        positionClasses={linePositionClasses}
        lineColorClass={decorativeLineColorClass}
        gap="14"
      />
    </nav>
  );
}
