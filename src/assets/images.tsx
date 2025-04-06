/*
##### Función #####
- Actúa como un módulo de gestión de activos (assets), específicamente imágenes.
- Centralizar las importaciones de todas las imágenes utilizadas en la aplicación.
- Exportar un objeto images que contiene referencias a todas esas imágenes, facilitando su acceso en otros componentes.
- Exportar arrays de imagenes, segun su seccion o categoria.
*/

// src/assets/images.tsx
export {};

// Usar type en vez de interface
export type Image = {
  [key: string]: string;
};

// Usar type en vez de interface
export type ImageArray = {
  [key: string]: string[];
};

// ==============================================
// Objeto con todas las imagenes
// ==============================================
/**
 * Objeto con todas las imagenes importadas.
 */
const images: Image = {
  servicesBannerUp: "/img/banner/services-banner-top.webp",
  servicesBannerBottom: "/img/banner/services-banner-bottom.webp",
  galleryBannerUp: "/img/banner/gallery-banner-top.webp",
  galleryBannerBottom: "/img/banner/gallery-banner-bottom.webp",
  aboutBannerUp: "/img/banner/about-banner-top.webp",
  aboutBannerBottom: "/img/banner/about-banner-bottom.webp",
  contactBannerUp: "/img/banner/contact-banner-top.webp",
  contactBannerBottom: "/img/banner/contact-banner-bottom.webp",
  novia: "/img/services/boda.webp",
  novia1: "/img/services/boda1.webp",
  social: "/img/services/social6.webp",
  social2: "/img/services/social10.webp",
  m_peinado: "/img/services/social8copeinado.webp",
  m_peinado2: "/img/services/social2conpeinado.webp",
  pmadura: "/img/services/social14pielmadura.webp",
  pmadura2: "/img/services/social5pielmadura.webp",
  glam: "/img/services/social12.webp",
  glam2: "/img/services/social13.webp",
  express: "/img/services/social1.webp",
  express2: "/img/services/social7.webp",
  zoilyblack: "/img/zoilynegro.webp",
  ugc1: "/img/ugc/ugc1.webp",
  ugc2: "/img/ugc/ugc2.webp",
  ugc3: "/img/ugc/ugc3.webp",
  ugc4: "/img/ugc/ugc4.webp",
  phone: "/img/ugc/phoneugc.png",
  ugcBrandLogo1: "/img/ugc/BeautyPlus.png",
  ugcBrandLogo2: "/img/ugc/cetaphil.png",
  ugcBrandLogo3: "/img/ugc/esika.png",
  ugcBrandLogo4: "/img/ugc/gillette-venus.png",
  ugcBrandLogo5: "/img/ugc/neutrogena.png",
  ugcBrandLogo6: "/img/ugc/pantene.png",
};

// ==============================================
// Array de imagenes
// ==============================================
/**
 * Objeto con todos los arrays de imagenes importadas.
 */
const imageArrays: ImageArray = {
  //Array de imágenes para seccion servicios
  serviceBrideImages: [images.novia, images.novia1],
  serviceSocialImages: [images.social, images.social2],
  serviceHairAndMakeupImages: [images.m_peinado, images.m_peinado2],
  serviceMatureSkinImages: [images.pmadura, images.pmadura2],
  serviceGlamImages: [images.glam, images.glam2],
  serviceExpressImages: [images.express, images.express2],

  //Array de imágenes para seccion gallery
  galleryBrideImages: [
    "/img/gallery/noviaG1.webp",
    "/img/gallery/noviaG2.webp",
    "/img/gallery/noviaG3.webp",
    "/img/gallery/noviaG4.webp",
    "/img/gallery/noviaG5.webp",
  ],

  gallerySocialImages: [
    "/img/gallery/socialG1.webp",
    "/img/gallery/socialG2.webp",
    "/img/gallery/socialG3.webp",
    "/img/gallery/socialG4.webp",
    "/img/gallery/socialG5.webp",
    "/img/gallery/socialG6.webp",
    "/img/gallery/socialG7.webp",
    "/img/gallery/socialG8.webp",
    "/img/gallery/socialG9.webp",
    "/img/gallery/socialG10.webp",
  ],

  galleryHairAndMakeupImages: [
    "/img/gallery/peinadoG1.webp",
    "/img/gallery/peinadoG2.webp",
    "/img/gallery/peinadoG3.webp",
    "/img/gallery/peinadoG4.webp",
    "/img/gallery/peinadoG5.webp",
    "/img/gallery/peinadoG6.webp",
    "/img/gallery/peinadoG7.webp",
  ],

  galleryMatureSkinImages: [
    "/img/gallery/maduraG1.webp",
    "/img/gallery/maduraG2.webp",
    "/img/gallery/maduraG3.webp",
    "/img/gallery/maduraG4.webp",
    "/img/gallery/maduraG5.webp",
    "/img/gallery/maduraG6.webp",
    "/img/gallery/maduraG7.webp",
    "/img/gallery/maduraG8.webp",
  ],

  galleryGlamImages: [
    "/img/gallery/glamG1.webp",
    "/img/gallery/glamG2.webp",
    "/img/gallery/glamG3.webp",
    "/img/gallery/glamG4.webp",
    "/img/gallery/glamG5.webp",
    "/img/gallery/glamG6.webp",
    "/img/gallery/glamG7.webp",
    "/img/gallery/glamG8.webp",
    "/img/gallery/glamG9.webp",
    "/img/gallery/glamG10.webp",
  ],

  galleryExpressImages: [
    "/img/gallery/xpressG1.webp",
    "/img/gallery/xpressG2.webp",
    "/img/gallery/xpressG3.webp",
  ],
  //Array para los background
  backgrounds: [
    "/img/background-home/background1.webp",
    "/img/background-home/background2.webp",
    "/img/background-home/background3.webp",
    "/img/background-home/background4.webp",
    "/img/background-home/background5.webp",
    "/img/background-home/background6.webp",
    "/img/background-home/background7.webp",
  ],
  //Array para las nuevas secciones del home
  homeSectionsImages: [
    "/img/background-home/home-sections/home-services1.webp",
    "/img/background-home/home-sections/home-courses1.webp",
    "/img/background-home/home-sections/home-courses2.webp",
    "/img/background-home/home-sections/home-ugc1.webp",
    "/img/background-home/home-sections/home-gallery1.webp",
  ],
  //Array de imagenes para las marcas
  brandImages: [
    "/img/icon-brands/chanel.png",
    "/img/icon-brands/dior.png",
    "/img/icon-brands/yves.png",
    "/img/icon-brands/estee.png",
    "/img/icon-brands/nars.png",
    "/img/icon-brands/maybelline.png",
    "/img/icon-brands/revlon.png",
    "/img/icon-brands/urban.png",
    "/img/icon-brands/mac.png",
  ],
};

export { imageArrays };
export default images;
