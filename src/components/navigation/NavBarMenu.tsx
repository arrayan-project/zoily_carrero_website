/**
 * Menú de navegación principal de la aplicación.
 * Incluye enlaces a las rutas principales, menú hamburguesa para móvil, prefetch de páginas y estilos adaptados al tema y ruta.
 * Gestiona submenús para "SERVICIOS".
 *
 * @component
 * @param {NavigationProps} props - Props del menú, incluyendo clase opcional y ruta actual.
 * @returns {JSX.Element}
 */
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import MobileServicesSubMenu from "./MobileServicesSubMenu"; // Importar el nuevo componente

interface NavigationProps {
  className?: string;
  currentPathname?: string; // Nueva prop para la ruta actual
}

// Exportar interfaces para que puedan ser usadas por otros componentes como MobileServicesSubMenu
export interface NavSubItem {
  label: string;
  path: string;
  prefetch: () => Promise<any>;
}
export interface NavItem {
  id: string; // Identificador único para el item
  label: string;
  path?: string; // Opcional si tiene subItems y no es un enlace directo
  prefetch?: () => Promise<any>;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "INICIO",
    path: "/home",
    prefetch: () => import("../../pages/Home"),
  },
  {
    id: "services",
    label: "SERVICIOS",
    // path: '/services', // Ya no apunta a una página general de servicios
    subItems: [
      {
        label: "Maquillaje",
        path: "/makeup",
        prefetch: () => import("../../pages/MakeUp"),
      },
      {
        label: "Cursos",
        path: "/courses",
        prefetch: () => import("../../pages/Courses"),
      },
    ],
  },
  {
    id: "gallery",
    label: "GALERÍA",
    path: "/gallery",
    prefetch: () => import("../../pages/Gallery"),
  },
  {
    id: "ugc",
    label: "UGC",
    path: "/ugc",
    prefetch: () => import("../../pages/UGC"),
  },
  {
    id: "store",
    label: "TIENDA",
    path: "/store",
    prefetch: () => import("../../pages/Store"),
  },
  {
    id: "about",
    label: "ACERCA DE",
    path: "/about",
    prefetch: () => import("../../pages/About"),
  },
  {
    id: "contact",
    label: "CONTACTO",
    path: "/contact",
    prefetch: () => import("../../pages/Contact"),
  },
];

