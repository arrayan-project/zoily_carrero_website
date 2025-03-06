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