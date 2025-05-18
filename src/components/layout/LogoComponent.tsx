// src/components/layout/LogoComponent.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/useThemeHook';
import images from '../../assets/images'; // Asegúrate que la ruta sea correcta

interface LogoComponentProps {
  className?: string;
    variant?: 'light' | 'dark';

}

const LogoComponent: React.FC<LogoComponentProps> = ({ className, variant }) => {
  const { theme } = useTheme();

  /// Selecciona el logo
  let logoImageObject;
  if (variant === 'light') {
    logoImageObject = images.logowhite; // Forzar logo claro (para fondos oscuros)
  } else if (variant === 'dark') {
    logoImageObject = images.logoblack; // Forzar logo oscuro (para fondos claros)
  } else {
    // Comportamiento por defecto: basado en el tema actual
    logoImageObject = theme === 'dark' ? images.logowhite : images.logoblack;
  }

  return (
    <Link
      to="/"
      className={`block ${className || ''}`} // block para que tome dimensiones
      aria-label="Ir a la página de inicio"
    >
      {/* Tamaños responsivos para el logo, ajusta según necesites */}
      <div
        className={`relative 
                        w-[70px] h-[70px]  /* Tamaño base aumentado */
                        sm:w-[60px] sm:h-[60px] /* Tamaño para 'sm' */
                        md:w-[100px] md:h-[100px] /* Tamaño para 'md' aumentado aún más */
                        transition-all duration-300`}
      >
        <picture>
          <source srcSet={logoImageObject.avif} type="image/avif" />
          <source srcSet={logoImageObject.webp} type="image/webp" />
          <img
            src={logoImageObject.webp} // Fallback a WebP
            alt="Zoily Carrero Logo"
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy" // Añadido para carga diferida
            onError={(e) => {
              // Opcional: Manejar error si la imagen no carga,
              // por ejemplo, mostrando un placeholder o un texto.
              console.error("Error al cargar el logo:", logoImageObject.webp);
              // e.currentTarget.src = 'ruta/a/un/logo/placeholder.png'; // Podrías tener un placeholder genérico
            }}
          />
        </picture>
      </div>
    </Link>
  );
};

export default LogoComponent;