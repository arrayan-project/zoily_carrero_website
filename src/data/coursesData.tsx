// src/data/coursesData.tsx

/**
 * Datos y utilidades para los cursos y sus modales.
 * Incluye descripciones, términos, estructura de cursos y contenido para los modales de detalle.
 * y aquí solo mantenemos las funciones que devuelven JSX o que cargan dinámicamente el JSON.
 *
 * @module coursesData
 */
import React from "react";
import { useTheme } from "../components/context/themeContext";
import type { ModalContent } from "../components/modals/modalServ-Cour/ModalInterfacesServices";
import { Course } from "../types/CourseInterfaces"; // Importamos Course y CourseItem

/**
 * getCoursesDescription:
 * Devuelve un array de textos estáticos para la parte introductoria de cursos.
 */
export function getCoursesDescription(): string[] {
  return [
    "Aprende a maquillarte como un profesional con nuestros cursos!",
    "Resalta tu belleza y domina el arte del maquillaje.",
  ];
}

/**
 * CourseTermsContent:
 * Devuelve el JSX (React.ReactNode) con los Términos y Condiciones del curso.
 * Ahora es un componente para acceder al tema y renombrado para claridad.
 */
export const CourseTermsContent: React.FC = () => {
  const { colors } = useTheme();
  try {
    return (
      <div>
        <h1 className="font-cinzel font-bold mb-8 text-sm md:text-base" style={{ color: colors.accent }}>
          Términos y Condiciones del Curso
        </h1>
        <div>
        <h2 className="font-cinzel mb-2 text-xs md:text-base" style={{ color: colors.accent }}>
            Materiales:
          </h2>
          <p className="font-cinzel mb-4 text-xs md:text-sm">
            Se proveerán los materiales durante el curso
          </p>
        </div>
        <div>
        <h2 className="font-cinzel mb-2 text-xs md:text-base" style={{ color: colors.accent }}>
            Requisitos:
          </h2>
          <p className="font-cinzel mb-4 text-xs md:text-sm">
            No se requieren conocimientos previos
          </p>
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
}

/**
 * loadCoursesData:
 * Carga en tiempo de ejecución el JSON ubicado en public/data/coursesData.json.
 * La ruta “/data/coursesData.json” asume que el JSON fue colocado en “public/data/”.
 */

export async function loadCoursesData(): Promise<Course[]> {
  const res = await fetch("/data/coursesData.json");
  if (!res.ok) throw new Error("No se pudo cargar coursesData.json");
  return (await res.json()) as Course[];
}

/**
 * getCourseByIndex:
 * Devuelve un objeto ModalContent para el índice indicado, completando
 * la parte de “images” y “title” desde el JSON, y usando los fragmentos JSX
 * definidos en este módulo para infoContent y termsContent.
 */

export async function getCourseByIndex(index: number): Promise<ModalContent> {
  const coursesArray = await loadCoursesData();
  const course = coursesArray[index] ?? coursesArray[0];

  // Defensive check para asegurar que el servicio y su modalContent existen
  if (!course || !course.modalContent) {
    console.error(`Servicio o modalContent no encontrado para el índice: ${index}`);
    return {
      title: "Error",
      // description: "Por favor, intente más tarde.", // Opcional: descripción de error
      infoContent: "La información para este servicio no está disponible.",
      termsContent: CourseTermsContent, // Usar el componente renombrado
      serviceItems: course.items,

    };
  }


  return {
    images: course.modalContent.images,
    title: course.modalContent.title,
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
    termsContent: CourseTermsContent, // Usar el componente renombrado
    serviceItems: [],
  };
}
