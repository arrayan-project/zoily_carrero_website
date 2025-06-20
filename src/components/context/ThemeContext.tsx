/**
 * 🌸 PALETA ROSA DORADO - Elegancia Moderna y Sofisticación Cálida
 */
import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from "react";

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

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const themeColors: Record<Theme, ThemeColors> = {
  light: {
    // Fondo principal - Blanco cálido muy sutil, base limpia y lujosa
    background: "#FDFCFB", // Un blanco muy ligeramente cálido
    // Texto principal - Carbón profundo, para legibilidad y sofisticación
    text: "#2F2F2F", // Un gris muy oscuro, casi negro pero más suave
    // Secciones - Un beige/gris muy claro, para separación sutil
    section: "#F5F3F1", // Un tono ligeramente más oscuro que el fondo
    // Texto secundario - Gris medio, para información menos prominente
    secondaryText: "#7A7A7A",
    // Color de acento - Dorado apagado/Bronce, para un toque de lujo discreto
    accent: "#B08D57",
    // Hover - Un gris muy claro o una versión más clara del color base del elemento
    hover: "#EAE8E6", // Un tono más claro que 'section'
    // Bordes - Un gris muy suave, casi imperceptible
    border: "#E0DEDC",
    // Banner background - Overlay del color de fondo principal con transparencia
    bannerBackground: "rgba(253, 252, 251, 0.97)", // Muy sutil
    // Título del banner - Puede usar el color de acento o el texto principal
    bannerTitle: "#B08D57", // Acento dorado
    // Overlay de imagen - Un gris oscuro translúcido para contraste
    bannerImageOverlay: "rgba(47, 47, 47, 0.4)", // Basado en 'text'
  },
  
  dark: {
    // Fondo principal - Carbón muy oscuro, base elegante y moderna
    background: "#1A1A1A",
    // Texto principal - Blanco hueso/Gris muy claro, para contraste suave
    text: "#E0E0E0",
    // Secciones - Un gris ligeramente más claro que el fondo
    section: "#242424",
    // Texto secundario - Gris claro/medio, para jerarquía visual
    secondaryText: "#A0A0A0",
    // Color de acento - Un dorado más brillante pero aún sofisticado para destacar en oscuro
    accent: "#C8A770", // Un poco más brillante que el light accent
    // Hover - Un gris un poco más claro que el color base del elemento
    hover: "#333333", // Un tono más claro que 'section'
    // Bordes - Un gris oscuro sutil
    border: "#383838",
    // Banner background - Overlay del color de fondo principal con transparencia
    bannerBackground: "rgba(26, 26, 26, 0.97)", // Muy sutil
    // Título del banner - Puede usar el color de acento o el texto principal
    bannerTitle: "#C8A770", // Acento dorado para dark mode
    // Overlay de imagen - Negro translúcido para profundidad
    bannerImageOverlay: "rgba(0, 0, 0, 0.5)",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? "dark" : "light";
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    colors: themeColors[theme],
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return context;
};