export default function NavBarMenu({
  className,
  currentPathname,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Para el dropdown de escritorio
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(
    null
  ); // Para el submenú móvil
  const { theme } = useTheme();
  const scrolled = useScrollVisibility(0);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // --- Lógica de Estilos Dinámicos ---

  // Rutas específicas donde el menú de navegación siempre debe tener texto blanco (independientemente del tema o scroll).
  const whiteMenuRoutes = ["/home", "/makeup", "/courses", "/about"];
  const isWhiteMenuRoute = currentPathname
    ? whiteMenuRoutes.includes(currentPathname)
    : false;

  // Color base del texto para la barra de navegación (menú cerrado o vista de escritorio/lg).
  // Prioriza las rutas especiales, luego el tema oscuro, y finalmente el tema claro.
  const navBarBaseTextColor = isWhiteMenuRoute
    ? "text-white"
    : theme === "dark"
    ? "text-white"
    : "text-black";

  // Color del texto para el icono de hamburguesa, sigue la lógica de navBarBaseTextColor.
  const navBarMenuButtonColor = navBarBaseTextColor;

  // Color base del texto para los enlaces DENTRO del menú desplegable móvil (cuando isOpen === true).
  // Se elige para asegurar legibilidad contra el fondo del menú abierto (blanco o gris oscuro).
  const openMenuBaseTextColor = theme === "dark" ? "text-white" : "text-black";

  // Clases base comunes para todos los enlaces del menú.
  const baseLinkClasses = "px-5 py-2 text-base text-center font-cinzel transition-colors";
  // Clases comunes para el efecto hover y el subrayado de enlaces activos.
  const hoverClass = "hover:text-pink-500";
  const activeUnderlineClass = "underline";

  // Estilos para enlaces en la barra de navegación principal (escritorio o móvil cerrado)
  const navBarLinkStyles = {
    active: `${navBarBaseTextColor} ${activeUnderlineClass} ${hoverClass}`,
    inactive: `${navBarBaseTextColor} ${hoverClass}`,
  };

  // Estilos para enlaces dentro del menú móvil abierto
  const openMenuLinkStyles = {
    active: `${openMenuBaseTextColor} ${activeUnderlineClass} ${hoverClass}`,
    inactive: `${openMenuBaseTextColor} ${hoverClass}`,
  };

  const menuButtonSpanBase = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  // Determinar la clase de fondo para cuando se hace scroll
  let scrolledBackgroundClass = "";
  if (scrolled) {
    if (isWhiteMenuRoute || theme === "dark") {
      // Para texto blanco (en rutas especiales o tema oscuro), usar un fondo oscuro semi-transparente
      scrolledBackgroundClass = "bg-black/5 backdrop-blur-sm"; // Negro con 20% de opacidad y blur
    } else {
      // Para texto negro (en tema claro, rutas no especiales), usar un fondo claro semi-transparente
      scrolledBackgroundClass = "bg-white/5 backdrop-blur-sm"; // Blanco con 30% de opacidad y blur
    }
  }

  // Bloquea el scroll del body cuando el menú móvil está abierto.
  useBodyScrollLock(isOpen);

  // Efecto para cerrar el dropdown de escritorio si se hace clic fuera del menú.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Efecto para resetear el estado del menú (cerrar menú móvil, submenús y dropdowns) al cambiar de ruta.
  useEffect(() => {
    setIsOpen(false);
    setMobileSubMenuOpen(null);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Clases para el offset izquierdo del fondo del menú y la línea inferior.
  // Estas clases parecen estar diseñadas para evitar superponerse a un logo posicionado externamente.
  const logoLeftOffsetClasses = "left-[102px] sm:left-[92px] md:left-[132px]";

  return (
    <nav
      ref={navRef}
      className={`${className} fixed w-full z-40 min-h-[64px] pr-24`}
      aria-label="Menú principal"
    >
      {/* Elemento para el fondo con efecto blur cuando se hace scroll y el menú está cerrado */}
      {!isOpen && scrolledBackgroundClass && (
        <div
          className={`absolute top-0 bottom-0 right-0 h-full ${logoLeftOffsetClasses} ${scrolledBackgroundClass}`}
          aria-hidden="true"
        />
      )}
      <div
        // Contenedor principal para los botones y el menú desplegable/en línea.
        className={`
          absolute top-0 bottom-0 right-0
          ${logoLeftOffsetClasses}
          flex items-center justify-end
          h-full
          ${isOpen ? "" : scrolledBackgroundClass}
        `}
      >
        {/* Botón de hamburguesa para vistas móviles */}
        <div className="lg:hidden">
          <button
            onClick={() => {
              setIsOpen((o) => !o);
              if (isOpen) setMobileSubMenuOpen(null); // Si se está cerrando, resetear submenú
            }}
            className={`relative  p-4 z-[50] hover:text-pink-500 transition-colors duration-300 
                        ${
                          isOpen ? openMenuBaseTextColor : navBarMenuButtonColor
                        }`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="space-y-2">
              <span
                className={`${menuButtonSpanBase} ${
                  isOpen ? "rotate-45 translate-y-[0.625rem]" : ""
                }`}
              ></span>
              <span
                className={`${menuButtonSpanBase} transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`${menuButtonSpanBase} ${
                  isOpen ? "-rotate-45 -translate-y-[0.625rem]" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Contenedor del menú: se transforma de menú fijo a pantalla completa en móvil a menú en línea en escritorio */}
        <div
          className={`
          ${
            isOpen
                ? `fixed inset-0 z-40 flex flex-col items-center justify-center min-h-screen bg-opacity-90 ${
                    theme === "dark" ? "bg-gray-900" : "bg-white" // Fondo del menú móvil abierto
                  }`
              : "hidden"
          } 
            lg:flex lg:relative lg:inset-auto lg:z-auto lg:min-h-0 lg:flex-row lg:items-center lg:bg-transparent lg:bg-opacity-100
        `}
        >
          {/* Submenú móvil para "SERVICIOS" */}
          {isOpen && mobileSubMenuOpen === "services" && (
            <MobileServicesSubMenu
              subItems={
                navItems.find((item) => item.id === "services")?.subItems || []
              }
              onCloseSubMenu={() => setMobileSubMenuOpen(null)}
              onLinkClick={() => {
                setIsOpen(false);
                setMobileSubMenuOpen(null);
              }}
              baseLinkClass={baseLinkClasses}
              activeLinkClass={openMenuLinkStyles.active}
              inactiveLinkClass={openMenuLinkStyles.inactive}
              backButtonColor={openMenuBaseTextColor} // Color del botón "atrás"
            />
          )}

          {/* Menú principal: se muestra si el menú móvil está abierto Y no hay un submenú móvil activo, O si no es el menú móvil (vista escritorio) */}
          {(!isOpen || (isOpen && !mobileSubMenuOpen)) && (
            <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-1 mt-8 lg:mt-0">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.subItems ? (
                    // Renderiza un botón si el item tiene subItems (ej. "SERVICIOS")
                    <>
                      {/* Botón para abrir submenú (móvil) o dropdown (escritorio) */}
                      <button
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={
                          openDropdown === item.id ||
                          mobileSubMenuOpen === item.id
                        }
                        className={`${baseLinkClasses} ${
                          isOpen // Estilo cuando el menú móvil está abierto
                            ? `text-base ${openMenuLinkStyles.inactive}`
                            : `lg:text-xs ${navBarLinkStyles.inactive}` // Estilo para escritorio o menú móvil cerrado
                        } flex items-center justify-center lg:justify-start w-full`}
                        onClick={() => {
                          if (window.innerWidth < 1024) {
                            // Móvil
                            setMobileSubMenuOpen(item.id);
                          } else {
                            // Escritorio (toggle dropdown)
                            setOpenDropdown(
                              openDropdown === item.id ? null : item.id
                            );
                          }
                        }}
                        onMouseEnter={() =>
                          window.innerWidth >= 1024 && setOpenDropdown(item.id)
                        }
                        // onMouseLeave para el botón se omite; el cierre del dropdown se maneja con clic fuera o mouseLeave del propio dropdown.
                      >
                        {item.label}
                        <svg
                          className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                            openDropdown === item.id ? "rotate-180" : ""
                          } hidden lg:inline-block`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      {/* Dropdown para escritorio (ej. para "SERVICIOS") */}
                      {openDropdown === item.id &&
                        window.innerWidth >= 1024 && (
                          <div
                            role="menu"
                            aria-label="Submenú Servicios"
                            className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-full mt-1 py-2 w-36 rounded-md focus:outline-none"
                            onMouseLeave={() => setOpenDropdown(null)} // Cerrar al salir del área del dropdown
                          >
                            {item.subItems.map((subItem) => (
                              <NavLink
                                key={subItem.label}
                                to={subItem.path}
                                onMouseEnter={subItem.prefetch}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className={({ isActive }) =>
                                  `block px-4 py-2 text-sm whitespace-nowrap font-cinzel 
                                 ${
                                   isActive // Aplicar estilos de navBar (escritorio)
                                     ? navBarLinkStyles.active
                                     : navBarLinkStyles.inactive
                                 }`
                                }
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                    </>
                  ) : (
                    // Renderiza un NavLink normal si el item no tiene subItems
                    <NavLink
                      role="menuitem"
                      to={item.path!}
                      onMouseEnter={item.prefetch}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => {
                        const linkStyles =
                          isOpen && window.innerWidth < 1024 // Menú móvil abierto
                            ? isActive
                              ? openMenuLinkStyles.active
                              : openMenuLinkStyles.inactive
                            : isActive // Menú cerrado o escritorio
                            ? navBarLinkStyles.active
                            : navBarLinkStyles.inactive;
                        if (isOpen && window.innerWidth < 1024) {
                        }
                        return `${baseLinkClasses} ${linkStyles} ${
                          isOpen ? "text-base" : "lg:text-xs"
                        }`;
                      }}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {!isOpen && (
        // Línea blanca decorativa en la parte inferior del menú cuando está cerrado.
        // El offset izquierdo es para alinear con el contenido, evitando el logo.
        <div
          className={`absolute bottom-0 right-0 h-px bg-white ${logoLeftOffsetClasses}`}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
}
