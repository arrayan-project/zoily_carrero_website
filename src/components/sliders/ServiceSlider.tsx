import React, { useState } from "react";
import Slider from "react-slick";
import { ModalContent } from "../../types";

interface ServiceCarouselProps {
  images: string[];
  title: string;
  openModal: (content: ModalContent) => void;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
  label?: string;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  images,
  title,
  openModal,
  infoContent,
  termsContent,
  description,
  label,
}) => {
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
    console.error("Error en ServiceCarousel:", error);
    return (
      <section className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado en el carrusel de servicios.</p>
      </section>
    );
  }

  return (
    <article
      className="w-full aspect-square overflow-hidden relative group cursor-pointer p-0 sm:p-1 md:p-2 lg:p-2 rounded-sm bg-white shadow-md"
      style={{ boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.3)" }}
      onClick={handleOpenModal} // Moved onClick to the article
    >
      <Slider {...sliderSettings}>
        {images.map((img, index) => (
          <div key={index} className="w-full aspect-square"> {/* Changed figure to div */}
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
    </article>
  );
};

export default ServiceCarousel;
