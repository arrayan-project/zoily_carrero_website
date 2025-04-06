// src/data/servicesData.tsx
import { ModalContent } from "../types";
import images from "../assets/images"; // Importamos el objeto images

// Nueva interface Service
export interface Service {
  modalContent: ModalContent;
}


// Funciones para las descripciones
export const getServicesDescription = () => {
  return [
    "Realza tu belleza con nuestros servicios de maquillaje profesional.",
    "Reserva tu sesión y luce espectacular en tu evento especial.",
  ];
};

// Funciones que retornan objetos ModalContent
const infoContentNovia = (): ModalContent => {
  return {
    images: [images.novia], // Usamos la imagen importada
    title: "Maquillaje Novia",
    infoContent: (
      <div className="font-cinzel">
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje Novia (incluye prueba)
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $90.000</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>Limpieza facial</li>
            <li>Hidratación</li>
            <li>Maquillaje según la hora y el lugar del evento</li>
            <li>Pestañas</li>
            <li>Sellado del maquillaje</li>
            <li>Aplicación de brillo para labios</li>
            <li>Corrección de la piel</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje Novia a Domicilio (incluye prueba)
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $110.000</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>Limpieza facial</li>
            <li>Hidratación</li>
            <li>Maquillaje según la hora y el lugar del evento</li>
            <li>Pestañas</li>
            <li>Sellado del maquillaje</li>
            <li>Aplicación de brillo para labios</li>
            <li>Corrección de la piel</li>
          </ul>
        </div>
      </div>
    ),
    termsContent: termsContent(),
    description:
      "El servicio de maquillaje para novias incluye todo lo necesario para realzar tu belleza en el día más importante de tu vida.",
  };
};

const infoContentExpress = (): ModalContent => {
  return {
    images: [images.glam2], // Usamos la imagen importada
    title: "Maquillaje Quinceañera",
    infoContent: (
      <div className="font-cinzel">
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje Quinceañera Basic
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $75.000.-</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>
              Incluye Tratamiento de hidratación facial previo al maquillaje del
              día de la celebración.
            </li>
            <li>Maquillaje Soft Mate adaptado al estilo de la cliente.</li>
            <li>Pestañas de cortina.</li>
            <li>No incluye prueba de Maquillaje</li>
            <li>
              Verificar disponibilidad de fechas antes de realizar los abonos.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje y Peinado Quinceañera Full
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $110.000.-</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>
              Incluye Tratamiento de hidratación facial previo al maquillaje del
              día de la celebración con mascarilla hidratante.
            </li>
            <li>
              Maquillaje a elección (Soft o Glam) con productos alta gama.
            </li>
            <li>Maquillaje de cuello y escote.</li>
            <li>Pestañas de cortina.</li>
            <li>Peinado a elección.</li>
            <li>Incluye prueba de Maquillaje y peinado.</li>
            <li>
              Kit de Retoque: polvo traslúcido, esponjita, papel de arroz,
              muestra del labial, cepillito de cejas, cotonitos.
            </li>
            <li>
              Verificar disponibilidad de fechas antes de realizar los abonos.
            </li>
          </ul>
        </div>
      </div>
    ),
    termsContent: termsContent(),
    description:
      "El maquillaje express es perfecto para quinceañeras que desean lucir jóvenes y frescas en su gran día.",
  };
};

const infoContentGlam = (): ModalContent => {
  return {
    images: [images.glam], // Usamos la imagen importada
    title: "Maquillaje Glam",
    infoContent: (
      <div className="font-cinzel">
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje Glam
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $45.000</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>Limpieza facial</li>
            <li>Hidratación</li>
            <li>Maquillaje glam con brillos y glitter</li>
            <li>Pestañas</li>
            <li>Sellado del maquillaje</li>
            <li>Aplicación de brillo para labios</li>
          </ul>
        </div>
      </div>
    ),
    termsContent: termsContent(),
    description:
      "Si buscas un look impactante y sofisticado, el maquillaje Glam es ideal para ti. ",
  };
};

const infoContentMadura = (): ModalContent => {
  return {
    images: [images.pmadura], // Usamos la imagen importada
    title: "Maquillaje Piel Madura",
    infoContent: (
      <div className="font-cinzel">
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje Piel Madura
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $35.000</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>Limpieza facial</li>
            <li>Hidratación</li>
            <li>Maquillaje diseñado para pieles maduras</li>
            <li>Pestañas</li>
            <li>Sellado del maquillaje</li>
            <li>Aplicación de brillo para labios</li>
          </ul>
        </div>
      </div>
    ),
    termsContent: termsContent(),
    description:
      "El servicio de maquillaje para piel madura es especial y cuidado, diseñado para realzar la belleza natural.",
  };
};

const infoContentPeinado = (): ModalContent => {
  return {
    images: [images.m_peinado2], // Usamos la imagen importada
    title: "Maquillaje y Peinado",
    infoContent: (
      <div className="font-cinzel">
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje y Peinado
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $60.000</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>Limpieza facial</li>
            <li>Hidratación</li>
            <li>Maquillaje a elección del cliente</li>
            <li>Pestañas</li>
            <li>Sellado del maquillaje</li>
            <li>Aplicación de brillo para labios</li>
            <li>Peinado según la ocasión</li>
          </ul>
        </div>
      </div>
    ),
    termsContent: termsContent(),
    description:
      "El servicio de maquillaje y peinado te ofrece una experiencia completa para realzar tu belleza.",
  };
};

const infoContentSocial = (): ModalContent => {
  return {
    images: [images.express], // Usamos la imagen importada
    title: "Maquillaje Social",
    infoContent: (
      <div className="font-cinzel">
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje Social Glam
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $60.000.-</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>Incluye Tu eliges entre Glam o Look de Día.</li>
            <li>
              Maquillaje de rostro, técnicas de ojos Soft o Glam que involucran
              brillo, cortes de cuenca, ahumados entre otros, además hidratación
              facial, bronzer y contornos, iluminador.
            </li>
            <li>Pestañas de cortina.</li>
            <li>
              Verificar disponibilidad de fechas antes de realizar los abonos.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            Maquillaje Social Soft Basic
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: $38.000.-</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            <li>Incluye Maquillaje Soft.</li>
            <li>
              Hidratación facial previa, Look suave, tonos tierra, trabajo de
              piel natural.
            </li>
            <li>Pestañas de cortina.</li>
            <li>
              Verificar disponibilidad de fechas antes de realizar los abonos.
            </li>
          </ul>
        </div>
      </div>
    ),
    termsContent: termsContent(),
    description:
      "El servicio de maquillaje social es ideal para cualquier evento especial, donde desees lucir radiante y destacar tu belleza natural.",
  };
};

export const termsContent = () => {
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
};

// Datos de los Servicios
export const getServices = (): Service[] => {
  return [
    { modalContent: infoContentNovia() },
    { modalContent: infoContentSocial() },
    { modalContent: infoContentPeinado() },
    { modalContent: infoContentMadura() },
    { modalContent: infoContentGlam() },
    { modalContent: infoContentExpress() },
  ];
};

// Exportamos getInfoContent
export const getInfoContent = (index: number): ModalContent => {
  switch (index) {
    case 0:
      return infoContentNovia();
    case 1:
      return infoContentSocial();
    case 2:
      return infoContentPeinado();
    case 3:
      return infoContentMadura();
    case 4:
      return infoContentGlam();
    default:
      return infoContentExpress();
  }
};

// Exportamos servicesArray
export const servicesArray: Service[] = getServices();
