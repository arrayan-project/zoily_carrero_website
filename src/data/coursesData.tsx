// src/data/coursesData.tsx

/**
 * Datos y utilidades para los cursos y sus modales.
 * Incluye descripciones, términos, estructura de cursos y contenido para los modales de detalle.
 * y aquí solo mantenemos las funciones que devuelven JSX o que cargan dinámicamente el JSON.
 * 
 * @module coursesData
 */
import { ModalContent } from "../components/modals/ModalInterfaces"; // Importamos ModalContent
import { Course} from "../types/CourseInterfaces"; // Importamos Course y CourseItem

/**
 * getCoursesDescription:
 * Devuelve un array de textos estáticos para la parte introductoria de cursos.
 */
export function getCoursesDescription(): string[] {
  return [
    "Aprende a maquillarte como un profesional con nuestros cursos!",
    "Resalta tu belleza y domina el arte del maquillaje.",
  ];
};

/**
 * termsContent:
 * Devuelve el JSX (React.ReactNode) con los Términos y Condiciones del curso.
 * Esta función sigue viva aquí, porque genera contenido HTML/JSX en runtime.
 */
export function termsContent(): JSX.Element {
  try {
    return (
      <div>
        <h1 className="font-cinzel font-bold mb-8 text-sm md:text-base">Términos y Condiciones del Curso</h1>
        <div>
          <h2 className="font-cinzel font-bold mb-4 text-sm md:text-base">Materiales:</h2>
          <p className="font-cinzel mb-4 text-xs md:text-sm">Se proveerán los materiales durante el curso</p>
        </div>
        <div>
          <h2 className="font-cinzel font-bold mb-4 text-sm md:text-base">Requisitos:</h2>
          <p className="font-cinzel mb-4 text-xs md:text-sm">No se requieren conocimientos previos</p>
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

export async function getCourseByIndex(
  index: number
): Promise<ModalContent> {
  const coursesArray = await loadCoursesData();
  const course = coursesArray[index] ?? coursesArray[0];

  // Tomamos siempre el primer ítem para mostrar en el modal (asume que cada curso tiene al menos uno)
  const firstItem = course.items[0];

  return {
    images: course.modalContent.images,
    title: course.modalContent.title,
    infoContent: (
      <div className="font-cinzel">
        <div className="mb-6">
          <h4 className="font-bold mb-4 text-sm md:text-base">
            {course.modalContent.title}
          </h4>
          <p className="mb-2 text-xs md:text-sm">Precio: {firstItem.price}</p>
          <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
            {firstItem.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    termsContent: termsContent(),
  };
}