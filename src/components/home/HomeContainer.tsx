/**
 * Contenedor principal para la página de inicio (Home).
 * Permite envolver el contenido del Home y aplicar clases adicionales.
 * Maneja errores de renderizado y muestra un mensaje si ocurre alguno.
 *
 * @component
 * @param {HomeContainerProps} props - Props del contenedor, incluyendo los hijos y clases opcionales.
 * @returns {JSX.Element}
 */
import React, { useState } from 'react';


interface HomeContainerProps {
  children: React.ReactNode;
  className?: string; // Prop para clases adicionales
}

const HomeContainer: React.FC<HomeContainerProps> = ({ children, className }) => {
  const [error] = useState<string | null>(null);

  if (error) {
    console.error("Error en HomeContainer:", error); // Registra el error en la consola
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error al cargar el contenido principal.</p>
      </div>
    );
  }

  return (
    <div className={`home-container relative ${className || ''}`}>
      {children}
    </div>
  );
};

export default HomeContainer;
