import { Service } from "../types"; // add this line

// Data for the Novia (Bride) service
export const noviaMakeupServices: Service = {
    category: "Maquillaje Novia - Servicios Adicionales",
    description: "Tu gran día merece un maquillaje perfecto, duradero y personalizado. Resalta tu belleza natural con un look radiante que resistirá cada emoción y cada foto. ¡Luce espectacular y siéntete segura en tu boda! 💍✨", // Add this line
    items: [
      {
        name: "Maquillaje y Peinado Novia Basic",
        price: "$90.000.-",
        description: [ // Changed to an array
          "Incluye Tratamiento de hidratación facial previo al maquillaje del día de la celebración.",
          "Maquillaje Soft Mate adaptado al estilo de la cliente.",
          "Pestañas de cortina.",
          "Peinado con Ondas.",
          "No incluye prueba de Maquillaje.",
          "Verificar disponibilidad de fechas antes de realizar los abonos.",
        ],
      },
      {
        name: "Maquillaje y Peinado Novia Full",
        price: "$130.000.-",
        description: [ // Changed to an array
          "Incluye Tratamiento de hidratación facial previo al maquillaje del día de la celebración.",
          "Maquillaje Clásico (para el día) o Glam (para la noche), el estilo será a elección de la clienta.",
          "Maquillaje de cuello y escote.",
          "Pestañas de cortina.",
          "Peinado a elección.",
          "Incluye prueba de Maquillaje y peinado.",
          "Kit de Retoque: polvo traslúcido, esponjita, papel de arroz, muestra del labial, cepillito de cejas, cotonitos.",
          "Verificar disponibilidad de fechas antes de realizar los abonos.",
        ],
      },
    ],
  };

  // Data for the Social service
  export const socialMakeupServices: Service = {
    category: "Maquillaje Social - Servicios Adicionales",
    description:"Ideal para eventos, cenas o cualquier ocasión especial. Un maquillaje sofisticado que realza tu belleza y te hace sentir segura y deslumbrante. ¡Destaca con un look impecable! 💄", // Add this line
    items: [
      {
        name: "Maquillaje Social Glam",
        price: "$60.000.-",
        description: [
          "Incluye Tu eliges entre Glam o Look de Día.",
          "Maquillaje de rostro, técnicas de ojos Soft o Glam que involucran brillo, cortes de cuenca, ahumados entre otros, además hidratación facial, bronzer y contornos, iluminador.",
          "Pestañas de cortina.",
          "Verificar disponibilidad de fechas antes de realizar los abonos.",
        ],
      },
      {
        name: "Maquillaje Social Soft Basic",
        price: "$38.000.-",
        description: [
          "Incluye Maquillaje Soft.",
          "Hidratación facial previa, Look suave, tonos tierra, trabajo de piel natural.",
          "Pestañas de cortina.",
          "Verificar disponibilidad de fechas antes de realizar los abonos.",
        ],
      },
    ],
  };

  // Data for the Peinado (Hair) service
  export const peinadoMakeupServices: Service = {
    category: "Maquillaje & Peinado - Servicios Adicionales",
    description:"El complemento ideal para cualquier look. Desde ondas naturales hasta recogidos elegantes, creamos el peinado perfecto para que luzcas espectacular en cualquier evento. 💇",// Add this line
    items: [
      {
        name: "Peinado",
        price: "$40.000.-",
        description: [
          "Semi Recogido – Recogido – Ondas.",
          "Trenzados, Moños, Románticos, entre otros.",
          "Para Cualquier tipo de Evento.",
          "Cabellos Cortos y Largos.",
          "Verificar disponibilidad de fechas antes de realizar los abonos.",
        ],
      },
    ],
  };

  // Data for the Madura (Mature Skin) service
  export const maduraMakeupServices: Service = {
    category: "Maquillaje para Piel Madura - Servicios Adicionales",
    description: "Realza tu elegancia con técnicas que iluminan, suavizan y rejuvenecen tu piel. Un acabado fresco y favorecedor que resalta tu belleza sin excesos. ¡Siéntete sofisticada y segura! 🌟",// Add this line
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: [
          "Descripción del servicio 1 profesional.",
        ],
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: [
          "Descripción del servicio 2 profesional.",
        ],
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: [
          "Descripción del servicio 3 profesional.",
        ],
      },
    ],
  };

  // Data for the Glam service
  export const glamMakeupServices: Service = {
    category: "Maquillaje Glam - Servicios Adicionales",
    description: "Brillo, impacto y sofisticación en un solo look. Piel impecable, ojos intensos y labios irresistibles para que te sientas como una estrella. ¡Atrévete a brillar! ✨",// Add this line
    items: [
      {
        name: "Servicio 1 Profesional",
        price: "$GG",
        description: [
          "Descripción del servicio 1 profesional.",
        ],
      },
      {
        name: "Servicio 2 Profesional",
        price: "$HH",
        description: [
          "Descripción del servicio 2 profesional.",
        ],
      },
      {
        name: "Servicio 3 Profesional",
        price: "$II",
        description: [
          "Descripción del servicio 3 profesional.",
        ],
      },
    ],
  };

  // Data for the Express service
  export const expressMakeupServices: Service = {
    category: "Maquillaje Express - Servicios Adicionales",
    description: "Tu día especial merece un look fresco, juvenil y radiante. Un maquillaje que realza tu belleza y te hace sentir como una princesa. ¡Brilla en tu gran celebración! ✨👑",// Add this line
    items: [
      {
        name: "Maquillaje Quinceañera Basic",
        price: "$75.000.-",
        description: [
          "Incluye Tratamiento de hidratación facial previo al maquillaje del día de la celebración.",
          "Maquillaje Soft Mate adaptado al estilo de la cliente.",
          "Pestañas de cortina.",
          "No incluye prueba de Maquillaje",
          "Verificar disponibilidad de fechas antes de realizar los abonos.",
        ],
      },
      {
        name: "Maquillaje y Peinado Quinceañera Full",
        price: "$110.000.-",
        description: [
          "Incluye Tratamiento de hidratación facial previo al maquillaje del día de la celebración con mascarilla hidratante.",
          "Maquillaje a elección (Soft o Glam) con productos alta gama.",
          "Maquillaje de cuello y escote.",
          "Pestañas de cortina.",
          "Peinado a elección.",
          "Incluye prueba de Maquillaje y peinado.",
          "Kit de Retoque: polvo traslúcido, esponjita, papel de arroz, muestra del labial, cepillito de cejas, cotonitos.",
          "Verificar disponibilidad de fechas antes de realizar los abonos.",
        ],
      },
    ],
  };

  // Data for the Basic Course
  export const basicCourseServices: Service = {
    category: "Curso Básico - Información",
    items: [
      {
        name: "¿Qué aprenderás?",
        price: "",
        description: [
          "Introducción al maquillaje.",
          "Uso de herramientas.",
          "Técnicas básicas.",
          "Tipos de piel y cómo prepararla antes del maquillaje.",
        ],
      },
      {
        name: "Duración:",
        price: "",
        description: ["4 clases de 2 horas."],
      },
    ],
  };
  // Data for the Intermediate Course
  export const intermediateCourseServices: Service = {
    category: "Curso Intermedio - Información",
    items: [
      {
        name: "¿Qué aprenderás?",
        price: "",
        description: [
          "Mezcla de colores.",
          "Difuminados.",
          "Maquillaje de ojos completo.",
          "Contornos.",
        ],
      },
      {
        name: "Duración:",
        price: "",
        description: ["6 clases de 2 horas."],
      },
    ],
  };
  // Data for the Advanced Course
  export const advancedCourseServices: Service = {
    category: "Curso Avanzado - Información",
    items: [
      {
        name: "¿Qué aprenderás?",
        price: "",
        description: [
          "Maquillaje profesional.",
          "Maquillaje para fotos.",
          "Maquillaje de alta definición.",
          "Cómo usar las redes sociales para promover tu negocio.",
        ],
      },
      {
        name: "Duración:",
        price: "",
        description: ["8 clases de 2 horas."],
      },
    ],
  };
  // Data for the Professional Course
  export const professionalCourseServices: Service = {
    category: "Curso Profesional - Información",
    items: [
      {
        name: "¿Qué aprenderás?",
        price: "",
        description: [
          "Maquillaje editorial.",
          "Maquillaje artístico.",
          "Cómo crear un portafolio profesional.",
        ],
      },
      {
        name: "Duración:",
        price: "",
        description: ["10 clases de 2 horas."],
      },
    ],
  };
