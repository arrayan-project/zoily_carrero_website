import React from "react";
import {
  getInfoContent,
  servicesArray,
  termsContent,
} from "../../data/servicesData"; // Importamos desde servicesData.tsx
import ServiceCarousel from "../sliders/ServiceSlider";
import useWindowSize from "../../hooks/useWindowSize";
import { useModal } from "../../pages/Services";
import Slider from "react-slick";

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
    <section aria-label="Servicios de Maquillaje" className="mb-24">
      {isMobileView ? (
        <Slider {...sliderSettings}>
          {servicesArray.map((service, index) => (
            <div key={index}>
              <ServiceCarousel
                images={service.modalContent.images} // Usamos service.modalContent.images
                title={service.modalContent.title} // Usamos service.modalContent.title
                openModal={openModal}
                infoContent={getInfoContent(index).infoContent} // Usamos getInfoContent(index).infoContent
                termsContent={termsContent()}
                description={getInfoContent(index).description} // Usamos getInfoContent(index).description
                label={service.modalContent.title} // Usamos service.modalContent.title
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {servicesArray.map((service, index) => (
            <ServiceCarousel
              key={index}
              images={service.modalContent.images} // Usamos service.modalContent.images
              title={service.modalContent.title} // Usamos service.modalContent.title
              openModal={openModal}
              infoContent={getInfoContent(index).infoContent} // Usamos getInfoContent(index).infoContent
              termsContent={termsContent()}
              description={getInfoContent(index).description} // Usamos getInfoContent(index).description
              label={service.modalContent.title} // Usamos service.modalContent.title
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
