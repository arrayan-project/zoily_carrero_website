import React, { useRef, useEffect } from "react";
import { useTheme } from "./context/useTheme"; // Import the useTheme hook

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
  const { theme } = useTheme(); // Use the useTheme hook to get the current theme

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

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center !mt-0 !mb-0 ${
        theme === "dark"
          ? "bg-black bg-opacity-50 backdrop-blur-md"
          : "bg-gray-100 bg-opacity-50 backdrop-blur-sm"
      }`}
      onClick={onClose} //se agrega aqui para que cierre el modal al hacer click afuera
    >
      <div
        className={`modal-animation relative rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${ //agregamos la clase aqui
          theme === "dark"
            ? "bg-gray-900 text-white bg-opacity-30"
            : "bg-white text-gray-800 bg-opacity-50"
        }`}
        ref={modalContentRef}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 hover:text-gray-800 ${
            theme === "dark" ? "text-white" : "text-gray-600"
          }`}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>

        {/* Contenido del modal */}
        <h2 className="text-2xl mb-4 font-cinzel">{title}</h2>

        {/* Imagen del curso (si solo hay una) */}
        {images.length === 1 && (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-64 object-cover mb-4"
            loading="lazy"
          />
        )}

        {/* Pestañas de Información y Términos */}
        <div className="flex flex-col space-y-4 font-cinzel">
        <div className="tab-content-animation"> {/*Agregamos la animacion aqui */}
          {/* Información */}
          <div>
            <h3 className="font-bold mb-2">Información</h3>
            <div>{infoContent}</div>
          </div>

          {/* Términos */}
          <div>
            <h3 className="font-bold mb-2">Términos y Condiciones</h3>
            <div>{termsContent}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
