import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook';

interface NavigationProps {
  className?: string;
  onSmoothScroll?: (sectionId: string) => void;
  isMobileView: boolean;
  isInternalScroll: React.MutableRefObject<boolean>;
  isNavigating: React.MutableRefObject<boolean>;
}

const Navigation: React.FC<NavigationProps> = ({ className, onSmoothScroll, isMobileView, isInternalScroll, isNavigating }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navLinkBase = `nav-link block lg:inline-block`;
  const navLinkActive = `text-pink-500`;
  const navLinkInactive = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonBase = `lg:hidden p-2 hover:text-pink-500 transition-colors duration-300 z-50`;
  const menuButtonColor = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonSpan = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  const handleLinkClick = (to: string, sectionId?: string, hash?: string) => {
    isInternalScroll.current = false;
    setIsMenuOpen(false);

    if (isMobileView) {
      if (to === "/services" || to === "/gallery" || to === "/ugc") {
        isNavigating.current = true;
        navigate(hash ? `${to}${hash}` : to);
      } else if (sectionId && (to === "/store" || to === "/about" || to === "/contact" || to === "/")) {
        isNavigating.current = true;
        navigate("/");
        setTimeout(() => {
          onSmoothScroll?.(sectionId);
        }, 100);
      }
    } else {
      isNavigating.current = true;
      if (sectionId && (to === "/store" || to === "/about" || to === "/contact" || to === "/")) {
        navigate("/");
        setTimeout(() => {
          onSmoothScroll?.(sectionId);
        }, 100);
      } else {
        navigate(hash ? `${to}${hash}` : to);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${className} z-50 w-full fixed ${isScrolled && !isMenuOpen && isMobileView ? 'backdrop-blur-sm bg-white/30 dark:bg-gray-800/30' : ''}`}>    
      <div className='relative w-full flex justify-end lg:justify-center'>
        {/* Nuevo div con efecto blur para el botón hamburguesa en móvil */}
        <div className={`lg:hidden w-full h-16 top-0 right-0 p-2  ${isScrolled ? 'backdrop-blur-sm bg-white/30 dark:bg-gray-800/30' : ''} transition-all duration-300`}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${menuButtonBase} ${menuButtonColor} absolute top-4 right-4`}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            <div className="space-y-2">
              <span className={`${menuButtonSpan} ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`${menuButtonSpan} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`${menuButtonSpan} ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? `fixed inset-0 bg-opacity-95 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex flex-col items-center justify-center min-h-screen` : 'hidden'} lg:block lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 lg:z-auto lg:flex lg:flex-row lg:items-center lg:justify-center lg:py-4`}> 
        <div className={`absolute inset-0 transition-all duration-300 z-[-1] ${isScrolled && !isMenuOpen ? 'lg:backdrop-blur-sm lg:bg-white/30 lg:dark:bg-gray-800/30' : ''}`} />
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`absolute top-4 right-4 p-2 hover:text-pink-500 transition-colors duration-300 z-50 ${menuButtonColor}`}
            aria-label="Cerrar menú de navegación"
          >
            <div className="space-y-2">
              <span className={`${menuButtonSpan} rotate-45 translate-y-2.5`}></span>
              <span className={`${menuButtonSpan} opacity-0`}></span>
              <span className={`${menuButtonSpan} -rotate-45 -translate-y-2.5`}></span>
            </div>
          </button>
        )}

        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 font-cinzel text-xl lg:text-sm tracking-wider text-center lg:text-left mt-8 lg:mt-0 relative z-10">
          <Link to="/" onClick={() => handleLinkClick("/", "home")} className={`${navLinkBase} ${isActive('/') ? navLinkActive : navLinkInactive}`}>INICIO</Link>
          <Link to="/services" onClick={() => handleLinkClick("/services", undefined, "#services")} className={`${navLinkBase} ${isActive('/services') ? navLinkActive : navLinkInactive}`}>SERVICIOS & CURSOS</Link>
          <Link to="/gallery" onClick={() => handleLinkClick("/gallery", undefined, "#gallery")} className={`${navLinkBase} ${isActive('/gallery') ? navLinkActive : navLinkInactive}`}>GALERIA</Link>
          <Link to="/ugc" onClick={() => handleLinkClick("/ugc", undefined, "#ugc")} className={`${navLinkBase} ${isActive('/ugc') ? navLinkActive : navLinkInactive}`}>UGC</Link>
          <Link to="/store" onClick={() => handleLinkClick("/store", "store")} className={`${navLinkBase} ${isActive('/store') ? navLinkActive : navLinkInactive}`}>TIENDA</Link>
          <Link to="/about" onClick={() => handleLinkClick("/about", "about")} className={`${navLinkBase} ${isActive('/about') ? navLinkActive : navLinkInactive}`}>ACERCA DE</Link>
          <Link to="/contact" onClick={() => handleLinkClick("/contact", "contact")} className={`${navLinkBase} ${isActive('/contact') ? navLinkActive : navLinkInactive}`}>CONTACTO</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;