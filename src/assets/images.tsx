/**
 * Módulo centralizado de gestión de imágenes y placeholders optimizados.
 *
 * - Centraliza rutas AVIF/WebP y placeholders Base64 para todas las imágenes usadas en la app.
 * - Exporta el objeto `images` con cada imagen en formatos optimizados y su placeholder.
 * - Exporta agrupaciones listas para usar en componentes como `imageArrays` y `brandImageKeys`.
 *
 * @module assets/images
 */

// Importa placeholders Base64 desde archivos .txt en src/assets/placeholders

//Placeholders para About.tsx
import about1Placeholder from "../assets/placeholders/cert1-lqip.txt?raw";
import about2Placeholder from "../assets/placeholders/cert2-lqip.txt?raw";
import about3Placeholder from "../assets/placeholders/cert3-lqip.txt?raw";
import about4Placeholder from "../assets/placeholders/cert4-lqip.txt?raw";
import about5Placeholder from "../assets/placeholders/cert5-lqip.txt?raw";
import about6Placeholder from "../assets/placeholders/cert6-lqip.txt?raw";
import about7Placeholder from "../assets/placeholders/cert7-lqip.txt?raw";
import about8Placeholder from "../assets/placeholders/cert8-lqip.txt?raw";
import about9Placeholder from "../assets/placeholders/cert9-lqip.txt?raw";
import about10Placeholder from "../assets/placeholders/cert10-lqip.txt?raw";
import about11Placeholder from "../assets/placeholders/cert11-lqip.txt?raw";
import about12Placeholder from "../assets/placeholders/cert12-lqip.txt?raw";
import about13Placeholder from "../assets/placeholders/cert13-lqip.txt?raw";
import about14Placeholder from "../assets/placeholders/cert14-lqip.txt?raw";
import about15Placeholder from "../assets/placeholders/cert15-lqip.txt?raw";

//Placeholders para /services#courses
import avanzadoPlaceHolder from "../assets/placeholders/avanzado-lqip.txt?raw";
import basicoPlaceHolder from "../assets/placeholders/basico-lqip.txt?raw";
import intermedioPlaceHolder from "../assets/placeholders/intermedio-lqip.txt?raw";
import profesionalPlaceHolder from "../assets/placeholders/profesional-lqip.txt?raw";

//Placeholders para marcas en /ugc
import beautyPlusPlaceholder from "../assets/placeholders/BeautyPlus-lqip.txt?raw";
import cetaphilPlaceholder from "../assets/placeholders/cetaphil-lqip.txt?raw";
import esikaPlaceholder from "../assets/placeholders/esika-lqip.txt?raw";
import gilletteVenusPlaceholder from "../assets/placeholders/gillette-venus-lqip.txt?raw";
import neutrogenaPlaceholder from "../assets/placeholders/neutrogena-lqip.txt?raw";
import pantenePlaceholder from "../assets/placeholders/pantene-lqip.txt?raw";

//Placeholders para /services#services
import boda1Placeholder from "../assets/placeholders/boda1-lqip.txt?raw";
import bodaPlaceholder from "../assets/placeholders/boda-lqip.txt?raw";
import social1Placeholder from "../assets/placeholders/social1-lqip.txt?raw";
import social2Placeholder from "../assets/placeholders/social2conpeinado-lqip.txt?raw";
import social5Placeholder from "../assets/placeholders/social5pielmadura-lqip.txt?raw";
import social6Placeholder from "../assets/placeholders/social6-lqip.txt?raw";
import social7Placeholder from "../assets/placeholders/social7-lqip.txt?raw";
import social8Placeholder from "../assets/placeholders/social8copeinado-lqip.txt?raw";
import social10Placeholder from "../assets/placeholders/social10-lqip.txt?raw";
import social12Placeholder from "../assets/placeholders/social12-lqip.txt?raw";
import social13Placeholder from "../assets/placeholders/social13-lqip.txt?raw";
import social14Placeholder from "../assets/placeholders/social14pielmadura-lqip.txt?raw";

