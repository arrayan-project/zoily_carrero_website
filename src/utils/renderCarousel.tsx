// src/utils/renderCarousel.ts
import React from 'react';
import CourseCarousel from '../components/sliders/CourseSlider';
import ServiceCarousel from '../components/sliders/ServiceSlider';
import { ModalContent } from '../data/servicesData';

/**
 * @description Función auxiliar para renderizar los carruseles de servicios y cursos.
 * @param {string[]} images - Array de imágenes para el carrusel.
 * @param {string} title - Título del carrusel.
 * @param {(content: ModalContent) => void} openModal - Función para abrir el modal.
 * @param {React.ReactNode} [infoContent] - Contenido de información para el modal.
 * @param {React.ReactNode} [termsContent] - Contenido de términos para el modal.
 * @param {string} [description] - Descripción del servicio.
 * @param {string} [courseKey] - Clave del curso (si es un carrusel de cursos).
 * @returns {JSX.Element} - El componente del carrusel.
 */
const renderCarousel = (
  images: string[],
  title: string,
  openModal: (content: ModalContent) => void,
  infoContent?: React.ReactNode,
  termsContent?: React.ReactNode,
  description?: string,
  courseKey?: string
): JSX.Element => {
  return courseKey ? (
    <CourseCarousel
      courseKey={courseKey}
      title={title}
      image={images[0]} // Suponiendo que solo hay una imagen para los cursos
      openModal={openModal}
    />
  ) : (
    <ServiceCarousel
      images={images}
      title={title}
      openModal={openModal}
      infoContent={infoContent}
      termsContent={termsContent}
      description={description}
    />
  );
};

export default renderCarousel;
