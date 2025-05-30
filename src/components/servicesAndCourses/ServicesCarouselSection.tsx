/**
 * Sección de carrusel de servicios.
 * Muestra los cursos disponibles en un carrusel interactivo con animaciones, imágenes y botón para ver más detalles en un modal.
 *
 * @component
 * @returns {JSX.Element}
 */
import React, { useRef } from "react";
import ServicesCarouselNavigation from "./ServicesCarouselNavigation";
import ServicesContent from "./ServicesCarouselContent";
import { servicesData } from "../../data/servicesData"; // Asumimos que Service tiene imageKey
import { useModal } from "../context/ModalContext";
import "./ServicesCarousel.css";
import useWindowSize from "../../hooks/useWindowSize";
import RevealWrapper from "../common/RevealWrapper";
import {
  FONT_FAMILY_PRIMARY,
  PARAGRAPH_CLASS,
} from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import { ModalContent } from "../modals/ModalInterfaces";


const ServicesCarouselSection: React.FC = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const { openModal, closeModal } = useModal();
  const { isMobileView } = useWindowSize();
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const handleNext = () => {
    const slide = slideRef.current!;
    const items = slide.querySelectorAll<HTMLDivElement>(".item");
    if (items.length) slide.appendChild(items[0]);
  };

  const handlePrev = () => {
    const slide = slideRef.current!;
    const items = slide.querySelectorAll<HTMLDivElement>(".item");
    if (items.length) slide.prepend(items[items.length - 1]);
  };

    const handleOpenModal = (modalContent: ModalContent, e: React.MouseEvent<HTMLButtonElement>) => {
      openerRef.current = e.currentTarget;
      openModal({ ...modalContent, showTabs: true, onClose: handleCloseModal });
    };
  
    const handleCloseModal = () => {
      closeModal();
      openerRef.current?.focus();
    };

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <div
        id="services-carousel"
        className="relative w-full h-[85vh] mx-auto overflow-visible"
      >
        <div className="slide relative w-full h-full" ref={slideRef}>
          {servicesData.map((item) => {
            const imageObject = getImageObject(item.imageKey);
            if (!imageObject) {
              return (
                <div
                  key={item.category}
                  className="item absolute w-[200px] h-[300px] top-1/2 -translate-y-1/2 rounded-[20px] bg-gray-300 inline-block"
                >
                  {/* Contenido de fallback o mensaje de error */}
                </div>
              );
            }
            const placeholderBgStyle = imageObject.placeholder
              ? { backgroundImage: `url("${imageObject.placeholder}")` }
              : {};

            return (
              <div
                key={item.category}
                className="item absolute w-[200px] h-[300px] top-1/2 -translate-y-1/2 rounded-[20px] bg-center bg-cover bg-no-repeat inline-block"
                style={placeholderBgStyle} // Usar placeholder como fondo inicial
              >
                {/* Elemento <picture> para la imagen real */}
                <picture>
                  <source srcSet={imageObject.avif} type="image/avif" />
                  <source srcSet={imageObject.webp} type="image/webp" />
                  <img
                    src={imageObject.webp}
                    alt="" // Decorativo, el contenido principal está en ServicesContent
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-[20px] -z-10"
                    loading="lazy"
                  />
                </picture>
                <ServicesContent>
                  <div
                    className={`name text-[40px] uppercase font-bold ${FONT_FAMILY_PRIMARY}`}
                  >
                    {item.category}
                  </div>
                  <div
                    className={`description ${PARAGRAPH_CLASS} my-[10px] mb-[20px]`}
                  >
                    {item.description}
                  </div>
                  <button
                    aria-label="Boton ver mas"
                    onClick={e => handleOpenModal(item.modalContent, e)}
                    className={`p-2 border-none bg-white ${FONT_FAMILY_PRIMARY} rounded-none cursor-pointer absolute left-center top-[110%] -translate-y-1/2 opacity-100 transition-opacity duration-500 ${
                      isMobileView ? "text-sm" : "text-base"
                    }`}
                  >
                    Ver más
                  </button>
                </ServicesContent>
              </div>
            );
          })}
        </div>
        <div className="sr-only" aria-hidden="true">
          {servicesData.map((item, index) => {
            const imageObject = getImageObject(item.imageKey);
            if (!imageObject) return null; // Omitir si no hay imagen
            return (
              <img
                key={`${item.category}-preload`}
                src={imageObject.webp} // Usar webp para precarga
                alt=""
                loading={index === 1 ? "eager" : "lazy"}
              />
            );
          })}
        </div>

        <ServicesCarouselNavigation onNext={handleNext} onPrev={handlePrev} />
      </div>
    </RevealWrapper>
  );
};

export default ServicesCarouselSection;
