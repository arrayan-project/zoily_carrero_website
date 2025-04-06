// src/components/buttons/HomeButton.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeButtonProps {
  isMobileView: boolean;
  onSmoothScroll?: (sectionId: string) => void;
  to?: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  sectionId?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ isMobileView, onSmoothScroll, to, className, children, onClick, ariaLabel }) => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    try {
      if (onClick) {
        onClick();
      }

      if (to) {
        if (isMobileView && (to === "/services" || to === "/gallery" || to === "/ugc")) {
          navigate(to);
        } else if (isMobileView && to === "/contact") {
          onSmoothScroll?.("contact"); // Aseguramos que el sectionId sea "contact"
        } else {
          navigate(to);
        }
      }
    } catch (err) {
      const errorMessage = "Error al ejecutar la acción del botón.";
      setError(errorMessage);
      console.error("Error en HomeButton:", errorMessage, err);
    }
  };

  if (error) {
    console.error("Error en HomeButton:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error al intentar ejecutar la acción del botón.</p>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`home-button ${className}`}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
};

export default HomeButton;
