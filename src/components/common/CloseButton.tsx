import React from "react";
import { X } from "lucide-react";
import { useTheme } from "../context/useThemeHook"; // Importamos el hook de tema

interface CloseButtonProps {
  onClick: () => void;
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
