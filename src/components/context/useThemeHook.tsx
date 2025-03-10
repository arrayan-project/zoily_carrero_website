/*
##### Función #####
- Este archivo implementa un hook personalizado (useTheme) para facilitar el acceso al contexto del tema (ThemeContext) 
desde cualquier componente. 

##### Su propósito es #####
- Proporcionar una interfaz sencilla y limpia para usar el ThemeContext.
- Asegurar que el componente que utiliza este hook esté dentro de un ThemeProvider.
- Usar el archivo ThemeContext

##### Componentes/Archivos que interactúan con él #####
- Cualquier componente que necesite acceder al tema actual (light/dark) 
o modificarlo (toggle), importará y utilizará este hook useTheme
*/

// src/components/context/useTheme.tsx
import { useContext } from 'react';
import ThemeContext from './themeContext';
import { ThemeContextType } from './themeContext';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};