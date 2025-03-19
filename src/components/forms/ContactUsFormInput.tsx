import React from "react";
import { useTheme } from "../context/useThemeHook";

type FormInputType = "text" | "email" | "textarea" | "number";

interface FormInputProps {
  type: FormInputType;
  id: string;
  label: string;
  rows?: number;
  value?: string;
  onChange?: (id: string, value: string) => void; // Cambiamos la firma de onChange
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  id,
  label,
  rows,
  value,
  onChange,
  error,
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
  //Se añade la clase para los errores
  const inputErrorClass = error ? "border-red-500" : "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Se hace la comprobacion si onChange es true, para ejecutar la funcion
    onChange && onChange(id,event.target.value); //Pasamos id y valor
  };

  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-sm font-cinzel ${getTextColorClass(theme)} mb-2`}
      >
        {label}
      </label>
      {/* Se añade la funcion handleChange en el evento */}
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 ${getBackgroundColorClass(
            theme
          )} ${inputErrorClass}`}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 ${getBackgroundColorClass(
            theme
          )} ${inputErrorClass}`}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
