// src/components/context/themeContext.tsx
import React, { createContext, useState, useEffect } from "react";

// Define un tipo para los temas
type Theme = "light" | "dark";

// Define una interfaz para los colores del tema
interface ThemeColors {
  background: string;
  text: string;
  bannerBackground: string;
  bannerTitle: string;
  bannerImageOverlay: string;
  section: string;
  secondaryText: string;
  accent: string;
  hover: string;
  border: string;
}

// Interfaz del contexto
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? (storedTheme as Theme) : "light";
    } catch (error) {
      console.error("Error al acceder a localStorage:", error);
      return "light";
    }
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [theme]);

  // 🎨 Tus paletas personalizadas
  const themeColors: Record<Theme, ThemeColors> = {
    light: {
      background: "#FFFFFF",           // Fondo blanco puro
      text: "#C7A49E",                 // Texto principal elegante
      section: "#FFE4E1",              // Fondo de secciones suaves
      secondaryText: "#E4C9B8",        // Texto secundario/detalles
      accent: "#C08081",               // Botones y énfasis
      hover: "#F5DFDF",                // Hover o resaltes suaves
      border: "#E0D2C7",               // Bordes y sombras sutiles
      bannerBackground: "#FFFFFF",     // Fondo del banner
      bannerTitle: "#C08081",          // Color destacado para títulos del banner
      bannerImageOverlay: "rgba(31, 41, 55, 0.4)", // Suavidad sobre imágenes
    },
    dark: {
      background: "#091217",           // Fondo oscuro elegante #2D3748 #2B2B2B
      text: "#E0D2C7",                 // Texto principal claro y cálido
      section: "#2B2A2A",              // Fondo de secciones
      secondaryText: "#C7A49E",        // Texto secundario rosado
      accent: "#C08081",               // Botones y acentos
      hover: "#E4C9B8",                // Hover claro y elegante
      border: "#3A3A3A",               // Bordes sutiles
      bannerBackground: "#2B2A2A",     // Fondo banner en oscuro
      bannerTitle: "#E0D2C7",          // Título en el banner
      bannerImageOverlay: "rgba(0, 0, 0, 0.4)", // Superposición en imágenes
    },
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    colors: themeColors[theme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
