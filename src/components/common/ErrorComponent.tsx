/**
 * Componente de error reutilizable para mostrar mensajes de error y permitir reintentos.
 * Se utiliza como fallback en límites de error (Error Boundaries).
 *
 * @component
 * @param {ErrorComponentProps} props - Props del componente de error, incluyendo el error y la función de reset.
 * @returns {JSX.Element}
 */
import React from 'react';
import { FallbackProps } from '../../interfaces/interfaces';

interface ErrorComponentProps extends FallbackProps {
  message?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error, resetErrorBoundary, message }) => {
  return (
    <div role="alert" className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-red-500 text-2xl font-bold">¡Algo salió mal!</p>
      {message && <p className="text-gray-700 mt-2">{message}</p>}
      <pre className="text-red-600 mt-4 p-4 bg-gray-200 rounded-md">{error.message}</pre>
      <button 
        onClick={resetErrorBoundary}
        aria-label="Boton intentar nuevamente" 
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        
        Intentar de nuevo
      </button>
    </div>
  );
};

export default ErrorComponent;
