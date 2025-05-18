/*
##### Función #####
- Actúa como un módulo de gestión de assets de imágenes.
- Centraliza rutas AVIF/WebP y placeholders Base64.
- Exporta `images` con cada imagen en formatos optimizados.
- Exporta `imageArrays` con agrupaciones listas para usar.
*/

// src/assets/images.tsx

// Importa placeholders Base64 desde archivos .txt en src/assets/placeholders
import about1Placeholder from "../assets/placeholders/about1-lqip.txt?raw";
import about2Placeholder from "../assets/placeholders/about2-lqip.txt?raw";
import about3Placeholder from "../assets/placeholders/about3-lqip.txt?raw";
import avanzadoPlaceHolder from "../assets/placeholders/avanzado-lqip.txt?raw";
import basicoPlaceHolder from "../assets/placeholders/basico-lqip.txt?raw";
import intermedioPlaceHolder from "../assets/placeholders/intermedio-lqip.txt?raw";
import profesionalPlaceHolder from "../assets/placeholders/profesional-lqip.txt?raw";
import beautyPlusPlaceholder from "../assets/placeholders/BeautyPlus-lqip.txt?raw";
import bghomeDPlaceholder from "../assets/placeholders/bg-home-d-lqip.txt?raw";
import bghomeMPlaceholder from "../assets/placeholders/bg-home-m-lqip.txt?raw";
import bgHomePlaceholder from "../assets/placeholders/bg-home-lqip.txt?raw";
import boda1Placeholder from "../assets/placeholders/boda1-lqip.txt?raw";
import bodaPlaceholder from "../assets/placeholders/boda-lqip.txt?raw";
import cetaphilPlaceholder from "../assets/placeholders/cetaphil-lqip.txt?raw";
import ChatGPTPlaceholder from "../assets/placeholders/ChatGPTImage-lqip.txt?raw";
import esikaPlaceholder from "../assets/placeholders/esika-lqip.txt?raw";
import gilletteVenusPlaceholder from "../assets/placeholders/gillette-venus-lqip.txt?raw";
import logoblack2Placeholder from "../assets/placeholders/logoblack2-lqip.txt?raw";
import logowhite2Placeholder from "../assets/placeholders/logowhite2-lqip.txt?raw";
import neutrogenaPlaceholder from "../assets/placeholders/neutrogena-lqip.txt?raw";
import pantenePlaceholder from "../assets/placeholders/pantene-lqip.txt?raw";
import phoneUGCPlaceholder from "../assets/placeholders/phoneugc-lqip.txt?raw";
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
import ugc1Placeholder from "../assets/placeholders/ugc1-lqip.txt?raw";
import ugc2Placeholder from "../assets/placeholders/ugc2-lqip.txt?raw";
import ugc3Placeholder from "../assets/placeholders/ugc3-lqip.txt?raw";
import ugc4Placeholder from "../assets/placeholders/ugc4-lqip.txt?raw";
import zoilyNegroPlaceholder from "../assets/placeholders/zoilynegro-lqip.txt?raw";
import zoilynegroheroPlaceholder from "../assets/placeholders/zoilynegrohero-lqip.txt?raw";

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
  }, // Asumiendo que usa el mismo placeholder que zoilyblack
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
  about1: {
    avif: "/img/about/about1.avif",
    webp: "/img/about/about1.webp",
    placeholder: about1Placeholder,
  },
  about2: {
    avif: "/img/about/about2.avif",
    webp: "/img/about/about2.webp",
    placeholder: about2Placeholder,
  },
  about3: {
    avif: "/img/about/about3.avif",
    webp: "/img/about/about3.webp",
    placeholder: about3Placeholder,
  },
  // Placeholders específicos
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
  heroBackgroundD: {
    avif: "/img/background-home/bg-home-d.avif",
    webp: "/img/background-home/bg-home-d.webp",
    placeholder: bghomeDPlaceholder,
  }, 
  heroBackgroundM: {
    avif: "/img/background-home/bg-home-m.avif",
    webp: "/img/background-home/bg-home-m.webp",
    placeholder: bghomeMPlaceholder,
  }, 
  heroBackground: {
    avif: "/img/background-home/bg-home.avif",
    webp: "/img/background-home/bg-home.webp",
    placeholder: bgHomePlaceholder,
  },
  zoilynegrohero: {
    avif: "/img/zoilynegrohero.avif",
    webp: "/img/zoilynegrohero.webp",
    placeholder: zoilynegroheroPlaceholder,
  },
};

// Agrupaciones de rutas WebP listas para usar
const imageArrays: ImageArray = {
  serviceBrideImages: [images.novia.webp, images.novia1.webp],
  serviceSocialImages: [images.social.webp, images.social2.webp],
  serviceHairAndMakeupImages: [images.m_peinado.webp, images.m_peinado2.webp],
  serviceMatureSkinImages: [images.pmadura.webp, images.pmadura2.webp],
  serviceGlamImages: [images.glam.webp, images.glam2.webp],
  serviceExpressImages: [images.express.webp, images.express2.webp],

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
  backgrounds: [
    "/img/background-home/background0.webp"
  ],
  homeSectionsImages: [
    "/img/background-home/home-sections/home-services1.webp",
    "/img/background-home/home-sections/home-courses1.webp",
    "/img/background-home/home-sections/home-courses2.webp",
    "/img/background-home/home-sections/home-ugc1.webp",
    "/img/background-home/home-sections/home-gallery1.webp",
  ],
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
