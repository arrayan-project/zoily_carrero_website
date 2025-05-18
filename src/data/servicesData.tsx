// src/data/servicesData.tsx
import { ModalContent } from "../components/modals/ModalInterfaces"; // Importamos ModalContent
import { Service} from "../types/ServiceInterfaces"; // Importamos Service y ServiceItem
import images from "../assets/images"; // Importamos el objeto images

// Funciones para las descripciones
export const getServicesDescription = () => {
  return [
    "Realza tu belleza con nuestros servicios de maquillaje profesional.",
    "Reserva tu sesión y luce espectacular en tu evento especial.",
  ];
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

// Centralized Service Data Array
export const servicesData: Service[] = [
  {
    category: "Novia",
    imageKey: "novia", // Clave de imagen para la vista de columna/carrusel
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
    modalContent: {
      images: [images.novia.webp], // Usar la URL de la imagen .webp
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
    },
  },
  {
    category: "Quinceañera",
    imageKey: "glam2", // Clave de imagen (usando glam2 como ejemplo, ajustar si es otra)
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
    modalContent: {
      images: [images.glam2.webp], // Usar la URL de la imagen .webp
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
    },
  },
  {
    category: "Glam",
    imageKey: "glam", // Clave de imagen
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
    modalContent: {
      images: [images.glam.webp], // Usar la URL de la imagen .webp
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
    },
  },
  {
    category: "Piel Madura",
    imageKey: "pmadura", // Clave de imagen
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
    modalContent: {
      images: [images.pmadura.webp], // Usar la URL de la imagen .webp
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
    },
  },
  {
    category: "Maquillaje & Peinado",
    imageKey: "m_peinado2", // Clave de imagen
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
    modalContent: {
      images: [images.m_peinado2.webp], // Usar la URL de la imagen .webp
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
    },
  },
  {
    category: "Social",
    imageKey: "express", // Clave de imagen
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
    modalContent: {
      images: [images.express.webp], // Usar la URL de la imagen .webp
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
    },
  },
];

// Exportamos getInfoContent
export const getInfoContent = (index: number): ModalContent => {
  const service = servicesData[index];
  return service ? service.modalContent : servicesData[0].modalContent;
};

// Exportamos servicesArray
export const servicesArray: Service[] = servicesData;
