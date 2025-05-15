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

  const baseLink = 'px-4 py-2 text-base font-cinzel transition-colors';
  const activeLink = 'text-amber-600 font-bold';
  const inactiveLink = theme === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <nav className={`${className} fixed w-full z-40 flex items-center justify-end min-h-[64px]
      ${scrolled ? 'bg-white/30 backdrop-blur-sm dark:bg-gray-800/30' : 'bg-transparent'}`}>
      
      {/* Toggle móvil */}
      <div className="lg:hidden p-4 absolute top-0 right-0">
        <button onClick={() => setIsOpen(o => !o)} aria-label="Menú">
          <span className={`block w-8 h-0.5 bg-current mb-1 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-8 h-0.5 bg-current mb-1 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-8 h-0.5 bg-current ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Ítems de navegación */}
      <div className={`${isOpen ? 'fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50' 
                                : 'hidden'} lg:flex lg:relative lg:bg-transparent lg:flex-row lg:items-center`}>
        {navItems.map(({ label, path, prefetch }) => (
          <NavLink
            key={label}
            to={path}
            onMouseEnter={prefetch}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
