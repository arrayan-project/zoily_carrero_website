/**
 * Datos y categorías para la galería de imágenes.
 * Define las categorías disponibles y el título principal de la sección de galería.
 *
 * @module galleryData
 */
export interface Category {
    name: string;
    value: string;
  }
  
  export const galleryCategories: Category[] = [
    { name: "Novia", value: "novia" },
    { name: "Social", value: "social" },
    { name: "Peinado", value: "peinado" },
    { name: "Piel Madura", value: "pielMadura" },
    { name: "Glam", value: "glam" },
    { name: "Quinceañera", value: "quinceañera" },
  ];
  
  export const galleryTitle = "MIRA NUESTROS TRABAJOS";
  export const gallerySubtitle = "— DETALLES";
  