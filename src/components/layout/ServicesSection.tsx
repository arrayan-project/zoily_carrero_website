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
import ServiceCarousel from "../sliders/ServiceSlider";
import useWindowSize from "../../hooks/useWindowSize";
import { useModal } from "../../pages/Services";
import Slider from "react-slick";

const servicesArray: Service[] = [
  noviaMakeupServices,
  socialMakeupServices,
  peinadoMakeupServices,
  maduraMakeupServices,
  glamMakeupServices,
  expressMakeupServices,
];

const getInfoContent = (index: number) => {
  switch (index) {
    case 0:
      return infoContentNovia();
    case 1:
      return infoContentSocial();
    case 2:
      return infoContentPeinado();
    case 3:
      return infoContentMadura();
    case 4:
      return infoContentGlam();
    default:
      return infoContentExpress();
  }
};

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

const ServicesSection: React.FC = () => {
  const { isMobileView } = useWindowSize();
  const { openModal } = useModal();

  return (
    <section aria-label="Servicios de Maquillaje">
      {isMobileView ? (
        <Slider {...sliderSettings}>
          {servicesArray.map((service, index) => (
            <div key={index}>
              <ServiceCarousel
                images={service.images}
                title={service.label}
                openModal={openModal}
                infoContent={getInfoContent(index)}
                termsContent={termsContent()}
                description={service.description}
                label={service.label}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesArray.map((service, index) => (
            <ServiceCarousel
              key={index}
              images={service.images}
              title={service.label}
              openModal={openModal}
              infoContent={getInfoContent(index)}
              termsContent={termsContent()}
              description={service.description}
              label={service.label}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
