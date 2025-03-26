// src/data/homeData.ts
import images, { imageArrays } from "../assets/img/images";


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
      to: "/services",
      sectionId: "services",
      imageSrc: imageArrays.homeSectionsImages[0], // Usamos la nueva imagen
      alt: "Servicios",
      label: "Servicios", // Nuevo: Agregamos el texto del recuadro
    },
    {
      to: "/services",
      sectionId: "cursos",
      imageSrc: imageArrays.homeSectionsImages[1], // Usamos la nueva imagen
      alt: "Cursos",
      label: "Cursos", // Nuevo: Agregamos el texto del recuadro
    },
    {
      to: "/ugc",
      sectionId: "ugc",
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
  brands: [
    {
      imageSrc: images.brand1,
      alt: "Marca 1",
    },
    {
      imageSrc: images.brand2,
      alt: "Marca 2",
    },
    {
      imageSrc: images.brand3,
      alt: "Marca 3",
    },
    {
      imageSrc: images.brand4,
      alt: "Marca 4",
    },
    {
      imageSrc: images.brand5,
      alt: "Marca 5",
    },
    {
      imageSrc: images.brand6,
      alt: "Marca 6",
    },
  ],
};
