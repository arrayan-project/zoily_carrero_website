/*
#### Responsabilidad ####
- Proporciona la estructura base para la vista móvil. Aplica los estilos del tema.

#### Lógica Clave ####
- min-h-screen: Asegura que la vista móvil ocupe toda la altura de la pantalla.
- themeClasses: Aplica los estilos del tema.
*/

// MobileFrame.tsx
import React, { useState } from 'react';
import { useTheme } from '../context/useThemeHook';

interface LayoutMobileProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutMobile: React.FC<LayoutMobileProps> = ({ children, className }) => {
  const { theme } = useTheme();
  const [error] = useState<string | null>(null);
  //Se crea una variable para las clases condicionales
  const themeClasses = theme === 'light' ? 'bg-white text-amber-700' : 'bg-gray-800 text-rose-400';

  if (error) {
    console.error("Error en MobileFrame:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado en la vista móvil.</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${themeClasses} ${className || ''}`}>
      {children}
    </div>
  );
};

export default LayoutMobile;

