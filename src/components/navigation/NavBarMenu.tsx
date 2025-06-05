/**
 * Menú de navegación principal de la aplicación.
 * Incluye enlaces a las rutas principales, menú hamburguesa para móvil, prefetch de páginas y estilos adaptados al tema y ruta.
 * Gestiona submenús para "SERVICIOS".
 * 
 * @component
 * @param {NavigationProps} props - Props del menú, incluyendo clase opcional y ruta actual.
 * @returns {JSX.Element}
 */
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";


interface NavigationProps {
  className?: string;
  currentPathname?: string; // Nueva prop para la ruta actual
}

interface NavSubItem {
  label: string;
  path: string;
  prefetch: () => Promise<any>;
}

interface NavItem {
  id: string; // Identificador único para el item
  label: string;
  path?: string; // Opcional si tiene subItems y no es un enlace directo
  prefetch?: () => Promise<any>;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  { id: 'home',    label: 'INICIO',     path: '/home',     prefetch: () => import('../../pages/Home') },
  { 
    id: 'services', label: 'SERVICIOS',  
    // path: '/services', // Ya no apunta a una página general de servicios
    subItems: [
      { label: 'Maquillaje', path: '/makeup',  prefetch: () => import('../../pages/MakeUp') },
      { label: 'Cursos',     path: '/courses', prefetch: () => import('../../pages/Courses') },
    ]
  },
  { id: 'gallery', label: 'GALERÍA',    path: '/gallery',  prefetch: () => import('../../pages/Gallery') },
  { id: 'ugc',     label: 'UGC',        path: '/ugc',      prefetch: () => import('../../pages/UGC') },
  { id: 'store',   label: 'TIENDA',     path: '/store',    prefetch: () => import('../../pages/Store') },
  { id: 'about',   label: 'ACERCA DE',  path: '/about',    prefetch: () => import('../../pages/About') },
  { id: 'contact', label: 'CONTACTO',   path: '/contact',  prefetch: () => import('../../pages/Contact') },
];

