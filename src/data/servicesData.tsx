// servicesData.ts

export const noviaMakeupServices = {
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
};

export const socialMakeupServices = {
  description:
    "El servicio de maquillaje social es ideal para cualquier evento especial, donde desees lucir radiante y destacar tu belleza natural.",
  items: [
    {
      name: "Maquillaje Social",
      price: "$35.000",
      description: [
        "Limpieza facial",
        "Hidratación",
        "Maquillaje a elección del cliente",
        "Pestañas",
        "Sellado del maquillaje",
        "Aplicación de brillo para labios",
      ],
    },
  ],
};

export const peinadoMakeupServices = {
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
};

export const maduraMakeupServices = {
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
};

export const glamMakeupServices = {
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
};

export const expressMakeupServices = {
  description:
    "El maquillaje express es perfecto para quinceañeras que desean lucir jóvenes y frescas en su gran día.",
  items: [
    {
      name: "Maquillaje Express Quinceañera",
      price: "$35.000",
      description: [
        "Limpieza facial",
        "Hidratación",
        "Maquillaje natural y fresco",
        "Pestañas",
        "Sellado del maquillaje",
        "Aplicación de brillo para labios",
      ],
    },
  ],
};

export const basicCourseServices = {
  items: [
    {
      name: "Contenido del Curso",
      description: [
        "Preparación de la piel",
        "Aplicación de bases",
        "Uso de correctores",
        "Sellado del maquillaje",
        "Uso de iluminador",
        "Aplicación de rubor",
        "Aplicación de sombras",
        "Delineado",
        "Aplicación de labial",
      ],
    },
  ],
};

export const intermediateCourseServices = {
  items: [
    {
      name: "Contenido del Curso",
      description: [
        "Corrección de cejas",
        "Maquillaje de ojos ahumado",
        "Corte de cuenca",
        "Aplicación de pigmentos",
        "Aplicación de glitter",
        "Técnica de delineado",
        "Piel madura",
      ],
    },
  ],
};

export const advancedCourseServices = {
  items: [
    {
      name: "Contenido del Curso",
      description: [
        "Maquillaje de novias",
        "Maquillaje para cámaras",
        "Maquillaje editorial",
        "Maquillaje de quinceañeras",
        "Sociales de noche",
        "Corte de cuenca profundo",
        "Delineado gráfico",
        "Aplicación de pestañas postizas",
        "Uso de fijadores y sellantes",
        "Aplicación de pedrería y strass",
        "Técnicas de contorno",
      ],
    },
  ],
};

export const professionalCourseServices = {
  items: [
    {
      name: "Contenido del Curso",
      description: [
        "Práctica en modelos reales",
        "Maquillaje para diferentes tonos de piel",
        "Maquillaje para distintas estructuras faciales",
        "Manejo de diferentes tipos de productos",
        "Conocimiento de marcas de maquillaje",
        "Asesoría en marca personal",
      ],
    },
  ],
};

//FUNCIONES QUE RETORNARAN JSX
export const infoContentNovia = () => {
  return (
    <div className="font-cinzel">
      {noviaMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const infoContentExpress = () => {
  return (
    <div className="font-cinzel">
      {expressMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const infoContentGlam = () => {
  return (
    <div className="font-cinzel">
      {glamMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const infoContentMadura = () => {
  return (
    <div className="font-cinzel">
      {maduraMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const infoContentPeinado = () => {
  return (
    <div className="font-cinzel">
      {peinadoMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const infoContentSocial = () => {
  return (
    <div className="font-cinzel">
      {socialMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const termsContent = () => {
  return (
    <div>
      <h1 className="font-cinzel mb-8">Términos y Condiciones del Servicio</h1>

      <h2 className="font-cinzel mb-2">Reservas y Pagos</h2>
      <ul className="list-disc pl-6 font-cinzel">
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

      <h2 className="font-cinzel mb-2 mt-6">Condiciones del Servicio</h2>
      <ul className="list-disc pl-6 font-cinzel">
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

      <h2 className="font-cinzel mb-2 mt-6">Pruebas y Atención en Estudio</h2>
      <ul className="list-disc pl-6 font-cinzel">
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

      <h2 className="font-cinzel mb-2 mt-6">Servicio a Domicilio</h2>
      <ul className="list-disc pl-6 font-cinzel">
        <li>Verificar disponibilidad antes de realizar abonos.</li>
        <li>
          El traslado tiene un costo adicional <strong>(ida y vuelta)</strong>.
        </li>
        <li>
          Se cobra un <strong>recargo de $20.000</strong> por servicio a
          domicilio.
        </li>
      </ul>

      <h2 className="font-cinzel mb-2 mt-6">Recomendaciones</h2>
      <ul className="list-disc pl-6 font-cinzel">
        <li>
          <strong>No tener lifting de pestañas</strong>, ya que interfiere con
          las pestañas de cortina.
        </li>
      </ul>

      <p className="font-cinzel mt-6">
        Estoy disponible para cualquier consulta. ¡Gracias por tu confianza! 😊
      </p>
    </div>
  );
};
