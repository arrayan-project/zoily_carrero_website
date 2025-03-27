// src/components/sliders/MobileCourseItem.tsx

/*
##### Función #####
- Este componente muestra un item de servicio en el carrusel de cursos de la vista móvil.
- Muestra una imagen, un título y un botón para ver más detalles.
- Al hacer clic en el botón o en el título, se abre un modal con más información.

##### Componentes con los que interactúa #####
- ModalContent: Utiliza la interface ModalContent para tipar el contenido del modal.
- useTheme: Utiliza el hook useTheme para acceder al tema actual.

##### Componentes que lo utilizan #####
- Se utiliza en el componente MobileCoursesCarousel para mostrar cada servicio.
*/

import React from "react";
import { CourseModalContent } from "../../data/coursesData"; // Importamos CourseModalContent
import { useTheme } from "../context/useThemeHook";
import { getTextColorClass } from "../../utils/utils";

interface MobileCourseItemProps {
  images: string[];
  title: string;
  openModal: (content: CourseModalContent) => void;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description: string;
}

const MobileCourseItem: React.FC<MobileCourseItemProps> = ({
  images,
  title,
  openModal,
  infoContent,
  termsContent,
  description,
}) => {
  const handleOpenModal = () => {
    openModal({ images, title, infoContent, termsContent, description });
  };

  const { theme } = useTheme();

  return (
    <div className="space-y-6 justify-center items-center text-center relative">
      <div
        className="w-full aspect-[1/1] overflow-hidden relative group cursor-pointer rounded-lg shadow-xl"
        onClick={handleOpenModal}
      >
        <img
          src={images[0]} // Mostramos solo la primera imagen
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <button
          onClick={handleOpenModal}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}
          aria-label={`Ver detalles de ${title}`}
        >
          Ver Detalles
        </button>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 text-pink-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-30"> {/* Contenedor para el texto con z-30 */}
        <h2
          onClick={handleOpenModal}
          className={`text-xl md:text-2xl font-cinzel tracking-wide cursor-pointer ${getTextColorClass(
            theme
          )}`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MobileCourseItem;
