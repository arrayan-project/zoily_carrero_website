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

import React from 'react';
import { Mail } from 'lucide-react';
import './FloatingContactButton.css';

interface FloatingContactButtonProps {
    onClick: () => void;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onClick }) => {
  return (
    <div className="floating-button-container">
      <div className="heart-button-shape"> {/* Nuevo div para la forma de corazón */}
        <button className="floating-button" onClick={onClick}>
          <Mail className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default FloatingContactButton;

