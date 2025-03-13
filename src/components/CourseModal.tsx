/*
##### Función #####
- Este componente se encarga de mostrar un modal con información detallada sobre un curso.
- Puede mostrar una imagen, un título, y dos secciones de contenido: "Información" y "Términos y Condiciones".
*/

import React, { useRef, useEffect, useState } from "react";
import CloseButton from "./CloseButton"; // Importamos CloseButton
import { useTheme } from "./context/useThemeHook";
import "./CourseModal.css";
import { getTextColorClass } from "../GeneralUtil"; //Importamos las funciones globales, con ruta absoluta

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
}

const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  images,
  title,
  infoContent,
  termsContent,
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false); // Nuevo estado para controlar si el modal esta montado

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true); // El modal se ha abierto y se marca como montado
    } else {
      // Cuando se cierra, se quita el estado
      modalContainerRef.current?.classList.remove("open");
      modalContainerRef.current?.classList.remove("closing");
      setIsMounted(false); // Se ha cerrado y se marca como desmontado
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalContainerRef.current &&
        !modalContentRef.current?.contains(event.target as Node)
      ) {
        modalContainerRef.current.classList.add("closing");
        setTimeout(onClose, 300); // Espera a que termine la animación
      }
    };

    if (isOpen && isMounted) {
      modalContainerRef.current?.classList.add("open");
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose, isMounted]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalContainerRef}
      className={`course-modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center ${
        theme === "dark"
          ? "bg-black bg-opacity-50 backdrop-blur-md"
          : "bg-gray-100 bg-opacity-50 backdrop-blur-sm"
      }`}
    >
      <div
        ref={modalContentRef}
        className={`course-modal-content relative rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
          theme === "dark"
            ? "bg-gray-900 text-white bg-opacity-30"
            : "bg-white text-gray-800 bg-opacity-50"
        }`}
      >
        {/* Botón de cerrar */}
        <CloseButton
          onClick={() => {
            modalContainerRef.current?.classList.add("closing");
            setTimeout(onClose, 300);
          }}
        />

        {/* Contenido del modal */}
        <h2 className={`text-2xl mb-4 font-cinzel ${getTextColorClass(theme)}`}>
          {title}
        </h2>

        {/* Imagen del curso (si solo hay una) */}
        {images.length === 1 && (
          <img
            src={images[0]}
            alt={title}
            key={title} //Se añade key
            className="w-full h-64 object-cover mb-4 rounded-lg"
            loading="lazy"
          />
        )}

        {/* Pestañas de Información y Términos */}
        <div className="flex flex-col space-y-4 font-cinzel">
          {/* Información */}
          <div>
            <h3 className={`font-bold mb-2 ${getTextColorClass(theme)}`}>
              Información
            </h3>
            <div>{infoContent}</div>
          </div>

          {/* Términos */}
          <div>
            <h3 className={`font-bold mb-2 ${getTextColorClass(theme)}`}>
              Términos y Condiciones
            </h3>
            <div>{termsContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
