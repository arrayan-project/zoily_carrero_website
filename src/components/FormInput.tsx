// FormInput.tsx
import React from "react";
import { useTheme } from "./context/useTheme";

interface FormInputProps {
  type: string;
  id: string;
  label: string;
  rows?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  id,
  label,
  rows,
}) => {
  const { theme } = useTheme();

  //Funcion para manejar los colores del texto segun el tema
  const getTextColorClass = (theme: string) => {
    return theme === "dark" ? "text-white" : "text-gray-700";
  };
  
  const getBackgroundColorClass = (theme: string) => {
    return theme === "dark"
      ? "bg-gray-700 border-gray-700 text-white"
      : "bg-white border-gray-300 text-gray-700";
  };

  if (type === "textarea") {
    return (
      <div>
        <label
          htmlFor={id}
          className={`block text-sm font-cinzel ${getTextColorClass(theme)} mb-2`}
        >
          {label}
        </label>
        <textarea
          id={id}
          rows={rows}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                              ${getBackgroundColorClass(theme)}
                          `}
        />
      </div>
    );
  } else {
    return (
      <div>
        <label
          htmlFor={id}
          className={`block text-sm font-cinzel ${getTextColorClass(theme)} mb-2`}
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                              ${getBackgroundColorClass(theme)}
                              `}
        />
      </div>
    );
  }
};

export default FormInput;
