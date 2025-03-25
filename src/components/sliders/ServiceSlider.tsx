// src/components/sliders/ServiceSlider.tsx
import React, { useState } from "react";
import Slider from "react-slick";
import { useTheme } from "../context/useThemeHook";
import { ModalContent } from "../../data/servicesData";
import { getTextColorClass } from "../../utils/utils";

interface ServiceCarouselProps {
  images: string[];
  title: string;
  openModal: (content: ModalContent) => void;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
  label: string; // Agregamos la propiedad label
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  images,
  title,
  openModal,
  infoContent,
  termsContent,
  description,
  label, // Recibimos la propiedad label
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
    console.error("Error en ServiceCarousel:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado en el carrusel de servicios.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 justify-center items-center text-center">
      <div
        className={`w-full aspect-square overflow-hidden relative group cursor-pointer p-1 sm:p-2 md:p-3 lg:p-3 rounded-sm bg-white shadow-md`} style={{ boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.3)' }} // Agregamos group y rounded-sm
        onClick={handleOpenModal}
      >

          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index} className="w-full aspect-square">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:blur-sm" // Agregamos el zoom
                />
              </div>
            ))}
          </Slider>

        {/* Recuadro con texto */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70"> {/* Agregamos el efecto de aclarado */}
          <p className="text-white font-cinzel text-lg">{label}</p> {/* Usamos la propiedad label */}
        </div>
      </div>

      <h2
        onClick={handleOpenModal}
        className={`text-xl md:text-2xl font-cinzel tracking-wide cursor-pointer ${getTextColorClass(theme)}`}
      >
      </h2>
    </div>
  );
};

export default ServiceCarousel;
