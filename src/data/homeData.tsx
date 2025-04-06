// src/data/homeData.ts
import { imageArrays } from "../assets/images";

export const homeInfo = {
  title: "ZOILY CARRERO",
  subtitle: "SERVICIOS PROFESIONALES DE MAQUILLAJE Y PEINADOS",
  button1Text: "Ver Servicios",
  button2Text: "Agenda tu cita",
};

export const homeLinks = {
  title: "Explora Nuestros Servicios",
  subtitle: "Mereces descubrir todo lo que podemos ofrecer y hacer por ti.",
  subtitle1: "Acompañanos y acepta el regalo de ser tu mejor versión.",
  links: [
    {
      id: "link-services", // Unique ID
      to: "/services",
      hash: "#services", // Navega a /services#services
      imageSrc: imageArrays.homeSectionsImages[0], // Usamos la nueva imagen
      alt: "Servicios",
      label: "Servicios", // Nuevo: Agregamos el texto del recuadro
    },
    {
      id: "link-curses", // Unique ID
      to: "/services",
      hash: "#cursos", // Navega a /services#cursos
      imageSrc: imageArrays.homeSectionsImages[1], // Usamos la nueva imagen
      alt: "Cursos",
      label: "Cursos", // Nuevo: Agregamos el texto del recuadro
    },
    {
      id: "link-contact", // Unique ID
      to: "/ugc",
      hash: "#ugc", // Navega a /ugc#ugc
      imageSrc: imageArrays.homeSectionsImages[3], // Usamos la nueva imagen
      alt: "UGC",
      label: "UGC", // Nuevo: Agregamos el texto del recuadro
    },
    
  ],
};

export const homeFeatures = {
  imageSrc: imageArrays.homeSectionsImages[2], // Usamos la nueva imagen
  alt: "Características de los servicios",
  features: [
    {
      title: "Calidad",
      description: "Utilizamos productos de alta calidad para garantizar resultados excepcionales.",
    },
    {
      title: "Profesionalismo",
      description: "Nuestro equipo está altamente capacitado y comprometido con la excelencia.",
    },
    {
      title: "Personalización",
      description: "Adaptamos nuestros servicios a tus necesidades y preferencias.",
    },
    {
      title: "Experiencia",
      description: "Años de experiencia en el mundo del maquillaje profesional.",
    },
  ],
};

export const homeBrands = {
  brands: imageArrays.brandImages.map((imageSrc, index) => ({
    imageSrc: imageSrc,
    alt: `Marca ${index + 1}`,
  })),
};

export const galleryFeatures = {
  imageSrc: imageArrays.homeSectionsImages[4], // Usamos la nueva imagen
  alt: "Una ventana a la galeria",
  gallery: [
    { 
    title: "Descubre nuestra galería",
    description:" Encuentra el look perfecto que se adapte a tu estilo. Desde cortes de cabello modernos, maquillajes espectaculares hasta manicuras impecables, tenemos todo lo que necesitas para resaltar tu belleza única. ¡Inspírate con nuestras opciones y agenda tu cita hoy para lucir increíble! "
      },
    ],
  };