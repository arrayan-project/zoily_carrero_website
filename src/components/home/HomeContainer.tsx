// HomeContainer.tsx
import React, { useState } from 'react';


interface HomeContainerProps {
  children: React.ReactNode;
  className?: string; // Prop para clases adicionales
}

const HomeContainer: React.FC<HomeContainerProps> = ({ children, className }) => {
  const [error, setError] = useState<string | null>(null);

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
