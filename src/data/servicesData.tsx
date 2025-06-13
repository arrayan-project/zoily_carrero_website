// src/data/servicesData.tsx

/**
 * Datos y utilidades para los servicios y sus modales.
 * Ahora, la mayor parte de la información está en servicesData.json (en public/data),
 * y aquí solo mantenemos las funciones que devuelven JSX o que cargan dinámicamente el JSON.
 *
 * @module servicesData
 */

import type { ModalContent } from "../components/modals/modalServ-Cour/ModalInterfacesServices";
import type { Service } from "../types/ServiceInterfaces";

/**
 * getServicesDescription:
 * Devuelve un array de textos estáticos para la parte introductoria de servicios.
 */
export function getServicesDescription(): string[] {
  return [
    "Realza tu belleza con nuestros servicios de maquillaje.",
    "Reserva tu sesión y luce espectacular en tu evento especial.",
  ];
}

/**
 * termsContent:
 * Devuelve el JSX (React.ReactNode) con los Términos y Condiciones del servicio.
 * Esta función sigue viva aquí, porque genera contenido HTML/JSX en runtime.
 */
export function termsContent(): JSX.Element {
  try {
    return (
      <div>
        <h1 className="font-cinzel font-bold mb-8 text-sm md:text-base">
          Términos y Condiciones del Servicio
        </h1>

        <h2 className="font-cinzel mb-2 text-xs md:text-base">
          Reservas y Pagos
        </h2>
        <ul className="list-disc pl-6 font-cinzel text-xs md:text-sm">
          <li>Para agendar, se debe realizar un abono previo.</li>
          <li>
            Si se abona el <strong>30%</strong>, el{" "}
            <strong>70% restante</strong> debe pagarse al menos{" "}
            <strong>24 horas antes del evento</strong>.
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

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">
          Condiciones del Servicio
        </h2>
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

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">
          Pruebas y Atención en Estudio
        </h2>
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

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">
          Servicio a Domicilio
        </h2>
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

        <h2 className="font-cinzel mb-2 mt-6 text-base md:text-base">
          Recomendaciones
        </h2>
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
}

/**
 * loadServicesData:
 * Carga en tiempo de ejecución el JSON ubicado en public/data/servicesData.json.
 * La ruta “/data/servicesData.json” asume que el JSON fue colocado en “public/data/”.
 */
export async function loadServicesData(): Promise<Service[]> {
  const response = await fetch("/data/servicesData.json");
  if (!response.ok) {
    throw new Error("No se pudo cargar servicesData.json");
  }
  const data: Service[] = await response.json();
  return data;
}

/**
 * getServiceByIndex:
 * Devuelve un objeto ModalContent para el índice indicado, completando
 * la parte de “images” y “title” desde el JSON, y usando los fragmentos JSX
 * definidos en este módulo para infoContent y termsContent.
 */
export async function getServiceByIndex(index: number): Promise<ModalContent> {
  const servicesArray = await loadServicesData();
   const service = servicesArray[index] ?? servicesArray[0]; // Fallback for safety

  // Defensive check para asegurar que el servicio y su modalContent existen
  if (!service || !service.modalContent) {
    console.error(`Servicio o modalContent no encontrado para el índice: ${index}`);
    return {
      title: "Error",
      // description: "Por favor, intente más tarde.", // Opcional: descripción de error
      infoContent: "La información para este servicio no está disponible.",
      termsContent: termsContent(), // O un mensaje de error específico para términos
      serviceItems: [], // Asegurar que serviceItems sea un array vacío
    };
  }

  return {
    images: service.modalContent.images,
    title: service.modalContent.title,
    // Si tu JSON (en service.modalContent) tiene un campo 'description' para la descripción general
    // que aparece debajo del título principal del modal, asígnalo aquí:
    // description: service.modalContent.description,

    // infoContent ya no debe incluir detalles del primer item ni repetir el título del modal.
    // Se establece en null para que solo la lista de serviceItems (manejada por MakeUpCarouselSection)
    // se muestre en la sección de información de la pestaña.
    // Si tienes un texto introductorio general específico para la pestaña "Información"
    // (que no sea el título del modal ni la lista de items), podrías obtenerlo de
    // service.modalContent.algunaOtraPropiedad (ej. service.modalContent.tabIntroduction) y renderizarlo aquí.
    infoContent: null,
    termsContent: termsContent(),
  };
}
