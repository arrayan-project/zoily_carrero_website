/*
#### Responsabilidad ####
- Proporciona la estructura base para la vista móvil. Aplica los estilos del tema.

#### Lógica Clave ####
- min-h-screen: Asegura que la vista móvil ocupe toda la altura de la pantalla.
- themeClasses: Aplica los estilos del tema.
*/

import React from 'react';
import { useTheme } from './context/useThemeHook';

interface LayoutMobileProps {
  children: React.ReactNode;
}

const LayoutMobile: React.FC<LayoutMobileProps> = ({ children }) => {
  const { theme } = useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-amber-700' : 'bg-gray-800 text-rose-400';

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      {children}
    </div>
  );
};

export default LayoutMobile;
