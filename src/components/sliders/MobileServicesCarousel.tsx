// src/components/sliders/MobileServicesCarousel.tsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Service,
  ModalContent,
  infoContentNovia,
  infoContentSocial,
  infoContentPeinado,
  infoContentMadura,
  infoContentGlam,
  infoContentExpress,
  termsContent,
} from "../../data/servicesData";
import { renderServiceItem } from "../../utils/renderItems";

interface MobileServicesCarouselProps {
  services: Service[];
  openModal: (content: ModalContent) => void;
}

const MobileServicesCarousel: React.FC<MobileServicesCarouselProps> = ({
  services,
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
          {services.map((service, index) => (
            <div key={index} className="px-10">
              {renderServiceItem(
                service.images, // Pasamos el array de imagenes
                service.items[0].name,
                openModal,
                index === 0
                  ? infoContentNovia()
                  : index === 1
                  ? infoContentSocial()
                  : index === 2
                  ? infoContentPeinado()
                  : index === 3
                  ? infoContentMadura()
                  : index === 4
                  ? infoContentGlam()
                  : infoContentExpress(),
                termsContent(),
                service.description
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
