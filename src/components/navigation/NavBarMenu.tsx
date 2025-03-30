// NavBarMenu.tsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook'; // Asegúrate que la ruta sea correcta

interface NavigationProps {
  className?: string;
  onSmoothScroll?: (sectionId: string) => void; // Prop para smoothScroll desde el padre (Home)
  isMobileView: boolean; // Prop para saber si estamos en vista movil
}

const Navigation: React.FC<NavigationProps> = ({ className, onSmoothScroll, isMobileView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  // Variables para clases (sin cambios)
  const navLinkBase = `nav-link block lg:inline-block`;
  const navLinkActive = `text-pink-500`;
  const navLinkInactive = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonBase = `lg:hidden absolute top-4 right-4 p-2 hover:text-pink-500 transition-colors duration-300 z-50`;
  const menuButtonColor = `${theme === 'dark' ? 'text-white' : 'text-gray-800'}`;
  const menuButtonSpan = `block w-8 h-0.5 bg-current transition-transform duration-300`;

  const handleLinkClick = (to: string, sectionId?: string) => {
    setIsMenuOpen(false); // Siempre cerrar el menú al hacer clic

    if (isMobileView) {
      // 1. Rutas que NAVEGAN DIRECTAMENTE a otra página en MÓVIL
      if (to === "/services" || to === "/gallery" || to === "/ugc") {
        navigate(to);
      }
      // 2. Rutas que van a HOME y hacen SCROLL en MÓVIL (Store, About, Contact)
      //    También incluye el link "INICIO" si ya estamos en otra página.
      else if (sectionId && (to === "/store" || to === "/about" || to === "/contact" || to === "/")) {
        // Si YA estamos en la página de inicio, solo hacemos scroll
        if (location.pathname === "/") {
            // Solo necesitamos llamar a la función de scroll si onSmoothScroll está definido
            onSmoothScroll?.(sectionId);
        } else {
            // Si NO estamos en la página de inicio, navegamos a "/" PRIMERO
            navigate("/");
            // Esperamos un breve momento para que la navegación se complete y Home se renderice
            // antes de intentar hacer scroll.
            setTimeout(() => {
               // Llamamos a la función de scroll pasada por props
               onSmoothScroll?.(sectionId);
            }, 100); // Puedes ajustar este tiempo si es necesario
        }
      }
    } else {
      // Comportamiento en VISTA DESKTOP
      // Si es un link a una sección de la Home (tiene sectionId) y ya estamos en Home, hacemos scroll
      if (sectionId && location.pathname === "/") {
           onSmoothScroll?.(sectionId);
      }
      // En cualquier otro caso (navegar a otra página, o ir a Home desde otra página), simplemente navegamos
      else {
          navigate(to);
          // Si la navegación es a "/", podrías opcionalmente hacer scroll a 'home' o al top después de navegar
          if (to === "/" && location.pathname !== "/") {
              setTimeout(() => {
                  // Opción 1: Scroll a la sección home si existe
                  onSmoothScroll?.(sectionId || 'home');
                  // Opción 2: Scroll al inicio de la página
                  // window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
          }
      }
    }
  };

  // --- Mejoras Menores en JSX para el Menú Móvil ---
  // Se ajustan clases para centrar contenido, mejorar espaciado y asegurar visibilidad/funcionalidad del botón de cierre.

  return (
    <nav className={`${className} z-40`}> {/* Asegurar z-index consistente */}
      {/* Mobile Menu Button (Hamburguesa) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`${menuButtonBase} ${menuButtonColor} z-50`} // z-index alto para estar sobre el menú abierto
        aria-expanded={isMenuOpen}
        aria-label="Abrir menú de navegación"
      >
        <div className="space-y-2">
           <span className={`${menuButtonSpan} ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
           <span className={`${menuButtonSpan} transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
           <span className={`${menuButtonSpan} ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
         </div>
      </button>

      {/* Menu Content (Contenedor Principal) */}
      <div
        className={`
          ${isMenuOpen
            ? `fixed inset-0 bg-opacity-95 z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex flex-col items-center justify-center` // Pantalla completa, centrado
            : 'hidden'}
          lg:block lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 lg:z-auto lg:flex lg:flex-row lg:items-center lg:justify-center` // Estilos Desktop
        }
      >
        {/* Botón de cierre (X) - visible solo en menú móvil abierto */}
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            // Reutiliza clases base pero quita lg:hidden y asegura z-index
            className={`absolute top-4 right-4 p-2 hover:text-pink-500 transition-colors duration-300 z-50 ${menuButtonColor}`}
            aria-label="Cerrar menú de navegación"
          >
            <div className="space-y-2">
               <span className={`${menuButtonSpan} rotate-45 translate-y-2.5`}></span>
               <span className={`${menuButtonSpan} opacity-0`}></span> {/* Oculto para formar la X */}
               <span className={`${menuButtonSpan} -rotate-45 -translate-y-2.5`}></span>
             </div>
          </button>
        )}

        {/* Links Container */}
        <div
          className={`
            flex flex-col lg:flex-row lg:justify-center lg:items-end
            space-y-6 lg:space-y-0 lg:space-x-4  // Más espacio vertical en móvil
            font-montserrat text-xl lg:text-sm tracking-wider // Texto más grande en móvil
            text-center lg:text-left // Centrar texto en móvil
            mt-8 lg:mt-0 // Margen superior en móvil para no solapar botones
          `}
        >
          {/* Links individuales - Asegúrate que los sectionId coincidan con los IDs de tus secciones en Home */}
          <Link to="/" onClick={() => handleLinkClick("/", "home")} className={`${navLinkBase} ${isActive('/') ? navLinkActive : navLinkInactive}`}>
            INICIO
          </Link>
          <Link to="/services" onClick={() => handleLinkClick("/services")} className={`${navLinkBase} ${isActive('/services') ? navLinkActive : navLinkInactive}`}>
            SERVICIOS & CURSOS
          </Link>
          <Link to="/gallery" onClick={() => handleLinkClick("/gallery")} className={`${navLinkBase} ${isActive('/gallery') ? navLinkActive : navLinkInactive}`}>
            GALERIA
          </Link>
          <Link to="/ugc" onClick={() => handleLinkClick("/ugc")} className={`${navLinkBase} ${isActive('/ugc') ? navLinkActive : navLinkInactive}`}>
            UGC
          </Link>
          {/* Links que deben hacer scroll en Home */}
          <Link to="/store" onClick={() => handleLinkClick("/store", "store")} className={`${navLinkBase} ${isActive('/store') ? navLinkActive : navLinkInactive}`}>
            TIENDA
          </Link>
          <Link to="/about" onClick={() => handleLinkClick("/about", "about")} className={`${navLinkBase} ${isActive('/about') ? navLinkActive : navLinkInactive}`}>
            ACERCA DE
          </Link>
          <Link to="/contact" onClick={() => handleLinkClick("/contact", "contact")} className={`${navLinkBase} ${isActive('/contact') ? navLinkActive : navLinkInactive}`}>
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
