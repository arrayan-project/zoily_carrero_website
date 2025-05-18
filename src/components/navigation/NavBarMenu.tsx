// src/components/navigation/NavBarMenu.tsx
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook';

interface NavigationProps {
  className?: string;
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

export default function NavBarMenu({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const baseLink = 'px-5 py-2 text-base font-cinzel transition-colors';
  const activeLink= theme === 'dark' ? 'text-white underline' : 'text-black underline';
  const inactiveLink = theme === 'dark' ? 'text-white' : 'text-black';
  const menuButtonColor = theme === 'dark' ? 'text-white' : 'text-black';
  const menuButtonSpanBase = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  return (
    <nav className={`${className} fixed w-full z-40 flex items-center justify-end min-h-[64px] px-24
      ${scrolled ? 'backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(o => !o)}
          className={`p-4 absolute top-1/2 right-4 -translate-y-1/2 z-50 hover:text-pink-500 transition-colors duration-300 ${menuButtonColor}`}
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
            className={`lg:hidden absolute top-4 right-4 p-4 z-50 hover:text-pink-500 transition-colors duration-300 ${menuButtonColor}`}
            aria-label="Cerrar menú"
          >
          </button>
        )}
        <div className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-2 mt-8 lg:mt-0">
          {navItems.map(({ label, path, prefetch }) => (
            <NavLink
              key={label}
              to={path}
              onMouseEnter={prefetch}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink} ${isOpen ? 'text-base' : 'lg:text-base'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
