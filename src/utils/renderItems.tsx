// src/utils/renderItems.ts
import React from 'react';
import { ModalContent } from '../data/servicesData';
import renderCarousel from './renderCarousel';

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
  return renderCarousel(images, title, openModal, infoContent, termsContent, description);
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
