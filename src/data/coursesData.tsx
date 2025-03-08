// courseData.ts
import cbasico from "../assets/img/cursos/basico.webp";
import cintermedio from "../assets/img/cursos/intermedio.webp";
import cavanzado from "../assets/img/cursos/avanzado.webp";
import cprofesional from "../assets/img/cursos/profesional.webp";
import { basicCourseServices, intermediateCourseServices, advancedCourseServices, professionalCourseServices } from "./servicesData";

interface CourseData {
  title: string;
  image: string;
  infoContent: () => JSX.Element;
  termsContent: () => JSX.Element;
}

export const courseData: Record<string, CourseData> = {
  basico: {
    title: "Curso Básico",
    image: cbasico,
    infoContent: () => {
      return (
        <div className="font-cinzel">
          {basicCourseServices.items.map((item, index) => (
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
