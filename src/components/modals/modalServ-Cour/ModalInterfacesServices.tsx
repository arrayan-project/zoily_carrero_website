/**
 * Interfaces para definir la estructura de datos del contenido de los modales.
 *
 * @module ModalInterfaces
 * @interface ModalContent
 * @property {string[]} [images] - Opcional, solo si hay imágenes/tab de imágenes.
 * @property {string} [title] - Título del modal.
 * @property {React.ReactNode} [infoContent] - Contenido de información.
 * @property {React.ReactNode} [termsContent] - Contenido de términos.
 * @property {string} [description] - Descripción del modal.
 * @property {boolean} [showTabs] - Para activar/desactivar tabs.
 * @property {React.ReactNode} [children] - Para modales personalizados sin tabs.
 * @property {() => void} [onClose] - Callback para cerrar el modal.
 */
import React from 'react';

export interface ServiceItem {
  name: string;
  price: string;
  description?: string[]; // Array de strings para los puntos de la descripción
}

export interface ModalContent {
  images?: string[]; // Opcional, solo si hay imágenes/tab de imágenes
  title?: string;
  infoContent?: React.ReactNode;
  termsContent?: React.ReactNode;
  description?: string;
  showTabs?: boolean; // Para activar/desactivar tabs
  children?: React.ReactNode; // Para modales personalizados sin tabs
  onClose?: () => void;
  serviceItems?: ServiceItem[]; // Array de items de servicio/curso
}