export default function NavBarMenu({ className, currentPathname }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Para el dropdown de escritorio
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null); // Para el submenú móvil
  const { theme } = useTheme();
  const scrolled = useScrollVisibility(0);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Rutas donde el menú siempre será blanco
  const whiteMenuRoutes = ['/home', '/makeup', '/courses', '/about'];
  const isWhiteMenuRoute = currentPathname ? whiteMenuRoutes.includes(currentPathname) : false;
  
  // --- Estilos para la barra de navegación (menú cerrado o vista lg) ---
  // Color base del texto en la barra: blanco si es ruta especial, sino depende del tema
  const navBarBaseTextColor = isWhiteMenuRoute ? 'text-white' : (theme === 'dark' ? 'text-white' : 'text-black');
  const navBarActiveLink = `${navBarBaseTextColor} underline`;
  const navBarInactiveLink = navBarBaseTextColor;
  const navBarMenuButtonColor = navBarBaseTextColor; // Para el icono de hamburguesa

  // --- Estilos para los enlaces DENTRO del menú desplegable (móvil, isOpen === true) ---
  // El color del texto aquí prioriza la legibilidad contra el fondo del menú abierto
  const openMenuBaseTextColor = theme === 'dark' ? 'text-white' : 'text-black';
  const openMenuActiveLink = `${openMenuBaseTextColor} underline`;
  const openMenuInactiveLink = openMenuBaseTextColor;

  const baseLink = 'px-5 py-2 text-base text-center font-cinzel transition-colors';
  const menuButtonSpanBase = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  // Determinar la clase de fondo para cuando se hace scroll
  let scrolledBackgroundClass = '';
  if (scrolled) {
    if (isWhiteMenuRoute || theme === 'dark') {
      // Para texto blanco (en rutas especiales o tema oscuro), usar un fondo oscuro semi-transparente
      scrolledBackgroundClass = 'bg-black/5 backdrop-blur-sm'; // Negro con 20% de opacidad y blur
    } else {
      // Para texto negro (en tema claro, rutas no especiales), usar un fondo claro semi-transparente
      scrolledBackgroundClass = 'bg-white/5 backdrop-blur-sm'; // Blanco con 30% de opacidad y blur
    }
  }

  useBodyScrollLock(isOpen);

    // Cerrar dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Resetear submenú móvil y dropdown al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setMobileSubMenuOpen(null);
    setOpenDropdown(null);
  }, [location.pathname]);

  const logoLeftOffsetClasses = "left-[102px] sm:left-[92px] md:left-[132px]";


  return (

    <nav ref={navRef} className={`${className} fixed w-full z-40 min-h-[64px] pr-24`}>
      {!isOpen && scrolledBackgroundClass && (
        <div
          className={`absolute top-0 bottom-0 right-0 h-full ${logoLeftOffsetClasses} ${scrolledBackgroundClass}`}
          aria-hidden="true"
        />
      )}
      <div
        className={`
          absolute top-0 bottom-0 right-0
          ${logoLeftOffsetClasses}
          flex items-center justify-end
          h-full
          ${isOpen ? '' : scrolledBackgroundClass}
        `}
      >
        <div className="lg:hidden"> 
          <button
            onClick={() => {
              setIsOpen(o => !o);
              if (isOpen) setMobileSubMenuOpen(null); // Si se está cerrando, resetear submenú
            }}
            className={`relative  p-4 z-[50] hover:text-pink-500 transition-colors duration-300 
                        ${isOpen ? openMenuBaseTextColor : navBarMenuButtonColor}`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="space-y-2">
              <span className={`${menuButtonSpanBase} ${isOpen ? 'rotate-45 translate-y-[0.625rem]' : ''}`}></span>
              <span className={`${menuButtonSpanBase} transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`${menuButtonSpanBase} ${isOpen ? '-rotate-45 -translate-y-[0.625rem]' : ''}`}></span>
            </div>
          </button>
        </div>

        <div className={`
          ${isOpen 
            ? `fixed inset-0 z-40 flex flex-col items-center justify-center min-h-screen bg-opacity-90 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}` 
            : 'hidden'} 
          lg:flex lg:relative lg:inset-auto lg:z-auto lg:min-h-0 lg:flex-row lg:items-center lg:bg-transparent lg:bg-opacity-100
        `}>
          
          {/* Lógica para el menú móvil */}
          {isOpen && mobileSubMenuOpen === 'services' && (
            <div className="flex flex-col items-center justify-center w-full">
              <button
                onClick={() => setMobileSubMenuOpen(null)}
                className={`absolute top-20 left-1/2 -translate-x-1/2 p-2 ${openMenuBaseTextColor} hover:text-pink-500`}
                aria-label="Volver al menú principal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transform rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <div className="flex flex-col items-center space-y-6 mt-24">
                {navItems.find(item => item.id === 'services')?.subItems?.map(subItem => (
                  <NavLink
                    key={subItem.label}
                    to={subItem.path}
                    onMouseEnter={subItem.prefetch}
                    onClick={() => {
                      setIsOpen(false); // Cierra todo el menú móvil
                      setMobileSubMenuOpen(null); // Asegura que el submenú se cierre
                    }}
                    className={({ isActive }) =>
                      `${baseLink} text-base ${
                        isActive
                          ? `${openMenuBaseTextColor} underline hover:text-pink-500` // Activo también con hover rosa
                          : `${openMenuBaseTextColor} hover:text-pink-500`
                      }`
                    }
                  >
                    {subItem.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}

          {/* Menú principal (móvil o escritorio) */}
          {(!isOpen || (isOpen && !mobileSubMenuOpen)) && (
            <div className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-1 mt-8 lg:mt-0">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.subItems ? (
                    // Elemento con submenú
                    <>
                      {/* Botón para móvil y etiqueta para escritorio */}
                      <button
                        onClick={() => {
                          if (window.innerWidth < 1024) { // Móvil
                            setMobileSubMenuOpen(item.id);
                          } else { // Escritorio (toggle dropdown)
                            setOpenDropdown(openDropdown === item.id ? null : item.id);
                          }
                        }}
                        onMouseEnter={() => window.innerWidth >= 1024 && setOpenDropdown(item.id)}
                        // onMouseLeave={() => window.innerWidth >= 1024 && setOpenDropdown(null)} // Se maneja con clic fuera
                        className={`${baseLink} ${isOpen ? `text-base ${openMenuInactiveLink}` : `lg:text-xs ${navBarInactiveLink}`} hover:text-pink-500 flex items-center justify-center lg:justify-start w-full`}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.id || mobileSubMenuOpen === item.id}
                      >
                        {item.label}
                        <svg className={`w-3 h-3 ml-1 transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''} hidden lg:inline-block`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </button>
                      {/* Dropdown para escritorio */}
                      {openDropdown === item.id && window.innerWidth >= 1024 && (
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-full mt-1 py-2 w-36 rounded-md focus:outline-none"
                          onMouseLeave={() => setOpenDropdown(null)} // Cerrar al salir del área del dropdown
                        >
                          {item.subItems.map(subItem => (
                            <NavLink
                              key={subItem.label}
                              to={subItem.path}
                              onMouseEnter={subItem.prefetch}
                              onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm whitespace-nowrap font-cinzel 
                                 ${isActive 
                                   ? `${navBarBaseTextColor} underline hover:text-pink-500` // Activo con color base, subrayado y hover rosa
                                   : `${navBarBaseTextColor} hover:text-pink-500` // Normal con color base y hover rosa
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
                    // Elemento de menú normal
                    <NavLink
                      to={item.path!}
                      onMouseEnter={item.prefetch}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => {
                        let linkColorClass = '';
                        if (isOpen && window.innerWidth < 1024) { // Menú móvil abierto
                          linkColorClass = isActive ? `${openMenuBaseTextColor} underline hover:text-pink-500` : `${openMenuBaseTextColor} hover:text-pink-500`;
                        } else { // Menú cerrado o escritorio
                          linkColorClass = isActive ? `${navBarBaseTextColor} underline hover:text-pink-500` : `${navBarBaseTextColor} hover:text-pink-500`;
                        }
                        return `${baseLink} ${linkColorClass} ${isOpen ? 'text-base' : 'lg:text-xs'}`;
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
         <div className={`absolute bottom-0 right-0 h-px bg-white ${logoLeftOffsetClasses}`} aria-hidden="true"></div>
      )}
    </nav>
  );
}
