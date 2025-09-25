/**
 * Botón reutilizable para cerrar modales u otros elementos.
 * Cambia el color del ícono según el tema actual.
 *
 * @component
 * @param {CloseButtonProps} props - Props del botón de cierre.
 * @returns {JSX.Element}
 */
import React from "react";
import { X } from "../../assets/icons";
import { useTheme } from "../context/themeContext";; // Importamos el hook de tema

interface CloseButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Actualizado para aceptar el evento
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  const { theme } = useTheme(); // Obtenemos el tema actual
  return (
    <button
      onClick={onClick}
      className={`course-close-button ${
        theme === "dark" ? "text-white" : "text-gray-600"
      }`}
      aria-label="Cerrar Modal"
    >
      <X className="h-6 w-6 fill-current" />
    </button>
  );
};

export default CloseButton;
