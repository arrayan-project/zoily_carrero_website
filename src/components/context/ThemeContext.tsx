/*
##### Función de themeContext.tsx #####
- Tiene un papel fundamental en la gestión de temas (light/dark mode) dentro de la aplicación
- Almacenar el estado actual del tema.
- Definir los colores asociados a cada tema.
- Facilitar el acceso a esta información desde cualquier componente.
- Permitir la persistencia del tema elegido por el usuario.
*/

// src/components/context/themeContext.tsx
export {};
import React, { createContext, useState, useEffect } from "react";

// Define un tipo para los temas
type Theme = "light" | "dark";

// Define una interfaz para los colores del tema
interface ThemeColors {
  background: string; //Color de fondo general
  text: string; //Color para el texto general
  bannerBackground: string; // Color específico para el fondo del banner
  bannerTitle: string; // Color específico para el título del banner
  bannerImageOverlay: string; // Color de superposición para imágenes
}

//Creamos una interfaz para el contexto
export interface ThemeContextType {
  theme: Theme; //tipo de variable Theme
  toggleTheme: () => void; //tipo de funcion
  colors: ThemeColors; //tipo de variable ThemeColors
}

//Creamos el contexto, por defecto puede ser undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Creamos el componente que proveera el contexto
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Creamos el estado, usaremos el local storage
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      //Intentamos obtener el valor guardado en el local storage
      const storedTheme = localStorage.getItem("theme");
      //Si tenemos un valor en el localstorage lo retornamos como Theme
      return storedTheme ? (storedTheme as Theme) : "light";
    } catch (error) {
      //Si hay un error, lo mostramos en consola
      console.error("Error al acceder a localStorage:", error);
      //Retornamos un valor por defecto en caso de error
      return "light";
    }
  });

  // Funcion que nos permite cambiar de tema
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //Guardamos en el local storage
  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [theme]);

 // Definimos los colores de cada tema
 const themeColors = {
   light: {
     background: "#f7f7f7", // Gris claro para fondo general modo claro
     text: "#333", // Gris oscuro para texto general modo claro
     bannerBackground: "#FFFFFF", // Gris muy claro para fondo de banner modo claro (ejemplo)
     bannerTitle: "#000", // Negro para título de banner modo claro (ejemplo)
     bannerImageOverlay: "rgba(31, 41, 55, 0.6)", //Capa para imagenes en modo claro
   },
   dark: {
     background: "#1F2937", // Gris oscuro para fondo general modo oscuro
     text: "#fff", // Blanco para texto general modo oscuro
     bannerBackground: "#1F2937", // Gris más oscuro para fondo de banner modo oscuro (ejemplo)
     bannerTitle: "#fff", // Blanco para título de banner modo oscuro (ejemplo)
     bannerImageOverlay: "rgba(31, 41, 55, 0.6)", //Capa para imagenes en modo oscuro
   },
 };

 //Objeto que le enviaremos al contexto
 const value = {
   theme,
   toggleTheme,
   colors: themeColors[theme],
 };
  // Retornamos el proveedor del contexto
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

//Exportamos el contexto
export default ThemeContext;
