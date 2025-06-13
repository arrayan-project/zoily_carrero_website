/**
 * Utilidad para obtener el objeto de imagen optimizada a partir de una clave.
 * Devuelve rutas para webp, avif y un placeholder, o un placeholder por defecto si no existe la clave.
 *
 * @module getImageObject
 * @param {string} imageKey - Clave de la imagen a buscar en el objeto de imágenes.
 * @returns {ImageObject} Objeto con rutas a webp, avif y placeholder.
 */
import images from "../assets/images";

const DEFAULT_PLACEHOLDER = "/img/placeholder.webp";

export interface ImageObject {
  webp: string;
  avif: string;
  placeholder: string;
  width?: number;
  height?: number;
}

export function getImageObject(imageKey: string): ImageObject {
  const imageObject = images[imageKey];
  if (!imageObject) {
    console.error(`Image not found for key: ${imageKey}`);
    return {
      webp: DEFAULT_PLACEHOLDER,
      avif: DEFAULT_PLACEHOLDER,
      placeholder: DEFAULT_PLACEHOLDER,
    };
  }
  // Asegura que siempre haya jpg y placeholder
  return {
    webp: imageObject.webp || DEFAULT_PLACEHOLDER,
    avif: imageObject.avif || DEFAULT_PLACEHOLDER,
    placeholder: imageObject.placeholder || DEFAULT_PLACEHOLDER,
  };
}