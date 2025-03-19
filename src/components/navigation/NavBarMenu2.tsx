import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null); // Ref para el contenedor del menú

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="tw-absolute top-0 left-0 right-0 z-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="tw-md:hidden absolute top-4 right-4 text-gray-800 p-2 hover:text-pink-500 transition-colors duration-300 z-50"
      >
        <div className="tw-space-y-2">
          <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div
        ref={menuRef} // Asignamos la ref al div del menú
        className={`
          md:max-w-6xl md:mx-auto
          ${isMenuOpen ? 'block bg-white bg-opacity-95 md:bg-transparent' : 'hidden'} md:block
          transition-all duration-300 ease-in-out
        `}
      >
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
            to="/services"
            className={`nav-link ${isActive('/services') ? 'text-pink-500' : ''}`}
          >
            SERVICIOS & CURSOS
          </Link>
          <Link
            to="/store"
            className={`nav-link ${isActive('/store') ? 'text-pink-500' : ''}`}
          >
            TIENDA
          </Link>
          <Link
            to="/gallery"
            className={`nav-link ${isActive('/gallery') ? 'text-pink-500' : ''}`}
          >
            GALERIA
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'text-pink-500' : ''}`}
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

export default Navigation2;