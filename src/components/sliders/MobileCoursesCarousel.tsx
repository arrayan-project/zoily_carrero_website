// src/components/sliders/MobileCoursesCarousel.tsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CourseModalContent,
  Course,
  infoContentBasico,
  infoContentIntermedio,
  infoContentAvanzado,
  infoContentProfesional,
  termsContent,
} from "../../data/coursesData";
import { renderCourseItem } from "../../utils/renderItems";

interface MobileCoursesCarouselProps {
  courses: Course[];
  openModal: (content: CourseModalContent) => void;
}

const MobileCoursesCarousel: React.FC<MobileCoursesCarouselProps> = ({
  courses,
  openModal,
}) => {
  // Configuraciones del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 3000,
    arrows: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-11/12 md:w-10/12">
        <Slider {...sliderSettings}>
          {courses.map((course, index) => (
            <div key={index} className="px-10">
              {renderCourseItem(
                course.images, // Pasamos el array de imagenes
                course.items[0].name,
                openModal,
                index === 0
                  ? infoContentBasico()
                  : index === 1
                  ? infoContentIntermedio()
                  : index === 2
                  ? infoContentAvanzado()
                  : infoContentProfesional(),
                termsContent(),
                course.description
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileCoursesCarousel;
