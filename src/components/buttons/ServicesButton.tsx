/**
 * Botón reutilizable para acciones relacionadas con servicios.
 *
 * @component
 * @param {ServicesButtonProps} props - Props del botón de servicios.
 * @returns {JSX.Element}
 */
import React from 'react';

interface ServicesButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const ServicesButton: React.FC<ServicesButtonProps> = ({ onClick, children, className, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default ServicesButton;
