// Updated src/components/navigation/NavBarMenu.tsx
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

// Preload for independent pages
const preloadServices = () => import("../../pages/Services");
const preloadGallery  = () => import("../../pages/Gallery");
const preloadUGC      = () => import("../../pages/UGC");

// Preload for landing sections on mobile
const preloadStoreSection   = () => import("../../pages/Store");
const preloadAboutSection   = () => import("../../pages/About");
const preloadContactSection = () => import("../../pages/Contact");

const Navigation: React.FC<NavigationProps> = ({ className, onSmoothScroll, isMobileView, isInternalScroll, isNavigating }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;
  const navLinkBase = `nav-link block lg:inline-block px-4 py-2 hover:text-pink-500 transition-colors duration-300 text-sm md:text-sm`;
  const navLinkActive = `text-pink-500`;
  const navLinkInactive = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonBase = `lg:hidden p-2 hover:text-pink-500 transition-colors duration-300 z-50`;
  const menuButtonColor = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonSpan = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  const handleLinkClick = async (to: string, sectionId?: string, hash?: string) => {
    isInternalScroll.current = false;
    setIsMenuOpen(false);

    if (isMobileView) {
      const isLandingSection = ["/", "/store", "/about", "/contact"].includes(to);
      const isAlreadyInHome = location.pathname === "/";

      if (isLandingSection && sectionId) {
        isNavigating.current = true;

        // 1) Preload the landing section chunk
        if (sectionId === 'store')   await preloadStoreSection();
        if (sectionId === 'about')   await preloadAboutSection();
        if (sectionId === 'contact') await preloadContactSection();

        if (isAlreadyInHome) {
          onSmoothScroll?.(sectionId);
        } else {
          // 2) Save and navigate; MainApp effect handles the smooth scroll
          sessionStorage.setItem("scrollToSection", sectionId);
          navigate("/");
        }
        return;
      }

      // Independent routes (courses, gallery, UGC)
      if (hash) {
        navigate(`${to}${hash}`);
      } else {
        navigate(to);
      }
      return;
    }

    // Desktop behavior
    isNavigating.current = true;
    if (to === "/" && sectionId) {
      navigate("/");
      setTimeout(() => onSmoothScroll?.(sectionId), 100);
    } else {
      navigate(to);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const setupScrollListener = () => window.addEventListener('scroll', handleScroll);
    if ('requestIdleCallback' in window) requestIdleCallback(setupScrollListener);
    else setTimeout(setupScrollListener, 1);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${className} z-50 w-full fixed ${isScrolled && !isMenuOpen && isMobileView ? 'backdrop-blur-sm bg-white/5' : ''}`}>    
      <div className='relative w-full flex justify-end lg:justify-center'>
        <div className={`lg:hidden w-full h-16 top-0 right-0 p-2 ${isScrolled ? 'backdrop-blur-sm bg-white/30 dark:bg-gray-800/30' : ''} transition-all duration-300`}>
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

      <div className={`${isMenuOpen ? `fixed inset-0 bg-opacity-90 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex flex-col items-center justify-center min-h-screen` : 'hidden'} lg:block lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 lg:z-auto lg:flex lg:flex-row lg:items-center lg:justify-center lg:py-4`}>
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
          <button onClick={() => handleLinkClick("/", "home")} className={`${navLinkBase} ${isActive('/') ? navLinkActive : navLinkInactive}`}>INICIO</button>

          <Link
            to="/services"
            onClick={() => handleLinkClick("/services", undefined, "#services")}
            onMouseEnter={preloadServices}
            className={`${navLinkBase} ${isActive('/services') ? navLinkActive : navLinkInactive}`}
          >
            SERVICIOS & CURSOS
          </Link>

          <Link
            to="/gallery"
            onClick={() => handleLinkClick("/gallery", undefined, "#gallery")}
            onMouseEnter={preloadGallery}
            className={`${navLinkBase} ${isActive('/gallery') ? navLinkActive : navLinkInactive}`}
          >
            GALERIA
          </Link>

          <Link
            to="/ugc"
            onClick={() => handleLinkClick("/ugc", undefined, "#ugc")}
            onMouseEnter={preloadUGC}
            className={`${navLinkBase} ${isActive('/ugc') ? navLinkActive : navLinkInactive}`}
          >
            UGC
          </Link>

          <button onClick={() => handleLinkClick("/store", "store")} className={`${navLinkBase} ${isActive('/store') ? navLinkActive : navLinkInactive}`}>TIENDA</button>
          <button onClick={() => handleLinkClick("/about", "about")} className={`${navLinkBase} ${isActive('/about') ? navLinkActive : navLinkInactive}`}>ACERCA DE</button>
          <button onClick={() => handleLinkClick("/contact", "contact")} className={`${navLinkBase} ${isActive('/contact') ? navLinkActive : navLinkInactive}`}>CONTACTO</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;