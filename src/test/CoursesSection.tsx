import React from "react";
import { Course, termsContent } from "../data/coursesData";
import { 
  basicCourse, 
  intermediateCourse, 
  advancedCourse, 
  professionalCourse, 
  infoContentBasico, 
  infoContentIntermedio, 
  infoContentAvanzado, 
  infoContentProfesional 
} from "../data/coursesData";
import CourseSlider from "../components/sliders/CourseSlider"; 
import useWindowSize from "../hooks/useWindowSize"; 
import { useModal } from "../pages/Services";
import Slider from "react-slick";

const CoursesSection: React.FC = () => {
  const { isMobileView } = useWindowSize();
  const { openModal } = useModal();

  const coursesArray: Course[] = [
    basicCourse,
    intermediateCourse,
    advancedCourse,
    professionalCourse,
  ];

  const sliderSettings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  // Función para obtener el contenido correspondiente al curso
  const getInfoContent = (index: number) => {
    switch (index) {
      case 0:
        return infoContentBasico();
      case 1:
        return infoContentIntermedio();
      case 2:
        return infoContentAvanzado();
      case 3:
        return infoContentProfesional();
      default:
        return infoContentBasico();
    }
  };

  return (
    <div className="tablet-carousel-container">
      {isMobileView ? (
        <Slider {...sliderSettings}>
          {coursesArray.map((course, index) => (
            <div key={index} className="w-full aspect-square">
              <CourseSlider
                images={course.images}
                title={course.label} 
                openModal={openModal}
                infoContent={getInfoContent(index)} 
                termsContent={termsContent()}
                description={course.description}
                label={course.label}
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
              title={course.label} 
              openModal={openModal}
              infoContent={getInfoContent(index)} 
              termsContent={termsContent()}
              description={course.description}
              label={course.label}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesSection;
