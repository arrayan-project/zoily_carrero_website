// NavBarMenu.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook';

interface NavigationProps {
  className?: string;
  onSmoothScroll?: (sectionId: string) => void; // Prop para smoothScroll
  isMobileView: boolean; // Prop para saber si estamos en vista movil
}

const Navigation: React.FC<NavigationProps> = ({ className, onSmoothScroll, isMobileView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  // Variables para clases repetidas
  const navLinkBase = `nav-link block lg:inline-block`;
  const navLinkActive = `text-pink-500`;
  const navLinkInactive = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonBase = `lg:hidden absolute top-4 right-4 p-2 hover:text-pink-500 transition-colors duration-300 z-50`; // Agregamos lg:hidden
  const menuButtonColor = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonSpan = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  const handleLinkClick = (to: string, sectionId?: string) => {
    setIsMenuOpen(false); // Cerrar el menú
    if (isMobileView && sectionId && onSmoothScroll) {
      onSmoothScroll(sectionId); // Ejecutar smoothScroll si es necesario
    }
  };

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
          ${isMenuOpen ? `fixed inset-0 bg-opacity-95 z-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}` : 'hidden'}
          ${isMenuOpen ? '' : 'hidden'} lg:block lg:relative lg:inset-0 // Agregamos lg:block y lg:relative lg:inset-0
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
            flex flex-col lg:flex-row lg:justify-center lg:items-end
            space-y-4 lg:space-y-12 lg:space-x-4
            font-montserrat text-sm tracking-wider
            lg:text-xs lg:md:text-sm
            lg:px-32 lg:md:px-0
          `}
        >
          <Link to="/" onClick={() => handleLinkClick("/", "home")} className={`${navLinkBase} ${isActive('/') ? navLinkActive : navLinkInactive}`}>
            INICIO
          </Link>
          <Link to="/services" onClick={() => handleLinkClick("/services", "services")} className={`${navLinkBase} ${isActive('/services') ? navLinkActive : navLinkInactive}`}>
            SERVICIOS & CURSOS
          </Link>
          <Link to="/gallery" onClick={() => handleLinkClick("/gallery", "gallery")} className={`${navLinkBase} ${isActive('/gallery') ? navLinkActive : navLinkInactive}`}> {/* Agregamos sectionId: "gallery" */}
            GALERIA
          </Link>
          <Link to="/ugc" onClick={() => handleLinkClick("/ugc", "ugc")} className={`${navLinkBase} ${isActive('/ugc') ? navLinkActive : navLinkInactive}`}>
            UGC
          </Link>
          <Link to="/store" onClick={() => handleLinkClick("/store", "store")} className={`${navLinkBase} ${isActive('/store') ? navLinkActive : navLinkInactive}`}> {/* Agregamos sectionId: "store" */}
            TIENDA
          </Link>
          <Link to="/about" onClick={() => handleLinkClick("/about", "about")} className={`${navLinkBase} ${isActive('/about') ? navLinkActive : navLinkInactive}`}> {/* Agregamos sectionId: "about" */}
            ACERCA DE
          </Link>
          <Link to="/contact" onClick={() => handleLinkClick("/contact", "contact")} className={`${navLinkBase} ${isActive('/contact') ? navLinkActive : navLinkInactive}`}> {/* Agregamos sectionId: "contact" */}
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