//Placeholders para UGC.tsx
import ugc1Placeholder from "../assets/placeholders/ugc1-lqip.txt?raw";
import ugc2Placeholder from "../assets/placeholders/ugc2-lqip.txt?raw";
import ugc3Placeholder from "../assets/placeholders/ugc3-lqip.txt?raw";
import ugc4Placeholder from "../assets/placeholders/ugc4-lqip.txt?raw";
import phoneUGCPlaceholder from "../assets/placeholders/phoneugc-lqip.txt?raw";

//Placeholder varios
import zoilyNegroPlaceholder from "../assets/placeholders/zoilynegro-lqip.txt?raw";
import zoilynegroheroPlaceholder from "../assets/placeholders/zoilynegrohero-lqip.txt?raw";
import zoilynegroheromPlaceholder from "../assets/placeholders/zoilynegroherom-lqip.txt?raw";
import zoilywhite2Placeholder from "../assets/placeholders/zoilywhite2-lqip.txt?raw";
import bgHome2Placeholder from "../assets/placeholders/bg-home2-lqip.txt?raw";
import bgHome2MPlaceholder from "../assets/placeholders/bg-home2-m-lqip.txt?raw";
import logoblack2Placeholder from "../assets/placeholders/logoblack2-lqip.txt?raw";
import logowhite2Placeholder from "../assets/placeholders/logowhite2-lqip.txt?raw";
import ChatGPTPlaceholder from "../assets/placeholders/ChatGPTImage-lqip.txt?raw";

//Placeholders para galery.tsx
import noviaG1Placeholder from "../assets/placeholders/noviaG1-lqip.txt?raw";
import noviaG2Placeholder from "../assets/placeholders/noviaG2-lqip.txt?raw";
import noviaG3Placeholder from "../assets/placeholders/noviaG3-lqip.txt?raw";
import noviaG4Placeholder from "../assets/placeholders/noviaG4-lqip.txt?raw";
import noviaG5Placeholder from "../assets/placeholders/noviaG5-lqip.txt?raw";
import socialG1Placeholder from "../assets/placeholders/socialG1-lqip.txt?raw";
import socialG2Placeholder from "../assets/placeholders/socialG2-lqip.txt?raw";
import socialG3Placeholder from "../assets/placeholders/socialG3-lqip.txt?raw";
import socialG4Placeholder from "../assets/placeholders/socialG4-lqip.txt?raw";
import socialG5Placeholder from "../assets/placeholders/socialG5-lqip.txt?raw";
import socialG6Placeholder from "../assets/placeholders/socialG6-lqip.txt?raw";
import socialG7Placeholder from "../assets/placeholders/socialG7-lqip.txt?raw";
import socialG8Placeholder from "../assets/placeholders/socialG8-lqip.txt?raw";
import socialG9Placeholder from "../assets/placeholders/socialG9-lqip.txt?raw";
import socialG10Placeholder from "../assets/placeholders/socialG10-lqip.txt?raw";
import peinadoG1Placeholder from "../assets/placeholders/peinadoG1-lqip.txt?raw";
import peinadoG2Placeholder from "../assets/placeholders/peinadoG2-lqip.txt?raw";
import peinadoG3Placeholder from "../assets/placeholders/peinadoG3-lqip.txt?raw";
import peinadoG4Placeholder from "../assets/placeholders/peinadoG4-lqip.txt?raw";
import peinadoG5Placeholder from "../assets/placeholders/peinadoG5-lqip.txt?raw";
import peinadoG6Placeholder from "../assets/placeholders/peinadoG6-lqip.txt?raw";
import peinadoG7Placeholder from "../assets/placeholders/peinadoG7-lqip.txt?raw";
import glamG1Placeholder from "../assets/placeholders/glamG1-lqip.txt?raw";
import glamG2Placeholder from "../assets/placeholders/glamG2-lqip.txt?raw";
import glamG3Placeholder from "../assets/placeholders/glamG3-lqip.txt?raw";
import glamG4Placeholder from "../assets/placeholders/glamG4-lqip.txt?raw";
import glamG5Placeholder from "../assets/placeholders/glamG5-lqip.txt?raw";
import glamG6Placeholder from "../assets/placeholders/glamG6-lqip.txt?raw";
import glamG7Placeholder from "../assets/placeholders/glamG7-lqip.txt?raw";
import glamG8Placeholder from "../assets/placeholders/glamG8-lqip.txt?raw";
import glamG9Placeholder from "../assets/placeholders/glamG9-lqip.txt?raw";
import glamG10Placeholder from "../assets/placeholders/glamG10-lqip.txt?raw";
import maduraG1Placeholder from "../assets/placeholders/maduraG1-lqip.txt?raw";
import maduraG2Placeholder from "../assets/placeholders/maduraG2-lqip.txt?raw";
import maduraG3Placeholder from "../assets/placeholders/maduraG3-lqip.txt?raw";
import maduraG4Placeholder from "../assets/placeholders/maduraG4-lqip.txt?raw";
import maduraG5Placeholder from "../assets/placeholders/maduraG5-lqip.txt?raw";
import maduraG6Placeholder from "../assets/placeholders/maduraG6-lqip.txt?raw";
import maduraG7Placeholder from "../assets/placeholders/maduraG7-lqip.txt?raw";
import maduraG8Placeholder from "../assets/placeholders/maduraG8-lqip.txt?raw";
import xpressG1Placeholder from "../assets/placeholders/xpressG1-lqip.txt?raw";
import xpressG2Placeholder from "../assets/placeholders/xpressG2-lqip.txt?raw";
import xpressG3Placeholder from "../assets/placeholders/xpressG3-lqip.txt?raw";

