import React from 'react';
    import { useTheme } from './context/useTheme';
    
    interface LayoutMobileProps {
      children: React.ReactNode;
    }
    
    const LayoutMobile: React.FC<LayoutMobileProps> = ({ children }) => {
      const { theme } = useTheme();
      const themeClasses = theme === 'light' ? 'bg-white text-amber-700' : 'bg-gray-800 text-rose-400'; // Elimina los estilos de fondo
    
      return (
        <div className={`relative min-h-screen z-0 ${themeClasses}`}>
          {children}
        </div>
      );
    };
    
    export default LayoutMobile;