/*
##### Función #####
- Este archivo contiene la información de los cursos.
- Incluye las imagenes, titulo, y funciones que devuelven la informacion y los terminos del curso.
*/
import cbasico from "../assets/img/cursos/basico.webp"; // Importamos con rutas absolutas
import cintermedio from "../assets/img/cursos/intermedio.webp"; // Importamos con rutas absolutas
import cavanzado from "../assets/img/cursos/avanzado.webp"; // Importamos con rutas absolutas
import cprofesional from "../assets/img/cursos/profesional.webp"; // Importamos con rutas absolutas

interface CourseData {
  title: string;
  image: string;
  infoContent: () => JSX.Element;
  termsContent: () => JSX.Element;
}

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

export const courseData: Record<string, CourseData> = {
  basico: {
    title: "Curso Básico",
    image: cbasico,
    infoContent: () => {
      return (
        <div className="font-cinzel">
          {/* Iteramos los servicios del curso */}
          {basicCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {/* Iteramos las descripciones de cada servicio */}
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
    termsContent: () => {
      return (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>No se requieren conocimientos previos</p>
        </div>
      );
    },
  },
  intermedio: {
    title: "Curso Intermedio",
    image: cintermedio,
    infoContent: () => {
      return (
        <div className="font-cinzel">
          {intermediateCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
    termsContent: () => {
      return (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>Haber realizado el curso basico</p>
        </div>
      );
    },
  },
  avanzado: {
    title: "Curso Avanzado",
    image: cavanzado,
    infoContent: () => {
      return (
        <div className="font-cinzel">
          {advancedCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
    termsContent: () => {
      return (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>Haber realizado el curso intermedio</p>
        </div>
      );
    },
  },
  profesional: {
    title: "Curso Profesional",
    image: cprofesional,
    infoContent: () => {
      return (
        <div className="font-cinzel">
          {professionalCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    },
    termsContent: () => {
      return (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>Haber realizado el curso avanzado</p>
        </div>
      );
    },
  },
};
export default courseData
