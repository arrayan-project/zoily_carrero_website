/**
 * Sección de carrusel de cursos.
 * Muestra los cursos disponibles en un carrusel interactivo con animaciones, imágenes y botón para ver más detalles en un modal.
 *
 * @component
 * @returns {JSX.Element}
 */
import React, { useRef } from "react";
import CoursesCarouselNavigation from "./CourseCarouselNavigation";
import CoursesContent from "./CourseCarouselContent";
import { coursesData } from "../../data/coursesData";
import { useModal } from "../modals/modalServ-Cour/ModalContextServices";
import "./CoursesCarousel.css";
import RevealWrapper from "../common/RevealWrapper";
import { GENERAL_SECTION_SUPER_TITLE_CLASS, GENERAL_PAGE_SUPERMAIN_TITLE_CLASS } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import { ModalContent as ModalContentType } from "../modals/modalServ-Cour/ModalInterfacesServices"; // Alias to avoid conflict
import CoursesLogic from "./CourseCarouselLogic";

const CoursesCarouselSection: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const { currentItem, handleCourseTransition, isTransitioning, currentIndex } =
    CoursesLogic({ initialCourseItems: coursesData });

  const handleNext = () => {
    if (!isTransitioning.current) {
      handleCourseTransition("next");
    }
  };

  const handlePrev = () => {
    if (!isTransitioning.current) {
      handleCourseTransition("prev");
    }
  };

    const handleOpenModal = (modalContent: ModalContentType, e: React.MouseEvent<HTMLButtonElement>) => {

    openerRef.current = e.currentTarget;
    openModal({ ...modalContent, showTabs: true, onClose: handleCloseModal });
  };

  const handleCloseModal = () => {
    closeModal();
    openerRef.current?.focus();
  };

  if (!currentItem) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Cargando servicios...
      </div>
    ); // O un esqueleto
  }

  const imageObject = getImageObject(currentItem.imageKey);
  const placeholderBgStyle = imageObject?.placeholder
    ? { backgroundImage: `url("${imageObject.placeholder}")` }
    : {};

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <div
        id="courses-carousel"
        className="relative w-full h-screen overflow-hidden" // Cambiado a overflow-hidden
      >
        {/* Contenedor para el slide actual, la key ayuda a React a animar el cambio */}
        <div
          key={currentIndex}
          className="item-wrapper w-full h-full animate-fadeIn" // Esta clase manejará la animación de entrada
        >
          {!imageObject ? (
            <div className="item-fallback w-full h-full bg-gray-300 flex items-center justify-center text-white">
              Imagen no disponible para {currentItem.category}
            </div>
          ) : (
            <div
              className="item w-full h-full bg-center bg-cover bg-no-repeat relative" // Estilos base para el item
              style={placeholderBgStyle}
            >
              <picture>
                <source srcSet={imageObject.avif} type="image/avif" />
                <source srcSet={imageObject.webp} type="image/webp" />
                <img
                  src={imageObject.webp}
                  alt={currentItem.category} // Alt descriptivo
                  className="absolute inset-0 w-full h-full object-cover -z-10" // Se quitó opacity-90
                  loading={currentIndex === 0 ? "eager" : "lazy"} // Carga eager para el primer slide
                />
              </picture>
              {/* Velo oscuro sobre la imagen */}
              <div className="absolute inset-0 bg-black/30 z-0"></div>

              <CoursesContent>
                <div
                  className={`name uppercase font-bold text-left ${GENERAL_PAGE_SUPERMAIN_TITLE_CLASS} md:text-5xl lg:text-6xl`}
                >
                  {currentItem.category}
                </div>
                <div
                  className={`description text-left ${GENERAL_SECTION_SUPER_TITLE_CLASS} my-[20px] mb-[20px] md:text-xl lg:text-2xl`}
                >
                  {currentItem.description}
                </div>
              </CoursesContent>
              {/* Nueva Flecha "Ver más" */}
              <button
                aria-label={`Ver más sobre ${currentItem.category}`}
                onClick={(e) => handleOpenModal(currentItem.modalContent, e)}
                className="absolute top-2/3 md:top-1/2 md:-translate-y-1/2 right-1 md:right-8 z-30 p-3 text-white opacity-75 hover:opacity-100 focus:opacity-100 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:scale-110 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1} // Un poco más grueso para "grande"
                  stroke="currentColor"
                  className="w-16 h-16 md:w-24 md:h-24" // Tamaño de la flecha
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* La sección de precarga con div y src ha sido eliminada por ser ineficaz. */}
        {/* La imagen principal ya tiene una estrategia de carga (eager/lazy). */}

        <CoursesCarouselNavigation onNext={handleNext} onPrev={handlePrev} />
      </div>
    </RevealWrapper>
  );
};

export default CoursesCarouselSection;
