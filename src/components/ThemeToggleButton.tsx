// src/components/ThemeToggleButton.tsx
import { useState, useEffect } from 'react';
import { useTheme } from '../components/context/useTheme';
import { WiMoonAltWaningCrescent4, WiDaySunny } from 'react-icons/wi';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Estado para el ancho de pantalla

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth); // Función para actualizar el estado
    window.addEventListener('resize', handleResize); // Escucha el evento resize
    return () => window.removeEventListener('resize', handleResize); // Limpieza del evento
  }, []);

    return (
      <button
        onClick={toggleTheme}
        className={`fixed top-4 left-4 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-300 z-60 ${
          theme === 'light' ? 'bg-amber-200' : 'bg-gray-600'
        } hover:bg-rose-200 `} // Agregamos el fondo y el hover
        aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      >
        {theme === 'light' ? (
          <WiDaySunny size={screenWidth < 768 ? 24 : 32} className="text-amber-700 relative z-10" /> // Sol: 24px en móviles, 32px en tablets y desktop
        ) : (
          <WiMoonAltWaningCrescent4 size={screenWidth < 768 ? 24 : 32} className="text-rose-400 relative z-10" /> // Luna: 24px en móviles, 32px en tablets y desktop
        )}
      </button>
    );
};
export default ThemeToggleButton;