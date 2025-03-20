// src/components/sliders/MobileCoursesCarousel.tsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalContent } from "../../data/servicesData";
import MobileCourseItem from "./MobileCourseItem"; // Importamos el nuevo componente
import { CourseData } from "../../data/coursesData";
import courseData from "../../data/coursesData"; // Importamos courseData

interface MobileCoursesCarouselProps {
  courses: CourseData[];
  openModal: (content: ModalContent) => void;
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
    autoplay: false,
    arrows: false,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-11/12 md:w-10/12">
        <Slider {...sliderSettings}>
          {courses.map((course, index) => (
            <div key={index} className="px-2">
              <MobileCourseItem
                image={course.image}
                title={course.title}
                openModal={openModal}
                infoContent={course.infoContent()}
                termsContent={course.termsContent()}
                courseKey={Object.keys(courseData)[index]} // Now courseData is defined
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileCoursesCarousel;
