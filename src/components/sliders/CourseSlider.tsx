import React, { useState } from "react";
import Slider from "react-slick";
import { useTheme } from "../context/useThemeHook";
import { CourseModalContent } from "../../data/coursesData";
import { getTextColorClass } from "../../utils/utils";

interface CourseSliderProps {
  images: string[];
  title: string;
  openModal: (content: CourseModalContent) => void;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
  label: string;
}

const CourseSlider: React.FC<CourseSliderProps> = ({
  images,
  title,
  openModal,
  infoContent,
  termsContent,
  description,
  label,
}) => {
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);

  const handleOpenModal = () => {
    try {
      openModal({ images, title, infoContent, termsContent, description });
    } catch (err) {
      setError("Error al abrir el modal.");
      console.error("Error en handleOpenModal:", err);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  if (error) {
    console.error("Error en CourseSlider:", error);
    return (
      <section className="error-container">
        <p className="error-message">
          Ha ocurrido un error inesperado en el carrusel de cursos.
        </p>
      </section>
    );
  }

  return (
    <article className="text-center"
    onClick={handleOpenModal} // Moved onClick to the article
    >
      <div
        className="w-full aspect-square overflow-hidden relative group cursor-pointer p-1 sm:p-2 md:p-3 lg:p-3 rounded-sm bg-white shadow-md"
        style={{ boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.3)" }}
      >
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index} className="w-full aspect-square">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:blur-sm"
              />
            </div>
          ))}
        </Slider>

        <figcaption className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70">
          <p className="text-white font-cinzel text-lg">{label}</p>
        </figcaption>
      </div>
    </article>
  );
};

export default CourseSlider;
