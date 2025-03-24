/*
##### Función #####
- Este componente representa la barra de navegación de la aplicación. 
- Contiene los enlaces a las diferentes secciones y el menú hamburguesa para la vista móvil.

##### Componentes que utiliza #####
- react-router-dom: Link y useLocation para los enlaces y la ruta actual.
- useTheme: Para obtener el tema actual.

##### Componentes que lo usan #####
- AppWrapper.tsx: Importa y renderiza Navigation.
*/

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  // Variables para clases repetidas
  const navLinkBase = `nav-link block md:inline-block`;
  const navLinkActive = `text-pink-500`;
  const navLinkInactive = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonBase = `md:hidden absolute top-4 right-4 p-2 hover:text-pink-500 transition-colors duration-300 z-50`;
  const menuButtonColor = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonSpan = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  return (
    <nav className={`${className} z-50`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`${menuButtonBase} ${menuButtonColor}`}
        aria-expanded={isMenuOpen} // Añade aria-expanded para accesibilidad
        aria-label="Abrir menú de navegación" // Añade aria-label para accesibilidad
      >
        <div className="space-y-2">
          <span className={`${menuButtonSpan} ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`${menuButtonSpan} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`${menuButtonSpan} ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div
        className={`
          md:max-w-6xl md:mx-auto
          ${isMenuOpen ? `fixed inset-0 bg-opacity-95 z-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}` : 'hidden'} md:block
          transition-all duration-300 ease-in-out
        `}
        style={{ maxWidth: '100vw' }}
      >
        {/* Botón de cierre (X) - visible solo en menú a pantalla completa */}
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`${menuButtonBase} ${menuButtonColor}`}
            aria-label="Cerrar menú de navegación" // Añade aria-label para accesibilidad
          >
            <div className="space-y-2">
              <span className={`${menuButtonSpan} rotate-45 translate-y-2.5`}></span>
              <span className={`${menuButtonSpan} opacity-0`}></span>
              <span className={`${menuButtonSpan} -rotate-45 -translate-y-2.5`}></span>
            </div>
          </button>
        )}
        <div
          className={`
            flex flex-col md:flex-row md:justify-center md:items-end
            space-y-4 md:space-y-12 md:space-x-4
            font-montserrat text-sm tracking-wider
            md:text-xs md:md:text-sm
            md:px-32 md:md:px-0
          `}
        >
          <Link to="/" className={`${navLinkBase} ${isActive('/') ? navLinkActive : navLinkInactive}`}>
            INICIO
          </Link>
          <Link to="/services" className={`${navLinkBase} ${isActive('/services') ? navLinkActive : navLinkInactive}`}>
            SERVICIOS & CURSOS
          </Link>
          <Link to="/gallery" className={`${navLinkBase} ${isActive('/gallery') ? navLinkActive : navLinkInactive}`}>
            GALERIA
          </Link>
          <Link to="/ugc" className={`${navLinkBase} ${isActive('/ugc') ? navLinkActive : navLinkInactive}`}>
            UGC
          </Link>
          <Link to="/store" className={`${navLinkBase} ${isActive('/store') ? navLinkActive : navLinkInactive}`}>
            TIENDA
          </Link>
          <Link to="/about" className={`${navLinkBase} ${isActive('/about') ? navLinkActive : navLinkInactive}`}>
            ACERCA DE
          </Link>
          <Link to="/contact" className={`${navLinkBase} ${isActive('/contact') ? navLinkActive : navLinkInactive}`}>
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;