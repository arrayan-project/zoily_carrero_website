/**
 * Constantes de imágenes para las distintas categorías de la galería.
 * Importa los arrays de imágenes desde assets y los exporta con nombres descriptivos.
 *
 * @module galleryConstants
 * @constant {string[]} noviaGalleryImages - Imágenes de la galería de novias.
 * @constant {string[]} socialGalleryImages - Imágenes de la galería social.
 * @constant {string[]} peinadoGalleryImages - Imágenes de peinado y maquillaje.
 * @constant {string[]} pielMaduraGalleryImages - Imágenes de piel madura.
 * @constant {string[]} glamGalleryImages - Imágenes de galería glam.
 * @constant {string[]} expressGalleryImages - Imágenes de galería express.
 */
import { imageArrays } from "../assets/images";

const {
  galleryBrideImages,
  gallerySocialImages,
  galleryHairAndMakeupImages,
  galleryMatureSkinImages,
  galleryGlamImages,
  galleryExpressImages,
} = imageArrays;

export const noviaGalleryImages = galleryBrideImages;
export const socialGalleryImages = gallerySocialImages;
export const peinadoGalleryImages = galleryHairAndMakeupImages;
export const pielMaduraGalleryImages = galleryMatureSkinImages;
export const glamGalleryImages = galleryGlamImages;
export const expressGalleryImages = galleryExpressImages;
