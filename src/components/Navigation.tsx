import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../components/context/useTheme';

interface NavigationProps {
  className?: string; //  <<<  AÑADE ESTA LÍNEA: Define className como una prop opcional de tipo string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme()

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`${className} z-50`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden absolute top-4 right-4 p-2 hover:text-pink-500 transition-colors duration-300 z-50 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
      >
        <div className="tw-space-y-2">
          <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className={`
        md:max-w-6xl md:mx-auto
        ${isMenuOpen ? `fixed inset-0 bg-opacity-95 z-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}` : 'hidden'} md:block
        transition-all duration-300 ease-in-out
      `}style={{ maxWidth: '100vw' }}>
        {/* Botón de cierre (X) - visible solo en menú a pantalla completa */}
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`md:hidden absolute top-4 right-4 p-2 hover:text-pink-500 transition-colors duration-300 z-50 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            <div className="tw-space-y-2">
              <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 rotate-45 translate-y-2.5`}></span>
              <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 opacity-0`}></span>
              <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 -rotate-45 -translate-y-2.5`}></span>
            </div>
          </button>
        )}
        <div className={`
          flex flex-col md:flex-row md:justify-center md:items-end
          space-y-4 md:space-y-12 md:space-x-12
          font-montserrat text-sm tracking-wider
          md:text-xs md:md:text-sm
          md:px-32 md:md:px-0 
        `}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'text-pink-500' : ''} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            INICIO
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActive('/services') ? 'text-pink-500' : ''} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            SERVICIOS & CURSOS
          </Link>
          <Link
            to="/store"
            className={`nav-link ${isActive('/store') ? 'text-pink-500' : ''} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            TIENDA
          </Link>
          <Link
            to="/gallery"
            className={`nav-link ${isActive('/gallery') ? 'text-pink-500' : ''} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            GALERIA
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'text-pink-500' : ''} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            ACERCA DE
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'text-pink-500' : ''} ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;