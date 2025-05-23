/*
##### Función #####
- Este componente es una base para crear modales.
Permite mostrar un título, un slider de imágenes, y dos pestañas de contenido ("Información" y "Términos").
*/

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/useThemeHook";
import { getTextColorClass } from "../../utils/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  loading?: "lazy" | "eager";
}

// Define SlideComponent directamente aquí, ya que no se importa de otro archivo
interface SlideComponentProps {
  img: string;
  alt: string;
  loading?: "lazy" | "eager";
}

const SlideComponent: React.FC<SlideComponentProps> = ({ img, alt }) => {
  return (
    <div className="w-full h-full">
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  images,
  title,
  infoContent,
  termsContent,
  description,
}) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] =
    useState<"Informacion" | "Terminos" | "Imagenes">("Informacion");
  const [error] = useState<string | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Variables para las clases repetidas
  const tabButtonBase = `flex-1 px-4 py-2 text-sm font-cinzel font-semibold bg-opacity-50`;
  const tabButtonActive = `bg-gray-200 dark:bg-gray-800 text-white-600`;
  const tabButtonInactive = `text-gray-200 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-400`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (error) {
    console.error("Error en ModalBase:", error);
    return (
      <div className="error-container">
        <p className="error-message">
          Ha ocurrido un error inesperado en el modal.
        </p>
      </div>
    );
  }

  if (!isOpen) return null;

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evita la propagación del evento
  };

  return (
    <div
      className={`modal-overlay fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center !mt-0 !mb-0 ${
        theme === "dark"
          ? "bg-black bg-opacity-50 backdrop-blur-md"
          : "bg-gray-100 bg-opacity-50 backdrop-blur-sm"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`modal-animation relative rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
          theme === "dark"
            ? "bg-gray-900 text-white bg-opacity-30"
            : "bg-white text-gray-800 bg-opacity-50"
        }`}
        ref={modalContentRef}
        onClick={handleModalContentClick} // Evita que el clic en el contenido cierre el modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 text-gray-500 hover:text-gray-700 ${
            theme === "dark"
              ? "dark:text-gray-300 dark:hover:text-gray-100"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Titulo del modal */}
        <div className="font-cinzel">
          <h2 className="text-xl font-bold mb-8">{title}</h2>
          {description && <p className="mb-4 text-sm">{description}</p>}
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex mb-12 mt-12 w-full ${
            theme === "dark"
              ? "bg-gray-400 bg-opacity-50"
              : "bg-gray-100 bg-opacity-50"
          }`}
        >
          <button
            className={`${tabButtonBase} ${
              activeTab === "Informacion" ? tabButtonActive : tabButtonInactive
            } ${getTextColorClass(theme)}`}
            onClick={() => setActiveTab("Informacion")}
          >
            Información
          </button>
          <button
            className={`${tabButtonBase} ${
              activeTab === "Terminos" ? tabButtonActive : tabButtonInactive
            } ${getTextColorClass(theme)}`}
            onClick={() => setActiveTab("Terminos")}
          >
            Términos
          </button>
          <button
            className={`${tabButtonBase} ${
              activeTab === "Imagenes" ? tabButtonActive : tabButtonInactive
            } ${getTextColorClass(theme)}`}
            onClick={() => setActiveTab("Imagenes")}
          >
            Imágenes
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative h-96 mb-12">
          {activeTab === "Informacion" && (
            <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
              {infoContent}
            </div>
          )}
          {activeTab === "Terminos" && (
            <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
              {termsContent}
            </div>
          )}
          {activeTab === "Imagenes" && (
            <div className="absolute top-0 left-0 w-full h-full tab-content-animation">
                {images.map((img, index) => (
                  <SlideComponent 
                  key={index} 
                  img={img} 
                  alt={title} 
                  loading="lazy"
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
