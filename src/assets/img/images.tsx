/*
##### Función #####
- Actúa como un módulo de gestión de activos (assets), específicamente imágenes.
- Centralizar las importaciones de todas las imágenes utilizadas en la aplicación.
- Exportar un objeto images que contiene referencias a todas esas imágenes, facilitando su acceso en otros componentes.
- Exportar arrays de imagenes, segun su seccion o categoria.
*/

// src/assets/img/images.tsx
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
// Importaciones para los banner de cada componente
// ==============================================
/**
 *  Banners para la pagina de servicios
 */
import servicesBannerUp from "../img/banner/services-banner-top.webp";
import servicesBannerBottom from "../img/banner/services-banner-bottom.webp";
/**
 * Banners para la pagina de galeria
 */
import galleryBannerUp from "../img/banner/gallery-banner-top.webp";
import galleryBannerBottom from "../img/banner/gallery-banner-bottom.webp";
/**
 * Banners para la pagina de acerca de mi
 */
import aboutBannerUp from "../img/banner/about-banner-top.webp";
import aboutBannerBottom from "../img/banner/about-banner-bottom.webp";
/**
 * Banners para la pagina de contacto
 */
import contactBannerUp from "../img/banner/contact-banner-top.webp";
import contactBannerBottom from "../img/banner/contact-banner-bottom.webp";

// ==============================================
// Importaciones para seccion services
// ==============================================
/**
 *  Imagenes para la categoria de novias
 */
import novia from "../img/services/boda.webp";
import novia1 from "../img/services/boda1.webp";
/**
 *  Imagenes para la categoria de social
 */
import social from "../img/services/social6.webp";
import social2 from "../img/services/social10.webp";
/**
 *  Imagenes para la categoria de peinado y maquillaje
 */
import m_peinado from "../img/services/social8copeinado.webp";
import m_peinado2 from "../img/services/social2conpeinado.webp";
/**
 *  Imagenes para la categoria de piel madura
 */
import pmadura from "../img/services/social14pielmadura.webp";
import pmadura2 from "../img/services/social5pielmadura.webp";
/**
 *  Imagenes para la categoria de glam
 */
import glam from "../img/services/social12.webp";
import glam2 from "../img/services/social13.webp";
/**
 *  Imagenes para la categoria de express
 */
import express from "../img/services/social1.webp";
import express2 from "../img/services/social7.webp";
/**
 *  Imagen de zoily
 */
import zoilyblack from "../img/zoilynegro.webp";

// ==============================================
// Importaciones para novia gallery section
// ==============================================
/**
 *  Imagenes para la galeria de novias
 */
import novia_gallery1 from "../img/gallery/noviaG1.webp";
import novia_gallery2 from "../img/gallery/noviaG2.webp";
import novia_gallery3 from "../img/gallery/noviaG3.webp";
import novia_gallery4 from "../img/gallery/noviaG4.webp";
import novia_gallery5 from "../img/gallery/noviaG5.webp";

// ==============================================
// Importaciones para social gallery section
// ==============================================
/**
 *  Imagenes para la galeria de social
 */
import social_gallery1 from "../img/gallery/socialG1.webp";
import social_gallery2 from "../img/gallery/socialG2.webp";
import social_gallery3 from "../img/gallery/socialG3.webp";
import social_gallery4 from "../img/gallery/socialG4.webp";
import social_gallery5 from "../img/gallery/socialG5.webp";
import social_gallery6 from "../img/gallery/socialG6.webp";
import social_gallery7 from "../img/gallery/socialG7.webp";
import social_gallery8 from "../img/gallery/socialG8.webp";
import social_gallery9 from "../img/gallery/socialG9.webp";
import social_gallery10 from "../img/gallery/socialG10.webp";

// ==============================================
// Importaciones para peinado gallery section
// ==============================================
/**
 *  Imagenes para la galeria de peinados
 */
import peinado_gallery1 from "../img/gallery/peinadoG1.webp";
import peinado_gallery2 from "../img/gallery/peinadoG2.webp";
import peinado_gallery3 from "../img/gallery/peinadoG3.webp";
import peinado_gallery4 from "../img/gallery/peinadoG4.webp";
import peinado_gallery5 from "../img/gallery/peinadoG5.webp";
import peinado_gallery6 from "../img/gallery/peinadoG6.webp";
import peinado_gallery7 from "../img/gallery/peinadoG7.webp";

