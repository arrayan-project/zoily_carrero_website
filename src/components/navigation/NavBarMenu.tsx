// src/components/navigation/NavBarMenu.tsx
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

// Prefetch for independent pages
const preloadServices = () => import('../../pages/Services');
const preloadGallery  = () => import('../../pages/Gallery');
const preloadUGC      = () => import('../../pages/UGC');
const preloadStorePage= () => import('../../pages/Store');

// Prefetch for landing sections on mobile
const preloadAboutSection   = () => import('../home/AboutSection');
const preloadContactSection = () => import('../home/ContactSection');

export default function NavBarMenu({
  className,
  onSmoothScroll,
  isMobileView,
  isInternalScroll,
  isNavigating,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = async (
    to: string,
    sectionId?: string,
    hash?: string
  ) => {
    setIsMenuOpen(false);
    isInternalScroll.current = false;

    if (isMobileView) {
      // Mobile: superlanding sections
      if (sectionId === 'about' || sectionId === 'contact') {
        isNavigating.current = true;
        if (sectionId === 'about')   await preloadAboutSection();
        if (sectionId === 'contact') await preloadContactSection();
        if (location.pathname === '/home' || location.pathname === '/') {
          onSmoothScroll?.(sectionId);
        } else {
          sessionStorage.setItem('scrollToSection', sectionId);
          navigate('/home');
        }
        return;
      }
      // Independent mobile routes
      const target = hash ? `${to}${hash}` : to;
      navigate(target);
      return;
    }

    // Desktop: independent pages
    isNavigating.current = true;
    if (to === '/store') {
      navigate('/store');
    } else if (to === '/about') {
      navigate('/about');
    } else if (to === '/contact') {
      navigate('/contact');
    } else if (hash) {
      navigate(`${to}${hash}`);
    } else {
      navigate(to);
    }
  };

  const isActive = (path: string, sectionId?: string) => {
    if (isMobileView && sectionId) {
      return location.hash === `#${sectionId}` && (location.pathname === '/home' || location.pathname === '/');
    }
    return location.pathname === path;
  };

  const navLinkBase    = 'nav-link block lg:inline-block px-4 py-2 hover:text-pink-500 transition-colors duration-300 text-sm';
  const navLinkActive  = 'text-pink-500 underline';
  const navLinkInactive= theme === 'dark' ? 'text-white' : 'text-gray-800';
  const menuSpan       = 'block w-8 h-0.5 bg-current transition-transform duration-300';

  const items = [
    { label: 'INICIO',     path: '/home'                },
    { label: 'SERVICIOS',  path: '/services', prefetch: preloadServices },
    { label: 'GALERÍA',    path: '/gallery',  prefetch: preloadGallery },
    { label: 'UGC',        path: '/ugc',      prefetch: preloadUGC },
    { label: 'TIENDA',     path: '/store',    prefetch: preloadStorePage },
    { label: 'ACERCA DE',  path: '/about',    section: 'about' },
    { label: 'CONTACTO',   path: '/contact',  section: 'contact' },
  ];

  return (
    <nav
      className={`${className} z-40 w-full fixed flex items-center justify-end lg:justify-center min-h-[64px] transition-all duration-300 ${
        isMenuOpen
          ? ''
          : isScrolled
            ? 'bg-white/30 backdrop-blur-sm dark:bg-gray-800/30'
            : 'bg-transparent'
      }`}
    >
      {/* Mobile toggle button */}
      <div className="lg:hidden absolute top-0 right-0 p-4 h-16 flex items-center">
        <button
          onClick={() => setIsMenuOpen(o => !o)}
          className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} p-2`}
          aria-label="Menú móvil"
        >
          <div className="space-y-2">
            <span className={`${menuSpan} ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`${menuSpan} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`${menuSpan} ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menu items container */}
      <div
        className={`${
          isMenuOpen
            ? `fixed inset-0 bg-opacity-90 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex flex-col items-center justify-center min-h-screen`
            : 'hidden'
        } lg:flex lg:relative lg:inset-auto lg:bg-transparent lg:min-h-0 lg:flex-row lg:items-center lg:py-4`}
      >
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} absolute top-4 right-4 p-2`}
            aria-label="Cerrar menú"
          >
            <div className="space-y-2">
              <span className={`${menuSpan} rotate-45 translate-y-2.5`}></span>
              <span className={`${menuSpan} opacity-0`}></span>
              <span className={`${menuSpan} -rotate-45 -translate-y-2.5`}></span>
            </div>
          </button>
        )}

        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 font-cinzel text-xl lg:text-sm tracking-wider text-center lg:text-left mt-8 lg:mt-0">
          {items.map(item => (
            item.prefetch ? (
              <Link
                key={item.label}
                to={item.path}
                onMouseEnter={item.prefetch}
                onClick={() => handleLinkClick(item.path, item.section)}
                className={`${navLinkBase} ${isActive(item.path, item.section) ? navLinkActive : navLinkInactive}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.path, item.section)}
                className={`${navLinkBase} ${isActive(item.path, item.section) ? navLinkActive : navLinkInactive}`}
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}
