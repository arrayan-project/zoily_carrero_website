// HomeButton.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


interface HomeButtonProps {
  isMobileView: boolean;
  onSmoothScroll?: (sectionId: string) => void;
  to?: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ isMobileView, onSmoothScroll, to, className, children, onClick, ariaLabel }) => {
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    try {
      // Si existe la funcion onClick, se ejecuta primero
      if (onClick) {
        onClick();
      }
      // Si existe la funcion onSmoothScroll y la prop to, se ejecuta
      if (onSmoothScroll && to) {
        onSmoothScroll(to);
      }
    } catch (err) {
      const errorMessage = "Error al ejecutar la acción del botón.";
      setError(errorMessage);
      console.error("Error en HomeButton:", errorMessage, err);
    }
  };

  if (error) {
    console.error("Error en HomeButton:", error); // Registra el error en la consola
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error al intentar ejecutar la acción del botón.</p>
      </div>
    );
  }

  if (isMobileView) {
    return (
      <button
        onClick={handleClick}
        className={`home-button ${className}`}
        aria-label={ariaLabel}
        type="button" // Añade type="button" para accesibilidad
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link to={to || ""} className={`home-button ${className}`} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
};

export default HomeButton;
