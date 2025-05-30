/**
 * Componente que permite cambiar el tema entre claro y oscuro.
 * Admite clase personalizada y puede ser posicionado de forma fija.
 *
 * @component
 * @param {ThemeToggleButtonProps} props - Props del botón de cambio de tema.
 * @returns {JSX.Element}
 */

import { useState } from 'react';
import { useTheme } from '../context/themeContext';
import { Sun, Moon } from "../../assets/icons";
import useWindowSize from '../../hooks/useWindowSize';


interface ThemeToggleButtonProps {
  className?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const [error] = useState<string | null>(null); // Estado para el error
  const { windowWidth } = useWindowSize();


  // Variables para las clases condicionales
  const buttonBase = `relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-300 z-[9999] hover:bg-rose-200`;
  const buttonTheme = theme === 'light' ? 'bg-amber-200' : 'bg-gray-600';
  const iconColor = theme === 'light' ? 'text-amber-700' : 'text-rose-400';
  const iconSize = windowWidth < 768 ? 24 : 32;

  if (error) {
    console.error("Error en ThemeToggleButton:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado en el botón de cambio de tema.</p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${className} ${buttonBase} ${buttonTheme}`}
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      {theme === 'light' ? (
        <Sun size={iconSize} className={iconColor} />
      ) : (
        <Moon size={iconSize} className={iconColor} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
