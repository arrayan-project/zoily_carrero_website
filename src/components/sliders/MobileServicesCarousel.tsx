// src/components/sliders/MobileServicesCarousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getInfoContent, getServices } from "../../data/servicesData"; // Importamos desde servicesData.tsx
import MobileServiceItem from "./MobileServiceItem"; // Importamos MobileServiceItem
import { ModalContent } from "../../types";

interface MobileServicesCarouselProps {
  openModal: (content: ModalContent) => void;
}

const MobileServicesCarousel: React.FC<MobileServicesCarouselProps> = ({ openModal }) => {
  // Configuraciones del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
  };

  const services = getServices(); // Obtenemos los servicios

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-11/12 md:w-10/12">
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="px-10">
              <MobileServiceItem
                images={service.modalContent.images} // Pasamos el array de imagenes
                title={service.modalContent.title}
                openModal={openModal}
                infoContent={getInfoContent(index).infoContent}
                termsContent={getInfoContent(index).termsContent}
                description={getInfoContent(index).description}
                shortDescription={service.modalContent.description || ""} // Valor por defecto
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
