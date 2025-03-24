// src/utils/galleryUtils.ts
import {
    noviaGalleryImages,
    socialGalleryImages,
    peinadoGalleryImages,
    pielMaduraGalleryImages,
    glamGalleryImages,
    expressGalleryImages,
  } from "../constants/galleryConstants";
  
  export const getImagesForCategory = (selectedCategory: string): string[] => {
    const categoryMap: { [key: string]: string[] } = {
      novia: noviaGalleryImages,
      social: socialGalleryImages,
      peinado: peinadoGalleryImages,
      pielMadura: pielMaduraGalleryImages,
      glam: glamGalleryImages,
      express: expressGalleryImages,
      all: noviaGalleryImages, // Default category
    };
  
    return categoryMap[selectedCategory] || noviaGalleryImages;
  };
  