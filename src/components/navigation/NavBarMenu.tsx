import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import AnimatedDecorativeLines from "../animation/AnimatedDecorativeLines";
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

export default function NavBarMenu({
  className,
  currentPathname,
  hasScrolled,
  isMenuOpen,
  setIsMenuOpen,
}: NavigationProps) {
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const { theme, colors } = useTheme();
  const location = useLocation();

  // Bloquear scroll cuando el menú está abierto
  useBodyScrollLock(isMenuOpen);

  // Líneas decorativas
  // El ancho de cada línea se calcula para dejar espacio para el gap y un padding a los costados.
  // Fórmula: 50vw - (gap + padding_lateral)
  // md: 50vw - (56px (gap-14) + 48px) = 50vw - 104px
  const sideContainerWidthClasses = "w-[calc(50vw-80px)] sm:w-[calc(50vw-80px)] md:w-[calc(50vw-104px)]";
  const linePositionClasses = "top-[80px] sm:top-[70px] md:top-[100px]";
  // Colores dinámicos
  const whiteMenuRoutes = ["/home", "/makeup", "/courses", "/about"];
  const isWhiteMenuRoute = currentPathname ? whiteMenuRoutes.includes(currentPathname) : false;
  // Determina si el texto y los botones del header deben ser blancos.
  // Son blancos si:
  // 1. El tema es oscuro.
  // 2. O si no se ha hecho scroll y la ruta actual requiere un menú blanco (ej. sobre un hero oscuro).
  // En cualquier otro caso (tema claro con scroll, o tema claro en ruta con fondo claro), serán negros.
  const useWhiteText = theme === "dark" || (!hasScrolled && isWhiteMenuRoute);
  const navBarBaseTextColor = useWhiteText ? "text-white" : "text-black";
  // El color de las líneas decorativas debe coincidir con el color del texto.
  const decorativeLineColorClass = useWhiteText ? "bg-white" : "bg-black";
  const navBarMenuButtonColor = navBarBaseTextColor;
  // Clases de enlaces
  const baseLinkClasses = "py-3 text-2xl md:text-4xl font-cinzel transition-colors text-left group";
  const headerButtonClasses = useWhiteText
    ? "text-white border-white hover:bg-white hover:text-black"
    : "text-black border-black hover:bg-black hover:text-white";
  // Líneas del icono hamburguesa
  const menuButtonSpanBase = `block w-full h-px bg-current transition-transform duration-300 scale-y-50`;

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setSubmenuOpen(null);
  }, [location.pathname]);

  return (
    <nav className={`${className} relative z-40 h-full`} aria-label="Menú principal">
      {/* Botón hamburguesa / cerrar */}
      <button
        onClick={() => {
          setIsMenuOpen(o => !o);
          if (isMenuOpen) setSubmenuOpen(null);
        }}
        className={`absolute top-1/2 -translate-y-1/2 left-8 md:left-48 p-4 z-50 hover:opacity-80 transition-colors duration-300 ${!isMenuOpen ? navBarMenuButtonColor : ''}`}
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
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-48 z-50 flex items-center">
        <NavLink
          to="/contact"
          className={`font-cinzel border px-2 py-1 md:px-6 md:py-3 text-xs md:text-sm transition-colors duration-300 ${!isMenuOpen ? headerButtonClasses : 'hover:opacity-80'}`}
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
          {navItems.map(item => (
            <div key={item.id} className="w-full flex flex-col items-start">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => setSubmenuOpen(submenuOpen === item.id ? null : item.id)}
                    className={`${baseLinkClasses}`}
                    style={{
                      color: submenuOpen === item.id ? colors.accent : colors.text,
                      textDecoration: submenuOpen === item.id ? 'underline' : 'none',
                    }}
                  >
                    <div className="flex items-center relative">
                      <span className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 text-current">
                        —
                      </span>
                      <span className="block transition-transform duration-300 ease-in-out group-hover:translate-x-8">
                        {item.label}
                      </span>
                    </div>
                  </button>
                  {submenuOpen === item.id && (
                    <div className="mt-2 flex flex-col items-start space-y-2 pl-6">
                      {item.subItems.map(sub => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`${baseLinkClasses} !text-xl md:!text-2xl`}
                          style={({ isActive }) => ({
                            color: isActive ? colors.accent : colors.text,
                            textDecoration: isActive ? 'underline' : 'none',
                          })}
                        >
                          <div className="flex items-center relative">
                            <span className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 text-current">
                              —
                            </span>
                            <span className="block transition-transform duration-300 ease-in-out group-hover:translate-x-8">
                              {sub.label}
                            </span>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path!}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${baseLinkClasses}`}
                  style={({ isActive }) => ({
                    color: isActive ? colors.accent : colors.text,
                    textDecoration: isActive ? 'underline' : 'none',
                  })}
                >
                  <div className="flex items-center relative">
                    <span className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 text-current">
                      —
                    </span>
                    <span className="block transition-transform duration-300 ease-in-out group-hover:translate-x-8">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              )}
            </div>
          ))}
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
