/**
 * Contexto y provider para manejar el tema (claro/oscuro) y los colores asociados en la aplicación.
 * Permite alternar el tema y acceder a la paleta de colores desde cualquier componente.
 *
 * @module themeContext
 * @context
 * @returns {ThemeContextType} Provee el tema actual, función para alternar y los colores.
 */
import React, { createContext, useState, useEffect, useContext } from "react";

// Tipos para el tema y los colores
type Theme = "light" | "dark";

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
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
}

// Paletas de colores para cada tema
const themeColors: Record<Theme, ThemeColors> = {
  light: {
    background: "#FFFFFF",
    text: "#5C3C2E",
    section: "#FFE4E1",
    secondaryText: "#8B7355",
    accent: "#A05253",
    hover: "#F5E8E4",
    border: "#C7A49E",
    bannerBackground: "#FFFFFF",
    bannerTitle: "#A05253",
    bannerImageOverlay: "rgba(31, 41, 55, 0.4)",
  },
  dark: {
    background: "#151723",
    text: "#FFFFFF",
    section: "#0E0F16",
    secondaryText: "#C7A49E",
    accent: "#E4C9B8",
    hover: "#3A3A3A",
    border: "#F5EAAA",
    bannerBackground: "#2B2B2B",
    bannerTitle: "#E4C9B8",
    bannerImageOverlay: "rgba(0, 0, 0, 0.5)",
  },
};

// Crea el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider del contexto
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light" || storedTheme === "dark") {
          return storedTheme;
        }
      } catch (error) {
        console.error("Error al acceder a localStorage:", error);
      }
    }
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
      } catch (error) {
        console.error("Error al guardar en localStorage:", error);
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.classList.remove(theme);
      }
    };
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    colors: themeColors[theme],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Hook para usar el contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return context;
};