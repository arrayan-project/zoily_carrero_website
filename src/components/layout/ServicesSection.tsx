// src/components/layout/ServicesSection.tsx
import React from "react";
import {
  noviaMakeupServices,
  socialMakeupServices,
  peinadoMakeupServices,
  maduraMakeupServices,
  glamMakeupServices,
  expressMakeupServices,
  Service,
  infoContentNovia,
  infoContentExpress,
  infoContentGlam,
  infoContentMadura,
  infoContentPeinado,
  infoContentSocial,
  termsContent,
} from "../../data/servicesData";
import ServiceCarousel from "../sliders/ServiceSlider"; // Importamos ServiceCarousel
import useWindowSize from "../../hooks/useWindowSize";
import { useModal } from "../../pages/Services"; // Importamos el hook useModal
import Slider from "react-slick"; // Importamos Slider

const ServicesSection: React.FC = () => {
  const { isMobileView } = useWindowSize();
  const { openModal } = useModal(); // Usamos el hook useModal
  const servicesArray: Service[] = [
    noviaMakeupServices,
    socialMakeupServices,
    peinadoMakeupServices,
    maduraMakeupServices,
    glamMakeupServices,
    expressMakeupServices,
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
            {servicesArray.map((service, index) => (
              <div key={index} className="w-full aspect-square">
                <ServiceCarousel
                  images={service.images}
                  title={service.label} // Usamos el label como título
                  openModal={openModal}
                  infoContent={
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
                      : infoContentExpress()
                  }
                  termsContent={termsContent()}
                  description={service.description}
                  label={service.label} // Pasamos el label
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 md:mb-4"
            aria-label="Servicios de Maquillaje"
          >
            {servicesArray.map((service, index) => (
              <ServiceCarousel
                key={index}
                images={service.images}
                title={service.label} // Usamos el label como título
                openModal={openModal}
                infoContent={
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
                    : infoContentExpress()
                }
                termsContent={termsContent()}
                description={service.description}
                label={service.label} // Pasamos el label
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesSection;