//Placeholders para secciones en Home.tsx
import homecourses1Placeholder from "../assets/placeholders/home-courses1-lqip.txt?raw";
import homecourses2Placeholder from "../assets/placeholders/home-courses2-lqip.txt?raw";
import homegallery1Placeholder from "../assets/placeholders/home-gallery1-lqip.txt?raw";
import homeservices1Placeholder from "../assets/placeholders/home-services1-lqip.txt?raw";
import homeugcPlaceholder from "../assets/placeholders/home-ugc1-lqip.txt?raw";

//Placeholders para marcas en Home.tsx
import diorPlaceholder from "../assets/placeholders/dior-lqip.txt?raw";
import chanelPlaceholder from "../assets/placeholders/chanel-lqip.txt?raw";
import esteePlaceholder from "../assets/placeholders/estee-lqip.txt?raw";
import macPlaceholder from "../assets/placeholders/mac-lqip.txt?raw";
import maybellinePlaceholder from "../assets/placeholders/maybelline-lqip.txt?raw";
import narsPlaceholder from "../assets/placeholders/nars-lqip.txt?raw";
import revlonPlaceholder from "../assets/placeholders/revlon-lqip.txt?raw";
import urbanPlaceholder from "../assets/placeholders/urban-lqip.txt?raw";
import yvesPlaceholder from "../assets/placeholders/yves-lqip.txt?raw";

// Define formato de cada imagen
export type Image = {
  avif: string;
  webp: string;
  placeholder?: string;
};

// Define agrupaciones de imágenes
export type ImageArray = {
  [key: string]: string[];
};

