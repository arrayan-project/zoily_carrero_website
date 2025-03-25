/*
##### Función #####
- Tiene como función principal almacenar y organizar la información relacionada con los diferentes
servicios de maquillaje y peinado que ofrece el negocio.
- Se ha mejorado la estructura de datos, la reutilización de código, el manejo de errores y la legibilidad.
*/

import React from "react";
//Importacion de imagenes
import novia from "../assets/img/services/boda.webp";
import social from "../assets/img/services/social1.webp";
import peinado from "../assets/img/services/social2conpeinado.webp";
import madura from "../assets/img/services/social14pielmadura.webp";
import glam from "../assets/img/services/social12.webp";
import quince from "../assets/img/services/social13.webp";

// Definición de Interfaces
interface ServiceItem {
  name: string;
  price: string;
  description: string[];
}

export interface Service {
  description: string;
  items: ServiceItem[];
  images: string[];
  label: string; // Agregamos la propiedad label
}

// Nueva interface ModalContent
export interface ModalContent {
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}

// Componente reutilizable para renderizar la información de un servicio
const ServiceInfo: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="font-cinzel">
      {service.items.map((item, index) => (
        <div key={index} className="mb-6">
          {/* Modificado: Añadido text-sm md:text-base */}
          <h4 className="font-bold mb-4 text-sm md:text-base">{item.name}</h4>
          {/* Modificado: Añadido text-xs md:text-sm */}
          <p className="mb-2 text-xs md:text-sm">Precio: {item.price}</p>
          {/* Modificado: Añadido text-[0.7rem] md:text-xs */}
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Funciones para las descripciones
export const getServicesDescription = () => {
  return [
    "Realza tu belleza con nuestros servicios de maquillaje profesional.",
    "Reserva tu sesión y luce espectacular en tu evento especial.",
  ];
};

// Datos de los Servicios
export const noviaMakeupServices: Service = {
  description:
    "El servicio de maquillaje para novias incluye todo lo necesario para realzar tu belleza en el día más importante de tu vida.",
  items: [
    {
      name: "Maquillaje Novia (incluye prueba)",
      price: "$90.000",
      description: [
        "Limpieza facial",
        "Hidratación",
        "Maquillaje según la hora y el lugar del evento",
        "Pestañas",
        "Sellado del maquillaje",
        "Aplicación de brillo para labios",
        "Corrección de la piel",
      ],
    },
    {
      name: "Maquillaje Novia a Domicilio (incluye prueba)",
      price: "$110.000",
      description: [
        "Limpieza facial",
        "Hidratación",
        "Maquillaje según la hora y el lugar del evento",
        "Pestañas",
        "Sellado del maquillaje",
        "Aplicación de brillo para labios",
        "Corrección de la piel",
      ],
    },
  ],
  images: [novia],
  label: "Maquillaje Novia", // Agregamos la propiedad label
};

export const socialMakeupServices: Service = {
  description:
    "El servicio de maquillaje social es ideal para cualquier evento especial, donde desees lucir radiante y destacar tu belleza natural.",
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
  images: [social],
  label: "Maquillaje Social", // Agregamos la propiedad label
};

export const peinadoMakeupServices: Service = {
  description:
    "El servicio de maquillaje y peinado te ofrece una experiencia completa para realzar tu belleza.",
  items: [
    {
      name: "Maquillaje y Peinado",
      price: "$60.000",
      description: [
        "Limpieza facial",
        "Hidratación",
        "Maquillaje a elección del cliente",
        "Pestañas",
        "Sellado del maquillaje",
        "Aplicación de brillo para labios",
        "Peinado según la ocasión",
      ],
    },
  ],
  images: [peinado],
  label: "Maquillaje y Peinado", // Agregamos la propiedad label
};

export const maduraMakeupServices: Service = {
  description:
    "El servicio de maquillaje para piel madura es especial y cuidado, diseñado para realzar la belleza natural.",
  items: [
    {
      name: "Maquillaje Piel Madura",
      price: "$35.000",
      description: [
        "Limpieza facial",
        "Hidratación",
        "Maquillaje diseñado para pieles maduras",
        "Pestañas",
        "Sellado del maquillaje",
        "Aplicación de brillo para labios",
      ],
    },
  ],
  images: [madura],
  label: "Maquillaje Piel Madura", // Agregamos la propiedad label
};

export const glamMakeupServices: Service = {
  description:
    "Si buscas un look impactante y sofisticado, el maquillaje Glam es ideal para ti. ",
  items: [
    {
      name: "Maquillaje Glam",
      price: "$45.000",
      description: [
        "Limpieza facial",
        "Hidratación",
        "Maquillaje glam con brillos y glitter",
        "Pestañas",
        "Sellado del maquillaje",
        "Aplicación de brillo para labios",
      ],
    },
  ],
  images: [glam],
  label: "Maquillaje Glam", // Agregamos la propiedad label
};

export const expressMakeupServices: Service = {
  description:
    "El maquillaje express es perfecto para quinceañeras que desean lucir jóvenes y frescas en su gran día.",
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
  images: [quince],
  label: "Maquillaje Quinceañera", // Agregamos la propiedad label
};

// Funciones que retornan JSX
export const infoContentNovia = () => {
  return <ServiceInfo service={noviaMakeupServices} />;
};

export const infoContentExpress = () => {
  return <ServiceInfo service={expressMakeupServices} />;
};

export const infoContentGlam = () => {
  return <ServiceInfo service={glamMakeupServices} />;
};

export const infoContentMadura = () => {
  return <ServiceInfo service={maduraMakeupServices} />;
};

export const infoContentPeinado = () => {
  return <ServiceInfo service={peinadoMakeupServices} />;
};

export const infoContentSocial = () => {
  return <ServiceInfo service={socialMakeupServices} />;
};

export const termsContent = () => {
  try {
    return (
      <div>
        <h1 className="font-cinzel font-bold mb-8 text-sm md:text-base">Términos y Condiciones del Servicio</h1>

        <h2 className="font-cinzel mb-2 text-xs md:text-base">Reservas y Pagos</h2>
        <ul className="list-disc pl-6 font-cinzel text-xs md:text-sm">
          <li>Para agendar, se debe realizar un abono previo.</li>
          <li>
            Si se abona el <strong>30%</strong>, el <strong>70% restante</strong>{" "}
            debe pagarse al menos <strong>24 horas antes del evento</strong>.
          </li>
          <li>
            Si solo se paga la <strong>prueba</strong> sin reservar la fecha, no
            se garantiza disponibilidad.
          </li>
          <li>La prueba debe pagarse en su totalidad para ser agendada.</li>
          <li>
            <strong>No hay reembolsos</strong> una vez reservado el servicio.
          </li>
        </ul>

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">Condiciones del Servicio</h2>
        <ul className="list-disc pl-6 font-cinzel text-xs md:text-sm">
          <li>
            <strong>Los peinados no incluyen secado</strong>. El cabello debe
            estar seco y limpio al natural.
          </li>
          <li>
            El servicio es <strong>intransferible</strong>.
          </li>
          <li>
            Se pueden atender hasta <strong>5 personas adicionales</strong> a la
            novia. Para grupos, solicitar propuesta.
          </li>
        </ul>

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">Pruebas y Atención en Estudio</h2>
        <ul className="list-disc pl-6 font-cinzel text-xs md:text-sm">
          <li>
            Las pruebas se realizan <strong>solo en días de semana</strong> en mi
            estudio.
          </li>
          <li>
            Se requiere <strong>puntualidad</strong>. No se atenderá después de{" "}
            <strong>15 minutos de retraso</strong>.
          </li>
          <li>
            <strong>Evitar el uso del celular</strong> durante el servicio.
          </li>
          <li>
            Informar con anticipación si el evento se cancela. Se puede reagendar
            dentro de <strong>30 días</strong>; pasado ese plazo, no habrá nueva
            fecha.
          </li>
        </ul>

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">Servicio a Domicilio</h2>
        <ul className="list-disc pl-6 font-cinzel text-xs md:text-sm">
          <li>Verificar disponibilidad antes de realizar abonos.</li>
          <li>
            El traslado tiene un costo adicional <strong>(ida y vuelta)</strong>.
          </li>
          <li>
            Se cobra un <strong>recargo de $20.000</strong> por servicio a
            domicilio.
          </li>
        </ul>

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">Recomendaciones</h2>
        <ul className="list-disc pl-6 font-cinzel text-xs md:text-sm">
          <li>
            <strong>No tener lifting de pestañas</strong>, ya que interfiere con
            las pestañas de cortina.
          </li>
        </ul>

        <p className="font-cinzel mt-6 text-sm md:text-base">
          Estoy disponible para cualquier consulta. ¡Gracias por tu confianza! 😊
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error al generar los términos y condiciones:", error);
    return (
      <div className="text-red-500">
        Error al cargar los términos y condiciones.
      </div>
    );
  }
};
