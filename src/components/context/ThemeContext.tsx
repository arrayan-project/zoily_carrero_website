// src/components/context/ThemeContext.tsx
import React, { createContext, useState, useEffect } from 'react';

// Define una interfaz para los colores del tema
interface ThemeColors {
  background: string;
  text: string;
  bannerBackground: string; // Color específico para el fondo del banner
  bannerTitle: string;    // Color específico para el título del banner
  bannerImageOverlayLight: string; // **NUEVO: Color de superposición para imágenes en tema claro**
  bannerImageOverlayDark: string;  // **NUEVO: Color de superposición para imágenes en tema oscuro**
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? (storedTheme as 'light' | 'dark') : 'light';
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // **DEFINICIÓN DE COLORES DEL TEMA - AÑADIDO**
  const themeColors: { light: ThemeColors; dark: ThemeColors } = {
    light: {
        background: '#1F2937', // Gris claro para fondo general modo claro
        text: '#333',           // Gris oscuro para texto general modo claro
        bannerBackground: '#FFFFFF', // Gris muy claro para fondo de banner modo claro (ejemplo)
        bannerTitle: '#000',      // Negro para título de banner modo claro (ejemplo)
        bannerImageOverlayLight: 'rgba(31, 41, 55, 0.6)',
        bannerImageOverlayDark: 'rgba(0, 0, 0, 0)',
    },
    dark: {
        background: '#fff',     // Gris oscuro para fondo general modo oscuro
        text: '#fff',           // Blanco para texto general modo oscuro
        bannerBackground: '#1F2937', // Gris más oscuro para fondo de banner modo oscuro (ejemplo)
        bannerTitle: '#fff',       // Blanco para título de banner modo oscuro (ejemplo)
        bannerImageOverlayDark: 'rgba(31, 41, 55, 0.6)',
        bannerImageOverlayLight: 'rgba(255, 255, 255, 0)',
    },
};

const value: ThemeContextType = {
  theme,
  toggleTheme,
  colors: themeColors[theme], // **¡CORREGIDO! Hemos añadido la propiedad 'colors' y le asignamos 'themeColors[theme]'**
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;