// src/components/sliders/MobileServicesCarousel.tsx

/*
##### Función #####
- Este componente muestra un carrusel horizontal de servicios en la vista móvil.
- Utiliza el componente Slider de react-slick para el carrusel.
- Utiliza el componente MobileServiceItem para mostrar cada servicio.

##### Componentes con los que interactúa #####
- Slider: Utiliza el componente Slider de react-slick para el carrusel.
- MobileServiceItem: Utiliza el componente MobileServiceItem para mostrar cada servicio.
- ModalContent: Utiliza la interface ModalContent para tipar el contenido del modal.

##### Componentes que lo utilizan #####
- Se utiliza en la página de servicios para mostrar los servicios en la vista móvil.
*/

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalContent } from "../../data/servicesData";
import MobileServiceItem from "./MobileServiceItem"; // Importamos el nuevo componente

interface MobileServicesCarouselProps {
  services: {
    images: string[];
    title: string;
    infoContent: React.ReactNode;
    termsContent: React.ReactNode;
    description: string;
  }[];
  openModal: (content: ModalContent) => void; // Agregamos la propiedad openModal
}

const MobileServicesCarousel: React.FC<MobileServicesCarouselProps> = ({
  services,
  openModal, // Recibimos la propiedad openModal
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
    centerPadding: "0px", // Modificamos el centerPadding
  };

  return (
    <div className="w-full flex justify-center"> {/* Agregamos flex justify-center */}
      {/* Contenedor para controlar el ancho de los marcadores */}
      <div className="relative w-11/12 md:w-10/12"> {/* Agregamos w-11/12 md:w-10/12 */}
        {/* Carrusel de servicios */}
        <Slider {...sliderSettings}>
          {/* Iteramos sobre los servicios */}
          {services.map((service, index) => (
            <div key={index} className="px-2">
              {/* Usamos el nuevo componente MobileServiceItem */}
              <MobileServiceItem
                images={service.images}
                title={service.title}
                openModal={openModal} // Pasamos la propiedad openModal
                infoContent={service.infoContent}
                termsContent={service.termsContent}
                description={service.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileServicesCarousel;
