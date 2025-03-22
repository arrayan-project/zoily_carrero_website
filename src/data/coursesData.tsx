// src/data/coursesData.tsx

/*
##### Función #####
- Este archivo contiene la información de los cursos.
- Incluye las imagenes, titulo, y funciones que devuelven la informacion y los terminos del curso.
*/
import React from "react";
import cbasico from "../assets/img/cursos/basico.webp"; // Importamos con rutas absolutas
import cintermedio from "../assets/img/cursos/intermedio.webp"; // Importamos con rutas absolutas
import cavanzado from "../assets/img/cursos/avanzado.webp"; // Importamos con rutas absolutas
import cprofesional from "../assets/img/cursos/profesional.webp"; // Importamos con rutas absolutas

interface CourseItem { // Modificamos CourseItem
  name: string;
  price: string;
  description: string[];
}

export interface Course { // Creamos la interface Course
  description: string;
  items: CourseItem[];
  images: string[];
}

export interface CourseModalContent {
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}

// Componente reutilizable para renderizar la información de un curso
const CourseInfo: React.FC<{ course: Course }> = ({ course }) => { // Modificamos el tipo de course
  return (
    <div className="font-cinzel">
      {course.items.map((item, index) => (
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

export const basicCourse: Course = { // Modificamos basicCourse
  description: "Aprende las bases del maquillaje profesional.",
  items: [
    {
      name: "Maquillaje de día",
      price: "$45.000",
      description: ["Preparación de la piel",
        "Aplicación de bases",
        "Uso de correctores",
        "Sellado del maquillaje",
        "Uso de iluminador",
        "Aplicación de rubor",
        "Aplicación de sombras",
        "Técnica de delineado",
        "Aplicación de labial",
      ],
    },
  ],
  images: [cbasico],
};

export const intermediateCourse: Course = {
  description: "Curso intermedio de maquillaje donde aprenderás técnicas de perfeccionamiento y acabados más sofisticados.",
  items: [
    {
      name: "Curso Intermedio",
      price: "$45.000",
      description: [
        "Corrección de cejas y técnicas avanzadas de diseño",
        "Maquillaje de ojos ahumado para ocasiones especiales",
        "Corte de cuenca y delineado avanzado",
        "Aplicación de pigmentos y glitters para efectos especiales",
        "Piel madura: Técnicas y productos para una aplicación perfecta",
      ],
    },
  ],
  images: [cintermedio],  // Imagen asociada al curso intermedio
};

export const advancedCourse: Course = {
  description: "Curso avanzado de maquillaje para llevar tus habilidades a un nivel profesional con técnicas complejas.",
  items: [
    {
      name: "Curso Avanzado",
      price: "$45.000",
      description: [
        "Maquillaje de novias y eventos especiales",
        "Maquillaje editorial y para fotografía de alta gama",
        "Maquillaje de quinceañeras y looks juveniles",
        "Delineado gráfico y técnicas de diseño",
        "Corte de cuenca profundo para ojos dramáticos",
      ],
    },
  ],
  images: [cavanzado],  // Imagen asociada al curso avanzado
};

export const professionalCourse: Course = {
  description: "Curso profesional intensivo para especializarte en técnicas avanzadas y adaptadas a las necesidades de tus clientes.",
  items: [
    {
      name: "Curso Profesional",
      price: "$45.000",
      description: [
        "Práctica en modelos reales y maquillaje personalizado",
        "Maquillaje para todos los tonos y tipos de piel",
        "Maquillaje profesional para distintas estructuras faciales",
        "Técnicas avanzadas de aplicación de pestañas postizas",
        "Asesoría en marca personal y redes sociales para maquilladoras",
      ],
    },
  ],
  images: [cprofesional],  // Imagen asociada al curso profesional
};


// Funciones que retornan JSX
export const infoContentBasico = () => {
  return <CourseInfo course={basicCourse} />;
};

export const infoContentIntermedio = () => {
  return <CourseInfo course={intermediateCourse} />;
};

export const infoContentAvanzado = () => {
  return <CourseInfo course={advancedCourse} />;
};

export const infoContentProfesional = () => {
  return <CourseInfo course={professionalCourse} />;
};

export const termsContent = () => { // Creamos la funcion termsContent
  try {
    return (
      <div>
        <h1 className="font-cinzel font-bold mb-8 text-sm md:text-base">Términos y Condiciones del Curso</h1>
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
        </div>
        <div>
          <h2>Requisitos:</h2>
          <p>No se requieren conocimientos previos</p>
        </div>
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