// Mapeo de imágenes en formatos AVIF y WebP con placeholders
const images: Record<string, Image> = {
  //Imagenes para seccion Services.tsx
  novia: {
    avif: "/img/services/boda.avif",
    webp: "/img/services/boda.webp",
    placeholder: bodaPlaceholder,
  },
  novia1: {
    avif: "/img/services/boda1.avif",
    webp: "/img/services/boda1.webp",
    placeholder: boda1Placeholder,
  },
  social: {
    avif: "/img/services/social6.avif",
    webp: "/img/services/social6.webp",
    placeholder: social6Placeholder,
  },
  social2: {
    avif: "/img/services/social10.avif",
    webp: "/img/services/social10.webp",
    placeholder: social10Placeholder,
  },
  m_peinado: {
    avif: "/img/services/social8copeinado.avif",
    webp: "/img/services/social8copeinado.webp",
    placeholder: social8Placeholder,
  },
  m_peinado2: {
    avif: "/img/services/social2conpeinado.avif",
    webp: "/img/services/social2conpeinado.webp",
    placeholder: social2Placeholder,
  },
  pmadura: {
    avif: "/img/services/social14pielmadura.avif",
    webp: "/img/services/social14pielmadura.webp",
    placeholder: social14Placeholder,
  },
  pmadura2: {
    avif: "/img/services/social5pielmadura.avif",
    webp: "/img/services/social5pielmadura.webp",
    placeholder: social5Placeholder,
  },
  glam: {
    avif: "/img/services/social12.avif",
    webp: "/img/services/social12.webp",
    placeholder: social12Placeholder,
  },
  glam2: {
    avif: "/img/services/social13.avif",
    webp: "/img/services/social13.webp",
    placeholder: social13Placeholder,
  },
  express: {
    avif: "/img/services/social1.avif",
    webp: "/img/services/social1.webp",
    placeholder: social1Placeholder,
  },
  express2: {
    avif: "/img/services/social7.avif",
    webp: "/img/services/social7.webp",
    placeholder: social7Placeholder,
  },
  serviceSectionBG: {
    avif: "/img/services/ChatGPTImage.avif",
    webp: "/img/services/ChatGPTImage.webp",
    placeholder: ChatGPTPlaceholder,
  },

  zoilyblack: {
    avif: "/img/zoilynegro.avif",
    webp: "/img/zoilynegro.webp",
    placeholder: zoilyNegroPlaceholder,
  },
  zoilyblackugc: {
    avif: "/img/zoilynegro.avif",
    webp: "/img/zoilynegro.webp",
    placeholder: zoilyNegroPlaceholder,
  },

  //Imagenes para seccion UGC.tsx
  ugc1: {
    avif: "/img/ugc/ugc1.avif",
    webp: "/img/ugc/ugc1.webp",
    placeholder: ugc1Placeholder,
  },
  ugc2: {
    avif: "/img/ugc/ugc2.avif",
    webp: "/img/ugc/ugc2.webp",
    placeholder: ugc2Placeholder,
  },
  ugc3: {
    avif: "/img/ugc/ugc3.avif",
    webp: "/img/ugc/ugc3.webp",
    placeholder: ugc3Placeholder,
  },
  ugc4: {
    avif: "/img/ugc/ugc4.avif",
    webp: "/img/ugc/ugc4.webp",
    placeholder: ugc4Placeholder,
  },
  phone: {
    avif: "/img/ugc/phoneugc.avif",
    webp: "/img/ugc/phoneugc.png",
    placeholder: phoneUGCPlaceholder,
  },
  ugcBrandLogo1: {
    avif: "/img/ugc/BeautyPlus.avif",
    webp: "/img/ugc/BeautyPlus.png",
    placeholder: beautyPlusPlaceholder,
  },
  ugcBrandLogo2: {
    avif: "/img/ugc/cetaphil.avif",
    webp: "/img/ugc/cetaphil.png",
    placeholder: cetaphilPlaceholder,
  },
  ugcBrandLogo3: {
    avif: "/img/ugc/esika.avif",
    webp: "/img/ugc/esika.png",
    placeholder: esikaPlaceholder,
  },
  ugcBrandLogo4: {
    avif: "/img/ugc/gillette-venus.avif",
    webp: "/img/ugc/gillette-venus.png",
    placeholder: gilletteVenusPlaceholder,
  },
  ugcBrandLogo5: {
    avif: "/img/ugc/neutrogena.avif",
    webp: "/img/ugc/neutrogena.png",
    placeholder: neutrogenaPlaceholder,
  },
  ugcBrandLogo6: {
    avif: "/img/ugc/pantene.avif",
    webp: "/img/ugc/pantene.png",
    placeholder: pantenePlaceholder,
  },

  //Imagenes para Services.tsx /services#courses
  cbasico: {
    avif: "/img/cursos/basico.avif",
    webp: "/img/cursos/basico.webp",
    placeholder: basicoPlaceHolder,
  },
  cintermedio: {
    avif: "/img/cursos/intermedio.avif",
    webp: "/img/cursos/intermedio.webp",
    placeholder: intermedioPlaceHolder,
  },
  cavanzado: {
    avif: "/img/cursos/avanzado.avif",
    webp: "/img/cursos/avanzado.webp",
    placeholder: avanzadoPlaceHolder,
  },
  cprofesional: {
    avif: "/img/cursos/profesional.avif",
    webp: "/img/cursos/profesional.webp",
    placeholder: profesionalPlaceHolder,
  },

  //Imagenes para About.tsx
  about1: {
    avif: "/img/about/cert1.avif",
    webp: "/img/about/cert1.webp",
    placeholder: about1Placeholder,
  },
  about2: {
    avif: "/img/about/cert2.avif",
    webp: "/img/about/cert2.webp",
    placeholder: about2Placeholder,
  },
  about3: {
    avif: "/img/about/cert3.avif",
    webp: "/img/about/cert3.webp",
    placeholder: about3Placeholder,
  },
    about4: {
    avif: "/img/about/cert4.avif",
    webp: "/img/about/cert4.webp",
    placeholder: about4Placeholder,
  },
    about5: {
    avif: "/img/about/cert5.avif",
    webp: "/img/about/cert5.webp",
    placeholder: about5Placeholder,
  },
    about6: {
    avif: "/img/about/cert6.avif",
    webp: "/img/about/cert6.webp",
    placeholder: about6Placeholder,
  },
    about7: {
    avif: "/img/about/cert7.avif",
    webp: "/img/about/cert7.webp",
    placeholder: about7Placeholder,
  },
    about8: {
    avif: "/img/about/cert8.avif",
    webp: "/img/about/cert8.webp",
    placeholder: about8Placeholder,
  },
    about9: {
    avif: "/img/about/cert9.avif",
    webp: "/img/about/cert9.webp",
    placeholder: about9Placeholder,
  },
    about10: {
    avif: "/img/about/cert10.avif",
    webp: "/img/about/cert10.webp",
    placeholder: about10Placeholder,
  },
    about11: {
    avif: "/img/about/cert11.avif",
    webp: "/img/about/cert11.webp",
    placeholder: about11Placeholder,
  },
    about12: {
    avif: "/img/about/cert12.avif",
    webp: "/img/about/cert12.webp",
    placeholder: about12Placeholder,
  },
    about13: {
    avif: "/img/about/cert13.avif",
    webp: "/img/about/cert13.webp",
    placeholder: about13Placeholder,
  },
    about14: {
    avif: "/img/about/cert14.avif",
    webp: "/img/about/cert14.webp",
    placeholder: about14Placeholder,
  },
    about15: {
    avif: "/img/about/cert15.avif",
    webp: "/img/about/cert15.webp",
    placeholder: about15Placeholder,
  },

  //Imagenes para logo
  logowhite: {
    avif: "/img/logo/logowhite2.avif",
    webp: "/img/logo/logowhite2.webp",
    placeholder: logowhite2Placeholder,
  },
  logoblack: {
    avif: "/img/logo/logoblack2.avif",
    webp: "/img/logo/logoblack2.webp",
    placeholder: logoblack2Placeholder,
  },

  zoilynegrohero: {
    avif: "/img/zoilynegrohero.avif",
    webp: "/img/zoilynegrohero.webp",
    placeholder: zoilynegroheroPlaceholder,
  },
  zoilynegroherom: {
    avif: "/img/zoilynegroherom.avif",
    webp: "/img/zoilynegroherom.webp",
    placeholder: zoilynegroheromPlaceholder,
  }, 

  backgroundHome2: {
    avif: "/img/background-home/bg-home2.avif",
    webp: "/img/background-home/bg-home2.webp",
    placeholder: bgHome2Placeholder,
  },
    backgroundHome2m: {
    avif: "/img/background-home/bg-home2-m.avif",
    webp: "/img/background-home/bg-home2-m.webp",
    placeholder: bgHome2MPlaceholder,
  },
  zoilywhite2: {
    avif: "/img/zoilywhite2.avif",
    webp: "/img/zoilywhite2.webp",
    placeholder: zoilywhite2Placeholder,
  },

  //Imagenes para HomeLinksSection.tsx
  "home-services": {
    webp: "/img/background-home/home-sections/home-services1.webp",
    avif: "/img/background-home/home-sections/home-services1.avif",
    placeholder: homeservices1Placeholder,
  },
  "home-courses": {
    webp: "/img/background-home/home-sections/home-courses1.webp",
    avif: "/img/background-home/home-sections/home-courses1.avif",
    placeholder: homecourses1Placeholder,
  },
  "home-ugc": {
    webp: "/img/background-home/home-sections/home-ugc1.webp",
    avif: "/img/background-home/home-sections/home-ugc1.avif",
    placeholder: homeugcPlaceholder,
  },
  //Imagenes para HomeFeaturesSection.tsx
  "home-courses2": {
    webp: "/img/background-home/home-sections/home-courses2.webp",
    avif: "/img/background-home/home-sections/home-courses2.avif",
    placeholder: homecourses2Placeholder,
  },
  //Imagenes para HomeGallerySection.tsx
  "home-gallery": {
    webp: "/img/background-home/home-sections/home-gallery1.webp",
    avif: "/img/background-home/home-sections/home-gallery1.avif",
    placeholder: homegallery1Placeholder,
  },
  //Iconos para HomeBrandsSection.tsx
  chanel: {
    webp: "/img/icon-brands/chanel.png",
    avif: "/img/icon-brands/chanel.avif",
    placeholder: chanelPlaceholder,
  },
  dior: {
    webp: "/img/icon-brands/dior.png",
    avif: "/img/icon-brands/dior.avif",
    placeholder: diorPlaceholder,
  },
  yves: {
    webp: "/img/icon-brands/yves.png",
    avif: "/img/icon-brands/yves.avif",
    placeholder: yvesPlaceholder,
  },
  estee: {
    webp: "/img/icon-brands/estee.png",
    avif: "/img/icon-brands/estee.avif",
    placeholder: esteePlaceholder,
  },
  nars: {
    webp: "/img/icon-brands/nars.png",
    avif: "/img/icon-brands/nars.avif",
    placeholder: narsPlaceholder,
  },
  maybelline: {
    webp: "/img/icon-brands/maybelline.png",
    avif: "/img/icon-brands/maybelline.avif",
    placeholder: maybellinePlaceholder,
  },
  revlon: {
    webp: "/img/icon-brands/revlon.png",
    avif: "/img/icon-brands/revlon.avif",
    placeholder: revlonPlaceholder,
  },
  urban: {
    webp: "/img/icon-brands/urban.png",
    avif: "/img/icon-brands/urban.avif",
    placeholder: urbanPlaceholder,
  },
  mac: {
    webp: "/img/icon-brands/mac.png",
    avif: "/img/icon-brands/mac.avif",
    placeholder: macPlaceholder,
  },

  //Imagenes para Gallery.tsx
  noviaG1: {
    webp: "/img/gallery/noviaG1.webp",
    avif: "/img/gallery/noviaG1.avif",
    placeholder: noviaG1Placeholder,
  },
  noviaG2: {
    webp: "/img/gallery/noviaG2.webp",
    avif: "/img/gallery/noviaG2.avif",
    placeholder: noviaG2Placeholder,
  },
  noviaG3: {
    webp: "/img/gallery/noviaG3.webp",
    avif: "/img/gallery/noviaG3.avif",
    placeholder: noviaG3Placeholder,
  },
  noviaG4: {
    webp: "/img/gallery/noviaG4.webp",
    avif: "/img/gallery/noviaG4.avif",
    placeholder: noviaG4Placeholder,
  },
  noviaG5: {
    webp: "/img/gallery/noviaG5.webp",
    avif: "/img/gallery/noviaG5.avif",
    placeholder: noviaG5Placeholder,
  },
  socialG1: {
    webp: "/img/gallery/socialG1.webp",
    avif: "/img/gallery/socialG1.avif",
    placeholder: socialG1Placeholder,
  },
  socialG2: {
    webp: "/img/gallery/socialG2.webp",
    avif: "/img/gallery/socialG2.avif",
    placeholder: socialG2Placeholder,
  },
  socialG3: {
    webp: "/img/gallery/socialG3.webp",
    avif: "/img/gallery/socialG3.avif",
    placeholder: socialG3Placeholder,
  },
  socialG4: {
    webp: "/img/gallery/socialG4.webp",
    avif: "/img/gallery/socialG4.avif",
    placeholder: socialG4Placeholder,
  },
  socialG5: {
    webp: "/img/gallery/socialG5.webp",
    avif: "/img/gallery/socialG5.avif",
    placeholder: socialG5Placeholder,
  },
  socialG6: {
    webp: "/img/gallery/socialG6.webp",
    avif: "/img/gallery/socialG6.avif",
    placeholder: socialG6Placeholder,
  },
  socialG7: {
    webp: "/img/gallery/socialG7.webp",
    avif: "/img/gallery/socialG7.avif",
    placeholder: socialG7Placeholder,
  },
  socialG8: {
    webp: "/img/gallery/socialG8.webp",
    avif: "/img/gallery/socialG8.avif",
    placeholder: socialG8Placeholder,
  },
  socialG9: {
    webp: "/img/gallery/socialG9.webp",
    avif: "/img/gallery/socialG9.avif",
    placeholder: socialG9Placeholder,
  },
  socialG10: {
    webp: "/img/gallery/socialG10.webp",
    avif: "/img/gallery/socialG10.avif",
    placeholder: socialG10Placeholder,
  },

  peinadoG1: {
    webp: "/img/gallery/peinadoG1.webp",
    avif: "/img/gallery/peinadoG1.avif",
    placeholder: peinadoG1Placeholder,
  },
  peinadoG2: {
    webp: "/img/gallery/peinadoG2.webp",
    avif: "/img/gallery/peinadoG2.avif",
    placeholder: peinadoG2Placeholder,
  },
  peinadoG3: {
    webp: "/img/gallery/peinadoG3.webp",
    avif: "/img/gallery/peinadoG3.avif",
    placeholder: peinadoG3Placeholder,
  },
  peinadoG4: {
    webp: "/img/gallery/peinadoG4.webp",
    avif: "/img/gallery/peinadoG4.avif",
    placeholder: peinadoG4Placeholder,
  },
  peinadoG5: {
    webp: "/img/gallery/peinadoG5.webp",
    avif: "/img/gallery/peinadoG5.avif",
    placeholder: peinadoG5Placeholder,
  },
  peinadoG6: {
    webp: "/img/gallery/peinadoG6.webp",
    avif: "/img/gallery/peinadoG6.avif",
    placeholder: peinadoG6Placeholder,
  },
  peinadoG7: {
    webp: "/img/gallery/peinadoG7.webp",
    avif: "/img/gallery/peinadoG7.avif",
    placeholder: peinadoG7Placeholder,
  },

  maduraG1: {
    webp: "/img/gallery/maduraG1.webp",
    avif: "/img/gallery/maduraG1.avif",
    placeholder: maduraG1Placeholder,
  },
  maduraG2: {
    webp: "/img/gallery/maduraG2.webp",
    avif: "/img/gallery/maduraG2.avif",
    placeholder: maduraG2Placeholder,
  },
  maduraG3: {
    webp: "/img/gallery/maduraG3.webp",
    avif: "/img/gallery/maduraG3.avif",
    placeholder: maduraG3Placeholder,
  },
  maduraG4: {
    webp: "/img/gallery/maduraG4.webp",
    avif: "/img/gallery/maduraG4.avif",
    placeholder: maduraG4Placeholder,
  },
  maduraG5: {
    webp: "/img/gallery/maduraG5.webp",
    avif: "/img/gallery/maduraG5.avif",
    placeholder: maduraG5Placeholder,
  },
  maduraG6: {
    webp: "/img/gallery/maduraG6.webp",
    avif: "/img/gallery/maduraG6.avif",
    placeholder: maduraG6Placeholder,
  },
  maduraG7: {
    webp: "/img/gallery/maduraG7.webp",
    avif: "/img/gallery/maduraG7.avif",
    placeholder: maduraG7Placeholder,
  },
  maduraG8: {
    webp: "/img/gallery/maduraG8.webp",
    avif: "/img/gallery/maduraG8.avif",
    placeholder: maduraG8Placeholder,
  },

  glamG1: {
    webp: "/img/gallery/glamG1.webp",
    avif: "/img/gallery/glamG1.avif",
    placeholder: glamG1Placeholder,
  },
  glamG2: {
    webp: "/img/gallery/glamG2.webp",
    avif: "/img/gallery/glamG2.avif",
    placeholder: glamG2Placeholder,
  },
  glamG3: {
    webp: "/img/gallery/glamG3.webp",
    avif: "/img/gallery/glamG3.avif",
    placeholder: glamG3Placeholder,
  },
  glamG4: {
    webp: "/img/gallery/glamG4.webp",
    avif: "/img/gallery/glamG4.avif",
    placeholder: glamG4Placeholder,
  },
  glamG5: {
    webp: "/img/gallery/glamG5.webp",
    avif: "/img/gallery/glamG5.avif",
    placeholder: glamG5Placeholder,
  },
  glamG6: {
    webp: "/img/gallery/glamG6.webp",
    avif: "/img/gallery/glamG6.avif",
    placeholder: glamG6Placeholder,
  },
  glamG7: {
    webp: "/img/gallery/glamG7.webp",
    avif: "/img/gallery/glamG7.avif",
    placeholder: glamG7Placeholder,
  },
  glamG8: {
    webp: "/img/gallery/glamG8.webp",
    avif: "/img/gallery/glamG8.avif",
    placeholder: glamG8Placeholder,
  },
  glamG9: {
    webp: "/img/gallery/glamG9.webp",
    avif: "/img/gallery/glamG9.avif",
    placeholder: glamG9Placeholder,
  },
  glamG10: {
    webp: "/img/gallery/glamG10.webp",
    avif: "/img/gallery/glamG10.avif",
    placeholder: glamG10Placeholder,
  },

  xpressG1: {
    webp: "/img/gallery/xpressG1.webp",
    avif: "/img/gallery/xpressG1.avif",
    placeholder: xpressG1Placeholder,
  },
  xpressG2: {
    webp: "/img/gallery/xpressG2.webp",
    avif: "/img/gallery/xpressG2.avif",
    placeholder: xpressG2Placeholder,
  },
  xpressG3: {
    webp: "/img/gallery/xpressG3.webp",
    avif: "/img/gallery/xpressG3.avif",
    placeholder: xpressG3Placeholder,
  },
};


