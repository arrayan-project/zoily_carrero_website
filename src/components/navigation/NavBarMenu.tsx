/**
 * Menú de navegación principal de la aplicación.
 * Incluye enlaces a las rutas principales, menú hamburguesa para móvil, prefetch de páginas y estilos adaptados al tema y ruta.
 *
 * @component
 * @param {NavigationProps} props - Props del menú, incluyendo clase opcional y ruta actual.
 * @returns {JSX.Element}
 */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";


interface NavigationProps {
  className?: string;
  currentPathname?: string; // Nueva prop para la ruta actual
}

const navItems = [
  { label: 'INICIO',     path: '/home',     prefetch: () => import('../../pages/Home') },
  { label: 'SERVICIOS',  path: '/services', prefetch: () => import('../../pages/Services') },
  { label: 'GALERÍA',    path: '/gallery',  prefetch: () => import('../../pages/Gallery') },
  { label: 'UGC',        path: '/ugc',      prefetch: () => import('../../pages/UGC') },
  { label: 'TIENDA',     path: '/store',    prefetch: () => import('../../pages/Store') },
  { label: 'ACERCA DE',  path: '/about',    prefetch: () => import('../../pages/About') },
  { label: 'CONTACTO',   path: '/contact',  prefetch: () => import('../../pages/Contact') },
];

export default function NavBarMenu({ className, currentPathname }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const scrolled = useScrollVisibility(0);

  // Rutas donde el menú siempre será blanco
  const whiteMenuRoutes = ['/home', '/services', '/about'];
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

  const baseLink = 'px-5 py-2 text-base font-cinzel transition-colors';
  // Los colores de activeLink e inactiveLink se determinarán dinámicamente abajo
  const menuButtonSpanBase = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  // Determinar la clase de fondo para cuando se hace scroll
  let scrolledBackgroundClass = 'bg-transparent';
  if (scrolled) {
    if (isWhiteMenuRoute || theme === 'dark') {
      // Para texto blanco (en rutas especiales o tema oscuro), usar un fondo oscuro semi-transparente
      scrolledBackgroundClass = 'bg-black/20 backdrop-blur-sm'; // Negro con 20% de opacidad y blur
    } else {
      // Para texto negro (en tema claro, rutas no especiales), usar un fondo claro semi-transparente
      scrolledBackgroundClass = 'bg-white/30 backdrop-blur-sm'; // Blanco con 30% de opacidad y blur
    }
  }

  useBodyScrollLock(isOpen);

  return (
    <nav className={`${className} fixed w-full z-40 flex items-center justify-end min-h-[64px] px-24 ${scrolledBackgroundClass}`}>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(o => !o)}
          className={`p-4 absolute top-1/2 right-4 -translate-y-1/2 z-50 hover:text-pink-500 transition-colors duration-300 ${navBarMenuButtonColor}`}
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
        lg:flex lg:relative lg:bg-transparent lg:flex-row lg:items-center lg:min-h-0 lg:z-auto lg:bg-opacity-100
      `}>
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className={`lg:hidden absolute top-4 right-4 p-4 z-50 hover:text-pink-500 transition-colors duration-300 ${openMenuBaseTextColor}`} // Color para el botón de cerrar (X)
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        )}
        <div className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-2 mt-8 lg:mt-0">
          {navItems.map(({ label, path, prefetch }) => (
            <NavLink
              key={label}
              to={path}
              onMouseEnter={prefetch}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => {
                let linkStyle = baseLink;
                // Determinar si estamos en el menú móvil abierto o en la barra de navegación
                if (isOpen && window.innerWidth < 1024) { // Asumiendo lg breakpoint es 1024px
                  linkStyle += isActive ? ` ${openMenuActiveLink}` : ` ${openMenuInactiveLink}`;
                } else {
                  linkStyle += isActive ? ` ${navBarActiveLink}` : ` ${navBarInactiveLink}`;
                }
                return `${linkStyle} ${isOpen ? 'text-base' : 'lg:text-base'}`;
              }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