// ==============================================
// Importaciones para madura gallery section
// ==============================================
/**
 *  Imagenes para la galeria de pieles maduras
 */
import madura_gallery1 from "../img/gallery/maduraG1.webp";
import madura_gallery2 from "../img/gallery/maduraG2.webp";
import madura_gallery3 from "../img/gallery/maduraG3.webp";
import madura_gallery4 from "../img/gallery/maduraG4.webp";
import madura_gallery5 from "../img/gallery/maduraG5.webp";
import madura_gallery6 from "../img/gallery/maduraG6.webp";
import madura_gallery7 from "../img/gallery/maduraG7.webp";
import madura_gallery8 from "../img/gallery/maduraG8.webp";

// ==============================================
// Importaciones para glam gallery section
// ==============================================
/**
 *  Imagenes para la galeria de glam
 */
import glam_gallery1 from "../img/gallery/glamG1.webp";
import glam_gallery2 from "../img/gallery/glamG2.webp";
import glam_gallery3 from "../img/gallery/glamG3.webp";
import glam_gallery4 from "../img/gallery/glamG4.webp";
import glam_gallery5 from "../img/gallery/glamG5.webp";
import glam_gallery6 from "../img/gallery/glamG6.webp";
import glam_gallery7 from "../img/gallery/glamG7.webp";
import glam_gallery8 from "../img/gallery/glamG8.webp";
import glam_gallery9 from "../img/gallery/glamG9.webp";
import glam_gallery10 from "../img/gallery/glamG10.webp";

// ==============================================
// Importaciones para express gallery section
// ==============================================
/**
 *  Imagenes para la galeria de express
 */
import express_gallery1 from "../img/gallery/xpressG1.webp";
import express_gallery2 from "../img/gallery/xpressG2.webp";
import express_gallery3 from "../img/gallery/xpressG3.webp";

// ==============================================
// Importaciones para background en home
// ==============================================
/**
 *  Imagenes para el background de la seccion home
 */
import background1 from "../img/background-home/background1.webp";
import background2 from "../img/background-home/background2.webp";
import background3 from "../img/background-home/background3.webp";
import background4 from "../img/background-home/background4.webp";
import background5 from "../img/background-home/background5.webp";
import background6 from "../img/background-home/background6.webp";
import background7 from "../img/background-home/background7.webp";

// ==============================================
// Importaciones para seccion ugc
// ==============================================
/**
 *  Imagenes para la seccion ugc
 */
import ugc1 from "../img/ugc/ugc1.webp";
import ugc2 from "../img/ugc/ugc2.webp";
import ugc3 from "../img/ugc/ugc3.webp";
import ugc4 from "../img/ugc/ugc4.webp";
/**
 * Imagen de un telefono
 */
import phone from "../img/ugc/phoneugc.png";

// ==============================================
// Importaciones para las nuevas secciones del home
// ==============================================
/**
 *  Imagenes para las nuevas secciones del home
 */
import homeSection1 from "../img/background-home/home-sections/home-services1.webp";
import homeSection2 from "../img/background-home/home-sections/home-courses1.webp";
import homeSection3 from "../img/background-home/home-sections/home-courses2.webp";
import homeSection4 from "../img/background-home/home-sections/home-ugc1.webp";
import homeSection5 from "../img/background-home/home-sections/home-gallery1.webp";

// ==============================================
// Importaciones para las marcas (icon-brands)
// ==============================================
/**
 *  Imagenes para los logos de las marcas
 */
import brandLogo1 from "../img/icon-brands/chanel.png"; // Cambiado a .png
import brandLogo2 from "../img/icon-brands/dior.png"; // Cambiado a .png
import brandLogo3 from "../img/icon-brands/yves.png"; // Cambiado a .png
import brandLogo4 from "../img/icon-brands/estee.png"; // Cambiado a .png
import brandLogo5 from "../img/icon-brands/nars.png"; // Cambiado a .png
import brandLogo6 from "../img/icon-brands/maybelline.png"; // Cambiado a .png
import brandLogo7 from "../img/icon-brands/revlon.png"; // Cambiado a .png
import brandLogo8 from "../img/icon-brands/urban.png"; // Cambiado a .png
import brandLogo9 from "../img/icon-brands/mac.png"; // Cambiado a .png


