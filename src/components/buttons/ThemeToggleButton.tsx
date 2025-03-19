/*
#### Responsabilidad ####
- Componente que permite cambiar el tema entre claro y oscuro.
- className: Se utiliza esta propiedad.
- fixed: Se utiliza para posicionar al boton.
*/

import { useState, useEffect } from 'react';
import { useTheme } from '../context/useThemeHook';
import { WiMoonAltWaningCrescent4, WiDaySunny } from 'react-icons/wi';

interface ThemeToggleButtonProps {
  className?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Estado para el ancho de pantalla
  const [error, setError] = useState<string | null>(null); // Estado para el error


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth); // Función para actualizar el estado
    window.addEventListener('resize', handleResize); // Escucha el evento resize
    return () => window.removeEventListener('resize', handleResize); // Limpieza del evento
  }, []);

  // Variables para las clases condicionales
  const buttonBase = `relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-300 z-[9999] hover:bg-rose-200`;
  const buttonTheme = theme === 'light' ? 'bg-amber-200' : 'bg-gray-600';
  const iconColor = theme === 'light' ? 'text-amber-700' : 'text-rose-400';
  const iconSize = screenWidth < 768 ? 24 : 32;

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
      onClick={toggleTheme}
      className={`${className} ${buttonBase} ${buttonTheme}`}
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      {theme === 'light' ? (
        <WiDaySunny size={iconSize} className={iconColor} />
      ) : (
        <WiMoonAltWaningCrescent4 size={iconSize} className={iconColor} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
