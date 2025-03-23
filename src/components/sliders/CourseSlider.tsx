// src/components/sliders/CourseSlider.tsx

/*
##### Función #####
- Este componente representa un "slide" dentro de un carrusel de cursos.
- Muestra una imagen, un título y un botón "Ver detalles".
- Al hacer clic en la imagen o en el título, se debe abrir el modal del curso correspondiente.
*/

import React, { useState } from "react";
import Slider from "react-slick";
import { useTheme } from "../context/useThemeHook";
import { CourseModalContent } from "../../data/coursesData"; // Importamos CourseModalContent
import { getTextColorClass } from "../../utils/utils"; // Importamos la funcion
import AnimationWrapper from "../common/AnimationLayer";

interface CourseSliderProps {
  images: string[];
    title: string;
    openModal: (content: CourseModalContent) => void;
    infoContent: React.ReactNode;
    termsContent: React.ReactNode;
    description?: string;
}

const CourseSlider: React.FC<CourseSliderProps> = ({
  images,
  title,
  openModal,
  infoContent,
  termsContent,
  description,
}) => {
  // Hook para manejar el tema claro-oscuro
   const { theme } = useTheme();
   // Estado para manejar errores
   const [error, setError] = useState<string | null>(null);
 
   // Función para abrir el modal
   const handleOpenModal = () => {
     try {
       openModal({ images, title, infoContent, termsContent, description });
     } catch (err) {
       setError("Error al abrir el modal.");
       console.error("Error en handleOpenModal:", err);
     }
   };

  // Configuraciones del carrusel
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  //Variables para clases repetidas
  const buttonBase = `absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded`;

  // Si hay un error, se muestra un mensaje de error
  if (error) {
    console.error("Error en ServiceCarousel:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado en el carrusel de servicios.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 justify-center items-center text-center">
      {/* Contenedor de la imagen */}
      <div
        className="w-full aspect-[3/1] overflow-hidden relative group cursor-pointer rounded-lg"
        onClick={handleOpenModal}
      >
        {/* Animacion de la imagen */}
        <AnimationWrapper animationClassName="fade-in-up">
          {/* Carrusel de imagenes */}
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index} className="w-full aspect-[3/1]">
                {/* Imagen */}
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </Slider>
        </AnimationWrapper>
        {/* Boton para ver detalles */}
        <button
          onClick={handleOpenModal}
          className={`${buttonBase} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          aria-label={`Ver detalles de ${title}`} // Añade aria-label para accesibilidad
        >
          Ver Detalles
        </button>
        {/* Icono de la imagen */}
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
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

      {/* Contenedor del titulo */}
      <h2
        onClick={handleOpenModal} // Add the onClick event handler
        className={`text-xl md:text-2xl font-cinzel tracking-wide cursor-pointer ${getTextColorClass(theme)}`} // Usamos getTextColorClass
      >
        {title}
      </h2>
    </div>
  );
};

export default CourseSlider;
