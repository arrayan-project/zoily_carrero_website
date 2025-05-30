/**
 * Botón reutilizable para la página de inicio (Home).
 * Permite elegir entre estilos primario y secundario.
 *
 * @component
 * @param {HomeButtonProps} props - Props del botón de home.
 * @returns {JSX.Element}
 */
import React from 'react';

interface HomeButtonProps {
  onClick: () => void;
  primary?: boolean;
  children: React.ReactNode;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick, primary = false, children }) => {
  const baseClasses = 'px-6 py-3 font-normal font-cinzel rounded shadow transition duration-200';
  const primaryClasses = 'bg-white/20 backdrop-blur-sm text-white hover:bg-gray-200/80 hover:backdrop-blur-sm';
  const secondaryClasses = 'bg-transparent text-white border border-white hover:bg-white hover:text-black';

  return (
    <button
      type="button"
      aria-label="Boton de home"
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {children}
    </button>
  );
};

export default HomeButton;
