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
  Course,
  termsContent, // Importamos termsContent
} from "../../data/coursesData";
import CourseSlider from "../sliders/CourseSlider"; // Importamos CourseSlider
import useWindowSize from "../../hooks/useWindowSize";
import { useModal } from "../../pages/Services"; // Importamos el hook useModal
import Slider from "react-slick"; // Importamos Slider

const CoursesSection: React.FC = () => {
  const { isMobileView } = useWindowSize();
  const { openModal } = useModal(); // Usamos el hook useModal
  const coursesArray: Course[] = [
    basicCourse,
    intermediateCourse,
    advancedCourse,
    professionalCourse,
  ];

  const sliderSettings = {
    dots: true, // Mostramos los puntos de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Ocultamos las flechas de navegación
  };

  return (
    <>
      <div className="tablet-carousel-container">
        {isMobileView ? (
          <Slider {...sliderSettings}>
            {coursesArray.map((course, index) => (
              <div key={index} className="w-full aspect-square">
                <CourseSlider
                  images={course.images}
                  title={course.label} // Usamos el label como título
                  openModal={openModal}
                  infoContent={
                    index === 0
                      ? infoContentBasico()
                      : index === 1
                      ? infoContentIntermedio()
                      : index === 2
                      ? infoContentAvanzado()
                      : infoContentProfesional()
                  }
                  termsContent={termsContent()} // Usamos termsContent
                  description={course.description}
                  label={course.label} // Pasamos el label
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8 md:mb-4"
            aria-label="Cursos"
          >
            {coursesArray.map((course, index) => (
              <CourseSlider
                key={index}
                images={course.images}
                title={course.label} // Usamos el label como título
                openModal={openModal}
                infoContent={
                  index === 0
                    ? infoContentBasico()
                    : index === 1
                    ? infoContentIntermedio()
                    : index === 2
                    ? infoContentAvanzado()
                    : infoContentProfesional()
                }
                termsContent={termsContent()} // Usamos termsContent
                description={course.description}
                label={course.label} // Pasamos el label
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CoursesSection;