//Array de claves para las marcas
const brandImageKeys = [
  "chanel",
  "dior",
  "yves",
  "estee",
  "nars",
  "maybelline",
  "revlon",
  "urban",
  "mac",
];

// Agrupaciones de rutas WebP listas para usar
const imageArrays: ImageArray = {
  serviceBrideImages: [images.novia.webp, images.novia1.webp],
  serviceSocialImages: [images.social.webp, images.social2.webp],
  serviceHairAndMakeupImages: [images.m_peinado.webp, images.m_peinado2.webp],
  serviceMatureSkinImages: [images.pmadura.webp, images.pmadura2.webp],
  serviceGlamImages: [images.glam.webp, images.glam2.webp],
  serviceExpressImages: [images.express.webp, images.express2.webp],

  galleryBrideImages: [
    "noviaG1", 
    "noviaG2", 
    "noviaG3", 
    "noviaG4", 
    "noviaG5"
  ],
  gallerySocialImages: [
    "socialG1",
    "socialG2",
    "socialG3",
    "socialG4",
    "socialG5",
    "socialG6",
    "socialG7",
    "socialG8",
    "socialG9",
    "socialG10",
  ],
  galleryHairAndMakeupImages: [
    "peinadoG1",
    "peinadoG2",
    "peinadoG3",
    "peinadoG4",
    "peinadoG5",
    "peinadoG6",
    "peinadoG7",
  ],
  galleryMatureSkinImages: [
    "maduraG1",
    "maduraG2",
    "maduraG3",
    "maduraG4",
    "maduraG5",
    "maduraG6",
    "maduraG7",
    "maduraG8",
  ],
  galleryGlamImages: [
    "glamG1",
    "glamG2",
    "glamG3",
    "glamG4",
    "glamG5",
    "glamG6",
    "glamG7",
    "glamG8",
    "glamG9",
    "glamG10",
  ],
  galleryQuinceañeraImages: [
    "xpressG1", 
    "xpressG2", 
    "xpressG3"
  ],

  backgrounds: ["/img/background-home/background0.webp"],
};

export { imageArrays, brandImageKeys };
export default images;
