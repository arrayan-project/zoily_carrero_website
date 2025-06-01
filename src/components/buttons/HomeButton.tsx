/**
 * Botón reutilizable para la página de inicio (Home).
 * Permite elegir entre estilos primario y secundario.
 *
 * @component
 * @param {HomeButtonProps} props - Props del botón de home.
 * @returns {JSX.Element}
 */
import React from 'react';
import { HOME_BUTTON_BASE_CLASS, HOME_BUTTON_PRIMARY_VARIANT_CLASS, HOME_BUTTON_SECONDARY_VARIANT_CLASS } from '../../constants/styles';

interface HomeButtonProps {
  onClick: () => void;
  primary?: boolean;
  children: React.ReactNode;
  className?: string; // Allow additional classes
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick, primary = false, children, className = "" }) => {
  return (
    <button
      type="button"
      aria-label="Boton de home"
      onClick={onClick}
      className={`${HOME_BUTTON_BASE_CLASS} ${primary ? HOME_BUTTON_PRIMARY_VARIANT_CLASS : HOME_BUTTON_SECONDARY_VARIANT_CLASS} ${className}`}
    >
      {children}
    </button>
  );
};

export default HomeButton;
