/**
 * Sección de carrusel de cursos.
 * Muestra los cursos disponibles en un carrusel interactivo con animaciones, imágenes y botón para ver más detalles en un modal.
 *
 * @component
 * @returns {JSX.Element}
 */
import React, { useEffect, useRef, useState } from "react";
import { loadCoursesData, getCourseByIndex } from "../../data/coursesData";
import { useModal } from "../modals/modalServ-Cour/ModalContextServices";
import {
  GENERAL_SECTION_SUPER_TITLE_CLASS,
  GENERAL_PAGE_SUPERMAIN_TITLE_CLASS,
} from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import { ModalContent as ModalContentType } from "../modals/modalServ-Cour/ModalInterfacesServices"; // Alias to avoid conflict
import type { Course } from "../../types/CourseInterfaces";
import CoursesLogic from "./CourseCarouselLogic";
import CoursesCarouselNavigation from "./CourseCarouselNavigation";
import CoursesContent from "./CourseCarouselContent";
import RevealWrapper from "../common/RevealWrapper";
import useSwipeNavigation from "../../hooks/useSwipeNavigation"; // Importar el nuevo hook
import useMobileView from "../../hooks/useMobileView"; // Importar el hook para detectar vista móvil
import "./CoursesCarousel.css";


const CoursesCarouselSection: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null); // Ref para el contenedor del carrusel
  const [coursesArray, setCoursesArray] = useState<Course[] | null>(null);

  // 1) Hook para cargar datos dinámicamente
  useEffect(() => {
    loadCoursesData()
      .then((data) => setCoursesArray(data))
      .catch((err) => console.error("Error cargando coursesData:", err));
  }, []);

  // Hook para detectar si es vista móvil
  const isMobile = useMobileView();

  // 2) Preparamos un array “vacío” mientras no cargan los datos,
  //    para llamar siempre a MakeUpCarouselLogic sin romper el orden de hooks.
  const itemsForLogic: Course[] = coursesArray ?? [];

  // 3) Hook de la lógica RETIRA datos de itemsForLogic  (que será [] o el array real).
  //    Este hook se ejecutará en cada render, independientemente de si servicesArray ya existe.
  const { 
    currentItem, 
    handleCourseTransition, 
    isTransitioning, 
    currentIndex 
  } = CoursesLogic({ initialCourseItems: itemsForLogic });

  // 5) Funciones para navegar. Deben definirse antes de usarlas en useSwipeNavigation.
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

   // 6) Usar el hook de swipe. Debe llamarse incondicionalmente.
  useSwipeNavigation({
    targetRef: carouselContainerRef,
    onSwipeLeft: handleNext, // Swipe a la izquierda -> Siguiente item
    onSwipeRight: handlePrev, // Swipe a la derecha -> Item anterior
    isEnabled: isMobile, // Activar solo en móviles
  });

  // 7) Renderizado condicional después de que todos los hooks se hayan llamado.
  if (coursesArray === null || !currentItem) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Cargando servicios...
      </div>
    );
  }

  // 8) Lógica para abrir el modal
  const handleOpenModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    openerRef.current = e.currentTarget;
    if (!currentItem) {
      console.error("No hay un item actual para abrir el modal.");
      return;
    }

    try {
      // 1. Obtener la información base para el modal (títulos, descripciones generales, etc.)
      //    Esto podría ser una parte de `currentItem` o lo que devuelve `getServiceByIndex`.
      //    Asumiremos que `getServiceByIndex` devuelve la estructura base de ModalContent
      //    pero quizás sin los `serviceItems` detallados o con una versión limitada.
      const baseModalData: ModalContentType = await getCourseByIndex(
        currentIndex
      );

      // 2. Construir el contenido final para el modal, asegurándonos de usar
      //    los `items` del `currentItem` que se está mostrando en el carrusel.
      const finalModalContent: ModalContentType = {
        ...baseModalData, // Título, descripción general, imágenes del modal, infoContent, termsContent
        serviceItems: currentItem.items || [], // <-- Clave: Usar los items del servicio actual del carrusel
        showTabs: true,
        onClose: handleCloseModal,
      };

      openModal(finalModalContent);
    } catch (err) {
      console.error("Error obteniendo contenido del modal:", err);
    }
  };

  const handleCloseModal = () => {
    closeModal();
    openerRef.current?.focus();
  };

  const imageObject = getImageObject(currentItem.imageKey);
  const placeholderBgStyle = imageObject?.placeholder
    ? { backgroundImage: `url("${imageObject.placeholder}")` }
    : {};

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <div
        id="courses-carousel"
        ref={carouselContainerRef} // Asignar la ref al contenedor principal del carrusel
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
                  width={1955}
                  height={1303}
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
                  className={`description text-left ${GENERAL_SECTION_SUPER_TITLE_CLASS} my-[20px] mb-[-80px]`}
                >
                  {currentItem.description}
                </div>
              </CoursesContent>
              {/* Nueva Flecha "Ver más" */}
              <button
                aria-label={`Ver más sobre ${currentItem.category}`}
                onClick={handleOpenModal}
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
