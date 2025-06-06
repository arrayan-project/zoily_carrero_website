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
import {  GENERAL_SECTION_SUPER_TITLE_CLASS,  GENERAL_PAGE_SUPERMAIN_TITLE_CLASS } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import type { ModalContent as ModalContentType } from "../modals/modalServ-Cour/ModalInterfacesServices";
import type { Service } from "../../types/ServiceInterfaces";
import MakeUpCarouselLogic from "./MakeUpCarouselLogic";
import MakeUpCarouselNavigation from "./MakeUpCarouselNavigation";
import MakeUpCarouselContent from "./MakeUpCarouselContent";
import RevealWrapper from "../common/RevealWrapper";
import "./MakeUpCarousel.css";


const MakeUpCarouselSection: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [servicesArray, setServicesArray] = useState<Service[] | null>(null);

  // 1) Hook para cargar datos dinámicamente
  useEffect(() => {
    loadServicesData()
      .then((data) => setServicesArray(data))
      .catch((err) => console.error("Error cargando servicesData:", err));
  }, []);

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
  } = MakeUpCarouselLogic({ initialServiceItems: itemsForLogic });

  // 4) Si aún no tenemos servicios cargados, mostramos “Cargando…”.
  //    Pero **aquí ya hemos llamado a MakeUpCarouselLogic** (el hook), respetando el orden.
  if (servicesArray === null) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Cargando servicios...
      </div>
    );
  }

  // 5) Funciones para navegar y abrir modal
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

  const handleOpenModal = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    openerRef.current = e.currentTarget;
    try {
      const modalContent: ModalContentType = await getServiceByIndex(
        currentIndex
      );
      openModal({ ...modalContent, showTabs: true, onClose: handleCloseModal });
    } catch (err) {
      console.error("Error obteniendo contenido del modal:", err);
    }
  };

  const handleCloseModal = () => {
    closeModal();
    openerRef.current?.focus();
  };

  // 6) currentItem ya está garantizado porque servicesArray no es null
  if (!currentItem) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Cargando servicios...
      </div>
    );
  }

  const imageObject = getImageObject(currentItem.imageKey);
  const placeholderBgStyle = imageObject?.placeholder
    ? { backgroundImage: `url("${imageObject.placeholder}")` }
    : {};

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <div
        id="services-carousel"
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Cada render aún ejecuta hooks en el mismo orden */}
        <div
          key={currentIndex}
          className="item-wrapper w-full h-full animate-fadeIn"
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
                  className="absolute inset-0 w-full h-full object-cover -z-10"
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                  width={6000}
                  height={3032}
                />
              </picture>
              <div className="absolute inset-0 bg-black/30 z-0"></div>

              <MakeUpCarouselContent>
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
              </MakeUpCarouselContent>

              <button
                aria-label={`Ver más sobre ${currentItem.category}`}
                onClick={handleOpenModal}
                className="absolute top-2/3 md:top-1/2 md:-translate-y-1/2 right-1 md:right-8 z-30 p-3 text-white opacity-75 hover:opacity-100 focus:opacity-100 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:scale-110 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
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
            </div>
          )}
        </div>

        <MakeUpCarouselNavigation onNext={handleNext} onPrev={handlePrev} />
      </div>
    </RevealWrapper>
  );
};

export default MakeUpCarouselSection;
