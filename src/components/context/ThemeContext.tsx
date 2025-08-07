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
  footerbackground: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
}

const themeColors: Record<Theme, ThemeColors> = {
  light: {
    // Fondo principal limpio y articulado en crema suave
    background: "#F5F1EB",
    // Texto principal en negro puro para máxima legibilidad
    text: "#000000",
    // Secciones con tono claro cercano al fondo para sutil separación
    section: "#EFEAE3",
    // Texto secundario en marrón medio para coherencia con acentos tierra
    secondaryText: "#8c6e47",
    // Acento dorado elegante
    accent: "#B59C51",
    // Estado hover con dorado pálido
    hover: "#D9C7A5",
    // Bordes muy suaves en dorado pálido
    border: "#D9C7A5",
    // Fondo del banner con sutil transparencia crema
    bannerBackground: "rgba(245, 241, 235, 0.97)",
    // Título del banner en dorado
    bannerTitle: "#B59C51",
    // Overlay de imagen oscuro para contraste sobre foto
    bannerImageOverlay: "rgba(0, 0, 0, 0.4)",
    //FooterBackground
    footerbackground: "#4b382e",
  },
  dark: {
    // Fondo principal carbón profundo
    background: "#1A1A1A",
    // Texto principal claro para contraste
    text: "#E0E0E0",
    // Secciones un poco más claras que el fondo
    section: "#242424",
    // Texto secundario en gris medio
    secondaryText: "#A0A0A0",
    // Acento en dorado pálido para destacar
    accent: "#D9C7A5",
    // Hover ligeramente más claro que sección
    hover: "#333333",
    // Bordes en gris oscuro sutil
    border: "#383838",
    // Fondo del banner oscuro con transparencia
    bannerBackground: "rgba(26, 26, 26, 0.97)",
    // Título del banner en dorado pálido
    bannerTitle: "#D9C7A5",
    // Overlay de imagen más oscuro para profundidad
    bannerImageOverlay: "rgba(0, 0, 0, 0.5)",
    //FooterBackground
    footerbackground: "rgb(62, 58, 46)",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? "dark" : "light";
  });

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, colors: themeColors[theme] }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return context;
};
