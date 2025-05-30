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
import { useModal } from "../context/ModalContext";
import "./CoursesCarousel.css";
import useWindowSize from "../../hooks/useWindowSize";
import RevealWrapper from "../common/RevealWrapper";
import {
  FONT_FAMILY_PRIMARY,
  PARAGRAPH_CLASS,
} from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import { ModalContent } from "../modals/ModalInterfaces";

const CoursesCarouselSection: React.FC = () => {
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
        id="courses-carousel"
        className="relative w-full h-[85vh] mx-auto overflow-visible rounded-[20px]"
      >
        <div className="slide" ref={slideRef}>
          {coursesData.map((item) => {
            const imageObject = getImageObject(item.imageKey);
            if (!imageObject) {
              return (
                <div
                  key={item.category}
                  className="item absolute w-[200px] h-[300px] top-1/2 -translate-y-1/2 rounded-[20px] bg-gray-300 inline-block"
                >
                  {/* Contenido de fallback */}
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
                style={placeholderBgStyle}
              >
                <picture>
                  <source srcSet={imageObject.avif} type="image/avif" />
                  <source srcSet={imageObject.webp} type="image/webp" />
                  <img
                    src={imageObject.webp}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-[20px] -z-10"
                    loading="lazy"
                  />
                </picture>
                <CoursesContent>
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
                </CoursesContent>
              </div>
            );
          })}
        </div>
        <div className="sr-only" aria-hidden="true">
          {coursesData.map((item, index) => {
            const imageObject = getImageObject(item.imageKey);
            if (!imageObject) return null;
            return (
              <img
                key={`${item.category}-preload`}
                src={imageObject.webp}
                alt=""
                loading={index === 1 ? "eager" : "lazy"}
              />
            );
          })}
        </div>
        <CoursesCarouselNavigation onNext={handleNext} onPrev={handlePrev} />
      </div>
    </RevealWrapper>
  );
};

export default CoursesCarouselSection;