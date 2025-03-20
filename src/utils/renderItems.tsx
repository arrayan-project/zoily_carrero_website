// src/utils/renderItems.tsx
import React from 'react';
import { ModalContent } from '../data/servicesData';
import ServiceCarousel from '../components/sliders/ServiceSlider'; // Importamos el componente

/**
 * @description Función para renderizar un carrusel.
 * @param {string[]} images - Array de imágenes para el carrusel.
 * @param {string} title - Título del servicio.
 * @param {(content: ModalContent) => void} openModal - Función para abrir el modal.
 * @param {React.ReactNode} infoContent - Contenido de información para el modal.
 * @param {React.ReactNode} termsContent - Contenido de términos para el modal.
 * @param {string} description - Descripción del servicio.
 * @param {string} courseKey - Clave del curso.
 * @param {boolean} isCarousel - Indica si se debe renderizar como carrusel.
 * @returns {JSX.Element} - El componente del carrusel.
 */
const renderCarousel = (
  images: string[],
  title: string,
  openModal: (content: ModalContent) => void,
  infoContent?: React.ReactNode,
  termsContent?: React.ReactNode,
  description?: string,
  courseKey?: string,
  isCarousel?: boolean
): JSX.Element => {
  return (
    <div className={`${isCarousel ? "w-full" : "w-full md:w-11/12 lg:w-10/12"} mx-auto`}>
      <ServiceCarousel
        images={images}
        title={title}
        openModal={openModal}
        infoContent={infoContent}
        termsContent={termsContent}
        description={description}
        courseKey={courseKey}
      />
    </div>
  );
};

/**
 * @description Función para renderizar un item de servicio.
 * @param {string[]} images - Array de imágenes para el carrusel.
 * @param {string} title - Título del servicio.
 * @param {(content: ModalContent) => void} openModal - Función para abrir el modal.
 * @param {React.ReactNode} infoContent - Contenido de información para el modal.
 * @param {React.ReactNode} termsContent - Contenido de términos para el modal.
 * @param {string} description - Descripción del servicio.
 * @returns {JSX.Element} - El componente del item de servicio.
 */
export const renderServiceItem = (
  images: string[],
  title: string,
  openModal: (content: ModalContent) => void,
  infoContent: React.ReactNode,
  termsContent: React.ReactNode,
  description: string
): JSX.Element => {
  return renderCarousel(images, title, openModal, infoContent, termsContent, description, undefined, false);
};

/**
 * @description Función para renderizar un item de curso.
 * @param {string[]} images - Array de imágenes para el carrusel.
 * @param {string} title - Título del curso.
 * @param {(content: ModalContent) => void} openModal - Función para abrir el modal.
 * @param {string} courseKey - Clave del curso.
 * @returns {JSX.Element} - El componente del item de curso.
 */
export const renderCourseItem = (
  images: string[],
  title: string,
  openModal: (content: ModalContent) => void,
  courseKey: string
): JSX.Element => {
  return renderCarousel(images, title, openModal, undefined, undefined, undefined, courseKey);
};
