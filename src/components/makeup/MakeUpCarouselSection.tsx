/**
 * Sección de carrusel de servicios.
 * Muestra los cursos disponibles en un carrusel interactivo con animaciones, imágenes y botón para ver más detalles en un modal.
 *
 * @component
 * @returns {JSX.Element}
 */
import React, { useEffect, useRef, useState } from "react";
import { loadServicesData, getServiceByIndex } from "../../data/servicesData";
import { useModal } from "../modals/modalServ-Cour/ModalContextServices";
import {
  GENERAL_SECTION_SUPER_TITLE_CLASS,
  GENERAL_PAGE_SUPERMAIN_TITLE_CLASS,
} from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import { ModalContent as ModalContentType } from "../modals/modalServ-Cour/ModalInterfacesServices";
import type { Service } from "../../types/ServiceInterfaces";
import MakeUpCarouselLogic from "./MakeUpCarouselLogic";
import MakeUpCarouselNavigation from "./MakeUpCarouselNavigation";
import MakeUpCarouselContent from "./MakeUpCarouselContent";
import RevealWrapper from "../common/RevealWrapper";
import useSwipeNavigation from "../../hooks/useSwipeNavigation"; // Importar el nuevo hook
import useMobileView from "../../hooks/useMobileView"; // Importar el hook para detectar vista móvil
import "./MakeUpCarousel.css";

const MakeUpCarouselSection: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null); // Ref para el contenedor del carrusel
  const [servicesArray, setServicesArray] = useState<Service[] | null>(null);

  // 1) Hook para cargar datos dinámicamente
  useEffect(() => {
    loadServicesData()
      .then((data) => setServicesArray(data))
      .catch((err) => console.error("Error cargando servicesData:", err));
  }, []);

  // Hook para detectar si es vista móvil
  const isMobile = useMobileView();

  // 2) Preparamos un array “vacío” mientras no cargan los datos,
  //    para llamar siempre a MakeUpCarouselLogic sin romper el orden de hooks.
  const itemsForLogic: Service[] = servicesArray ?? [];

  // 3) Hook de la lógica RETIRA datos de itemsForLogic (que será [] o el array real).
  //    Este hook se ejecutará en cada render, independientemente de si servicesArray ya existe.
  const {
    currentItem,
    handleServiceTransition,
    isTransitioning,
    currentIndex,
    previousItem,
    animationClasses,  
  } = MakeUpCarouselLogic({ initialServiceItems: itemsForLogic });

  // 5) Funciones para navegar. Deben definirse antes de usarlas en useSwipeNavigation.
  const handleNext = () => {
    if (!isTransitioning.current) {
      handleServiceTransition("next");
    }
  };
  const handlePrev = () => {
    if (!isTransitioning.current) {
      handleServiceTransition("prev");
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
  if (servicesArray === null || !currentItem) {
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
      const baseModalData: ModalContentType = await getServiceByIndex(
        currentIndex
      );

      // Preparamos el infoContent para el modal usando la descripción del carrusel.
      // Esto aparecerá en la pestaña "Información" antes de la lista de serviceItems.
      const infoContentForModal = currentItem.description ? (
        <p className="mb-6 text-sm md:text-base font-cinzel">{currentItem.description}</p>
      ) : undefined;

      // 2. Construir el contenido final para el modal, asegurándonos de usar
      //    los `items` del `currentItem` que se está mostrando en el carrusel.
      const finalModalContent: ModalContentType = {
        ...baseModalData, // Esto trae title, images, galleryCategorySlug, y termsContent de getServiceByIndex
        infoContent: infoContentForModal, // Sobrescribimos o establecemos infoContent aquí
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

 // Helper para renderizar un slide
  const renderSlide = (item: Service | undefined, animClass: string, isCurrent: boolean) => {
    if (!item) return null;
    const imageObject = getImageObject(item.imageKey);
    const placeholderBgStyle = imageObject?.placeholder ? { backgroundImage: `url("${imageObject.placeholder}")` } : {};


  return (
        <div
          key={item.id} // Usar un ID único del item para la key
          className={`item-wrapper w-full h-full ${animClass}`}         
        >
          {!imageObject ? (
            <div className="item-fallback w-full h-full bg-gray-300 flex items-center justify-center text-white">
              Imagen no disponible para {currentItem.category}
            </div>
          ) : (
            <div
              className="item w-full h-full bg-center bg-cover bg-no-repeat relative"
              style={placeholderBgStyle}
            >
              <picture>
                <source srcSet={imageObject.avif} type="image/avif" />
                <source srcSet={imageObject.webp} type="image/webp" />
                <img
                  src={imageObject.webp}
                  alt={currentItem.category}
                  className="absolute inset-0 w-full h-full object-cover" // z-index se maneja en item-wrapper
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                  width={6000}
                  height={3032}
                />
              </picture>
              <div className="absolute inset-0 bg-black/50 z-0"></div>

              {isCurrent && ( // Solo mostrar contenido y botón en el slide actual
                <>
                  <MakeUpCarouselContent>
                    <div
                      className={`name uppercase font-bold text-left ${GENERAL_PAGE_SUPERMAIN_TITLE_CLASS} md:text-5xl lg:text-6xl`}
                    >
                      {item.category}
                    </div>
                    <div
                      className={`description text-left ${GENERAL_SECTION_SUPER_TITLE_CLASS} my-[20px] mb-[-80px]`}
                    >
                      {item.description}
                    </div>
                  </MakeUpCarouselContent>

                  <button
                    aria-label={`Ver más sobre ${item.category}`}
                    onClick={handleOpenModal}
                    className="absolute top-2/3 md:top-1/2 md:-translate-y-1/2 right-1 md:right-8 z-30 p-3 text-white opacity-75 hover:opacity-100 focus:opacity-100 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:scale-110 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={0.5}
                      stroke="currentColor"
                      className="w-16 h-16 md:w-24 md:h-24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
    );
  };

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <div
        id="services-carousel"
        ref={carouselContainerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Renderizar el slide previo si existe y está en transición */}
        {previousItem && renderSlide(previousItem, animationClasses.previous, false)}
        {/* Renderizar el slide actual */}
        {currentItem && renderSlide(currentItem, animationClasses.current, true)}

        <MakeUpCarouselNavigation onNext={handleNext} onPrev={handlePrev} />
      </div>
    </RevealWrapper>
  );
};

export default MakeUpCarouselSection;
