/*
##### Función #####
- Este componente representa el botón flotante de contacto, que abre la modal de contacto.

##### Componentes que utiliza #####
- lucide-react: Utiliza el icono Mail de esta librería.
- onClick: Recibe una función onClick como prop, que se ejecuta cuando se hace clic en el botón.
Esto permite abrir la modal desde el componente padre.

##### Componentes que lo usan #####
-AppWrapper.tsx: Importa y renderiza FloatingContactButton.
*/

// FloatingContactButton.tsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import './FloatingContactButton.css';

interface FloatingContactButtonProps {
  onClick: () => void;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onClick }) => {
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    try {
      onClick();
    } catch (err) {
      setError("Error al intentar abrir el modal de contacto.");
      console.error("Error en FloatingContactButton:", err);
    }
  };

  if (error) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-red-500 text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="floating-button-container">
      <button type="button" className="floating-button" onClick={handleClick} aria-label="Abrir modal de contacto">
        <Mail className="button-icon" />
      </button>
    </div>
  );
};

export default FloatingContactButton;
