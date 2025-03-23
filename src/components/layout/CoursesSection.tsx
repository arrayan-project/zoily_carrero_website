// src/components/layout/CoursesSection.tsx
import React from "react";
import {
  basicCourse,
  intermediateCourse,
  advancedCourse,
  professionalCourse,
  infoContentBasico,
  infoContentIntermedio,
  infoContentAvanzado,
  infoContentProfesional,
  CourseModalContent,
  Course,
  termsContent,
} from "../../data/coursesData";
import { renderCourseItem } from "../../utils/renderItems";
import MobileCoursesCarousel from "../sliders/MobileCoursesCarousel";
import useWindowSize from "../../hooks/useWindowSize";
import { useModal } from "../../pages/Services"; // Importamos el hook useModal

// Eliminamos la interfaz CoursesSectionProps

const CoursesSection: React.FC = () => { // Eliminamos las props
  const { isMobileView } = useWindowSize();
  const { openModal } = useModal(); // Usamos el hook useModal
  const coursesArray: Course[] = [
    basicCourse,
    intermediateCourse,
    advancedCourse,
    professionalCourse,
  ];

  return (
    <>
      {isMobileView ? (
        <div className="center pb-32 md:pb-32">
          <MobileCoursesCarousel
            courses={coursesArray}
            openModal={openModal}
          />
        </div>
      ) : (
        <div className="tablet-carousel-container">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            aria-label="Cursos"
          >
            {/* CURSO BASICO */}
            {renderCourseItem(
              basicCourse.images, // Pasamos el array de imagenes
              basicCourse.items[0].name,
              openModal,
              infoContentBasico(),
              termsContent(),
              basicCourse.description
            )}
            {/* CURSO INTERMEDIO */}
            {renderCourseItem(
              intermediateCourse.images, // Pasamos el array de imagenes
              intermediateCourse.items[0].name,
              openModal,
              infoContentIntermedio(),
              termsContent(),
              intermediateCourse.description
            )}
            {/* CURSO AVANZADO */}
            {renderCourseItem(
              advancedCourse.images, // Pasamos el array de imagenes
              advancedCourse.items[0].name,
              openModal,
              infoContentAvanzado(),
              termsContent(),
              advancedCourse.description
            )}
            {/* CURSO PROFESIONAL */}
            {renderCourseItem(
              professionalCourse.images, // Pasamos el array de imagenes
              professionalCourse.items[0].name,
              openModal,
              infoContentProfesional(),
              termsContent(),
              professionalCourse.description
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesSection;
