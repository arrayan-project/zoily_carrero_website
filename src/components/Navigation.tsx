import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute top-4 right-4 text-gray-800 p-2 hover:text-pink-500 transition-colors duration-300 z-50"
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className={`
        md:max-w-6xl md:mx-auto
        ${isMenuOpen ? 'block bg-white bg-opacity-95 md:bg-transparent' : 'hidden'} md:block
        transition-all duration-300 ease-in-out
      `}>
        <div className={`
          flex flex-col md:flex-row md:justify-center md:items-center
          space-y-4 md:space-y-0 md:space-x-8
          font-montserrat text-sm tracking-wider
          mt-12 md:mt-8
          px-4 md:px-0
        `}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'text-pink-500' : ''}`}
          >
            INICIO
          </Link>
          <Link 
            to="/weddings" 
            className={`nav-link ${isActive('/weddings') ? 'text-pink-500' : ''}`}
          >
            SERVICIOS
          </Link>
          <Link 
            to="/corporate" 
            className={`nav-link ${isActive('/corporate') ? 'text-pink-500' : ''}`}
          >
            CURSOS
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${isActive('/blog') ? 'text-pink-500' : ''}`}
          >
            GALERIA
          </Link>
          <Link 
            to="/a-la-carte" 
            className={`nav-link ${isActive('/a-la-carte') ? 'text-pink-500' : ''}`}
          >
            ACERCA DE
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'text-pink-500' : ''}`}
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;