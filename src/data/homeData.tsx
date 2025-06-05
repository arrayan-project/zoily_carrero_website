/**
 * Datos y recursos para la página principal (Home).
 * Incluye información de títulos, enlaces destacados, características, marcas y galería para mostrar en el Home.
 *
 * @module homeData
 */
import { brandImageKeys } from "../assets/images";

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
      to: "/makeup",
      hash: "#services", // Navega a /services#services
      imageKey: "home-services",
      alt: "Servicios",
      label: "Servicios", // Nuevo: Agregamos el texto del recuadro
    },
    {
      id: "link-curses", // Unique ID
      to: "/courses",
      hash: "#cursos", // Navega a /services#cursos
      imageKey: "home-courses",
      alt: "Cursos",
      label: "Cursos", // Nuevo: Agregamos el texto del recuadro
    },
    {
      id: "link-contact", // Unique ID
      to: "/ugc",
      hash: "#ugc", // Navega a /ugc#ugc
      imageKey: "home-ugc",
      alt: "UGC",
      label: "UGC", // Nuevo: Agregamos el texto del recuadro
    },
    
  ],
};

export const homeFeatures = {
  imageKey: "home-courses2", // Usamos la nueva imagen
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
  brands: brandImageKeys.map((imageKey) => ({
    imageKey,
    alt: `Marca ${imageKey}`,
  })),
};

export const galleryFeatures = {
  imageKey: "home-gallery", // Usamos la nueva imagen
  alt: "Una ventana a la galeria",
  gallery: [
    { 
    title: "Descubre nuestra galería",
    description:" Encuentra el look perfecto que se adapte a tu estilo. Desde cortes de cabello modernos, maquillajes espectaculares hasta manicuras impecables, tenemos todo lo que necesitas para resaltar tu belleza única. ¡Inspírate con nuestras opciones y agenda tu cita hoy para lucir increíble! "
      },
    ],
  };