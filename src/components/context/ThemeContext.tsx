/**
 * 🌸 PALETA ROSA DORADO - Elegancia Moderna y Sofisticación Cálida
 */
import React, { createContext, useState, useEffect, useContext } from "react";

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
    // Fondo principal - Blanco rosado muy suave, cálido y premium
    background: "#FFFBFC",
    
    // Texto principal - Carbón suave con matices cálidos
    text: "#2D2A2E",
    
    // Secciones - Rosa empolvado muy suave, elegante
    section: "#FDF2F8",
    
    // Texto secundario - Gris rosado, sofisticado y cálido
    secondaryText: "#78716C",
    
    // Color de acento - Rosa dorado, moderno y distintivo
    accent: "#E11D48",
    
    // Hover - Rosa muy claro para interacciones delicadas
    hover: "#FCE7F3",
    
    // Bordes - Rosa gris suave, delicado y refinado
    border: "#F3D4DA",
    
    // Banner background - Overlay rosa muy sutil
    bannerBackground: "rgba(253, 242, 248, 0.95)",
    
    // Título del banner - Rosa vibrante para impacto
    bannerTitle: "#E11D48",
    
    // Overlay de imagen - Gris cálido para contraste suave
    bannerImageOverlay: "rgba(45, 42, 46, 0.4)",
  },
  
  dark: {
    // Fondo principal - Gris muy oscuro con matices cálidos
    background: "#161618",
    
    // Texto principal - Blanco rosado suave para calidez
    text: "#FAF7F8",
    
    // Secciones - Gris oscuro con tinte rosado
    section: "#2A2A2C",
    
    // Texto secundario - Rosa suave, cálido en oscuro
    secondaryText: "#F9A8D4",
    
    // Color de acento - Rosa brillante, vibrante y moderno
    accent: "#F472B6",
    
    // Hover - Gris medio con tinte rosado
    hover: "#3F3F41",
    
    // Bordes - Gris rosado medio
    border: "#57534E",
    
    // Banner background - Overlay gris oscuro cálido
    bannerBackground: "rgba(22, 22, 24, 0.95)",
    
    // Título del banner - Rosa brillante
    bannerTitle: "#FBCFE8",
    
    // Overlay de imagen - Negro cálido con tinte rosado
    bannerImageOverlay: "rgba(22, 22, 24, 0.6)",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return context;
};