/**
 *  Imagenes para los logos de las marcas UGC
 */
import ugcBrandLogo1 from "../img/ugc/BeautyPlus.png"; 
import ugcBrandLogo2 from "../img/ugc/cetaphil.png";
import ugcBrandLogo3 from "../img/ugc/esika.png";
import ugcBrandLogo4 from "../img/ugc/gillette-venus.png";
import ugcBrandLogo5 from "../img/ugc/neutrogena.png";
import ugcBrandLogo6 from "../img/ugc/pantene.png";


// ==============================================
// Objeto con todas las imagenes
// ==============================================
/**
 * Objeto con todas las imagenes importadas.
 */
const images: Image = {
  servicesBannerUp,
  servicesBannerBottom,
  galleryBannerUp,
  galleryBannerBottom,
  aboutBannerUp,
  aboutBannerBottom,
  contactBannerUp,
  contactBannerBottom,
  novia,
  novia1,
  social,
  social2,
  m_peinado,
  m_peinado2,
  pmadura,
  pmadura2,
  glam,
  glam2,
  express,
  express2,
  zoilyblack,
  ugc1,
  ugc2,
  ugc3,
  ugc4,
  phone,
  homeSection1,
  homeSection2,
  homeSection3,
  homeSection4,
  homeSection5,
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
  brandLogo7,
  brandLogo8,
  brandLogo9,
  ugcBrandLogo1,
  ugcBrandLogo2,
  ugcBrandLogo3,
  ugcBrandLogo4,
  ugcBrandLogo5,
  ugcBrandLogo6,
};

// ==============================================
// Array de imagenes
// ==============================================
/**
 * Objeto con todos los arrays de imagenes importadas.
 */
const imageArrays: ImageArray = {
  //Array de imágenes para seccion servicios
  serviceBrideImages: [novia, novia1],
  serviceSocialImages: [social, social2],
  serviceHairAndMakeupImages: [m_peinado, m_peinado2],
  serviceMatureSkinImages: [pmadura, pmadura2],
  serviceGlamImages: [glam, glam2],
  serviceExpressImages: [express, express2],

  //Array de imágenes para seccion gallery
  galleryBrideImages: [
    novia_gallery1,
    novia_gallery2,
    novia_gallery3,
    novia_gallery4,
    novia_gallery5,
  ],

  gallerySocialImages: [
    social_gallery1,
    social_gallery2,
    social_gallery3,
    social_gallery4,
    social_gallery5,
    social_gallery6,
    social_gallery7,
    social_gallery8,
    social_gallery9,
    social_gallery10,
  ],

  galleryHairAndMakeupImages: [
    peinado_gallery1,
    peinado_gallery2,
    peinado_gallery3,
    peinado_gallery4,
    peinado_gallery5,
    peinado_gallery6,
    peinado_gallery7,
  ],

  galleryMatureSkinImages: [
    madura_gallery1,
    madura_gallery2,
    madura_gallery3,
    madura_gallery4,
    madura_gallery5,
    madura_gallery6,
    madura_gallery7,
    madura_gallery8,
  ],

  galleryGlamImages: [
    glam_gallery1,
    glam_gallery2,
    glam_gallery3,
    glam_gallery4,
    glam_gallery5,
    glam_gallery6,
    glam_gallery7,
    glam_gallery8,
    glam_gallery9,
    glam_gallery10,
  ],

  galleryExpressImages: [
    express_gallery1,
    express_gallery2,
    express_gallery3,
  ],
  //Array para los background
  backgrounds: [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
  ],
  //Array para las nuevas secciones del home
  homeSectionsImages: [
    homeSection1,
    homeSection2,
    homeSection3,
    homeSection4,
    homeSection5,
  ],
  //Array de imagenes para las marcas
  brandImages: [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
    brandLogo9,
  ],
};

export { imageArrays };
export default images;
