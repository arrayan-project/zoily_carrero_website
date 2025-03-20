/*
##### Función #####
- Este componente representa un "slide" dentro de un carrusel de cursos.
- Muestra una imagen, un título y un botón "Ver detalles".
- Al hacer clic en la imagen o en el título, se debe abrir el modal del curso correspondiente.
*/

import React from "react";
import { useTheme } from "../context/useThemeHook";
import courseData from "../../data/coursesData"; // Importamos con ruta absoluta
import { ModalContent } from "../../data/servicesData";

interface CourseSliderProps {
  courseKey: string;
  title: string;
  image: string;
  openModal: (content: ModalContent) => void; //Usamos el nuevo type
}

const CourseSlider: React.FC<CourseSliderProps> = ({
  courseKey,
  title,
  image,
  openModal,
}) => {
  const { theme } = useTheme();
  const textColorClass = theme === "dark" ? "text-white" : "text-gray-800"; //Variable para el color
  const [error, setError] = React.useState<string | null>(null);


  // Funcion para ejecutar el modal
  const handleOpenModal = () => {
    try {
      const courseInformation = courseData[courseKey];
      if (!courseInformation) {
        setError(`No se encontró información para el curso: ${courseKey}`);
        return;
      }

      const content: ModalContent = {
        infoContent: courseInformation.infoContent(),
        termsContent: courseInformation.termsContent(),
        images: [image],
        title: title,
        courseKey: courseKey,
      };
      openModal(content);
    } catch (err) {
      setError(`Error al cargar la información del curso: ${courseKey}`);
      console.error("Error en handleOpenModal:", err);
    }
  };

  if (error) {
    return (
      <div className="text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Image with onClick */}
      <div
        className="w-full h-96 shadow-lg overflow-hidden relative group cursor-pointer rounded-lg"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"

        />
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the image's onClick
            handleOpenModal();
          }}
          className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded 
          bg-gray-700 hover:bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-cinzel font-bold
          `}
          aria-label={`Ver detalles del curso ${title}`}
        >
          Ver detalles
        </button>
      </div>
      <h2
        onClick={handleOpenModal}
        className={`text-xl md:text-2xl font-cinzel tracking-wide ${textColorClass} cursor-pointer`}
      >
        {title}
      </h2>
    </div>
  );
};

export default CourseSlider;
