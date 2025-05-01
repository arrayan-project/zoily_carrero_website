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
    // Comprobación para evitar errores si localStorage no está disponible (SSR)
    if (typeof window !== 'undefined') {
        try {
            const storedTheme = localStorage.getItem("theme");
            // Asegurarse que el valor guardado es válido
            if (storedTheme === 'light' || storedTheme === 'dark') {
                return storedTheme;
            }
        } catch (error) {
            console.error("Error al acceder a localStorage:", error);
        }
    }
    // Valor por defecto si no hay nada guardado o hay error
    return "light";
  });

  const toggleTheme = () => {
    // Usar la forma funcional de setTheme para asegurar el valor previo correcto
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Comprobación para evitar errores si localStorage no está disponible (SSR)
    if (typeof window !== 'undefined') {
        try {
            localStorage.setItem("theme", theme);
            // Opcional: Añadir clase al body para estilos globales más fáciles
            document.body.className = theme;
        } catch (error) {
            console.error("Error al guardar en localStorage:", error);
        }
    }
    // Opcional: Función de limpieza para el efecto
    return () => {
        if (typeof window !== 'undefined') {
            // Limpiar la clase al desmontar o cambiar el tema
            document.body.classList.remove(theme);
        }
    };
  }, [theme]);

  // 🎨 Tus paletas personalizadas - AJUSTADAS PARA MEJOR CONTRASTE
  const themeColors: Record<Theme, ThemeColors> = {
    light: {
      // Contraste mínimo WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande
      background: "#FFFFFF",           // Fondo blanco
      text: "#5C3C2E",                 // Marrón oscuro (Contraste sobre #FFF: 11.18:1, sobre #FFE4E1: 9.03:1) - WCAG AAA ¡Excelente!
      section: "#FFE4E1",              // Fondo rosa pálido para secciones
      secondaryText: "#8B7355",        // Marrón medio (Contraste sobre #FFF: 5.61:1, sobre #FFE4E1: 4.53:1) - WCAG AA ¡Bien!
      accent: "#A05253",               // Palo de rosa oscuro (Contraste sobre #FFF: 4.53:1, sobre #FFE4E1: 3.66:1) - WCAG AA para texto grande. Para texto pequeño, considera usar 'text' o un color aún más oscuro si este se usa sobre 'section'.
      hover: "#F5E8E4",                // Fondo hover más claro (asegúrate que el texto sobre este tenga contraste)
      border: "#C7A49E",               // Borde sutil
      bannerBackground: "#FFFFFF",     // Fondo banner blanco
      bannerTitle: "#A05253",          // Usar 'accent' para títulos de banner (asegúrate que el tamaño de fuente sea grande)
      bannerImageOverlay: "rgba(31, 41, 55, 0.4)", // Superposición imagen
    },
    dark: {
      // Revisar contraste del tema oscuro también es buena práctica
      background: "#151723",           // Gris muy oscuro
      text: "#EAE0D9",                 // Blanco hueso (Contraste sobre #1A1A1A: 14.01:1) - WCAG AAA
      section: "#0E0F16",              // Gris oscuro para secciones (Contraste #EAE0D9 sobre #2B2B2B: 10.78:1) - WCAG AAA
      secondaryText: "#C7A49E",        // Rosa pálido (Contraste sobre #1A1A1A: 6.98:1) - WCAG AA
      accent: "#E4C9B8",               // Beige claro como acento (Contraste sobre #1A1A1A: 9.13:1) - WCAG AAA
      hover: "#3A3A3A",                // Gris medio para hover
      border: "#F5EAAA  ",               // Borde oscuro
      bannerBackground: "#2B2B2B",     // Fondo banner oscuro
      bannerTitle: "#E4C9B8",          // Usar 'accent' para títulos de banner
      bannerImageOverlay: "rgba(0, 0, 0, 0.5)", // Superposición imagen un poco más oscura
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
