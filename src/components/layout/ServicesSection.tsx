// src/components/layout/ServicesSection.tsx
import React from "react";
import {
  noviaMakeupServices,
  socialMakeupServices,
  peinadoMakeupServices,
  maduraMakeupServices,
  glamMakeupServices,
  expressMakeupServices,
  ModalContent,
  Service,
  infoContentNovia,
  infoContentExpress,
  infoContentGlam,
  infoContentMadura,
  infoContentPeinado,
  infoContentSocial,
  termsContent,
} from "../../data/servicesData";
import { imageArrays } from "../../assets/img/images";
import { renderServiceItem } from "../../utils/renderItems";
import MobileServicesCarousel from "../sliders/MobileServicesCarousel";
import useWindowSize from "../../hooks/useWindowSize";
import { useModal } from "../../pages/Services"; // Importamos el hook useModal

// Eliminamos la interfaz ServicesSectionProps

const ServicesSection: React.FC = () => { // Eliminamos las props
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
  const {
    serviceBrideImages,
    serviceSocialImages,
    serviceHairAndMakeupImages,
    serviceMatureSkinImages,
    serviceGlamImages,
    serviceExpressImages,
  } = imageArrays;

  return (
    <>
      {isMobileView ? (
        <div className="center">
          <MobileServicesCarousel
            services={servicesArray}
            openModal={openModal}
          />
        </div>
      ) : (
        <div className="tablet-carousel-container">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-4"
            aria-label="Servicios de Maquillaje"
          >
            {renderServiceItem(
              serviceBrideImages,
              "Maquillaje Novia",
              openModal,
              infoContentNovia(),
              termsContent(),
              noviaMakeupServices.description
            )}
            {renderServiceItem(
              serviceSocialImages,
              "Maquillaje Social",
              openModal,
              infoContentSocial(),
              termsContent(),
              socialMakeupServices.description
            )}
            {renderServiceItem(
              serviceHairAndMakeupImages,
              "Maquillaje y Peinado",
              openModal,
              infoContentPeinado(),
              termsContent(),
              peinadoMakeupServices.description
            )}
            {renderServiceItem(
              serviceMatureSkinImages,
              "Maquillaje en Piel Madura",
              openModal,
              infoContentMadura(),
              termsContent(),
              maduraMakeupServices.description
            )}
            {renderServiceItem(
              serviceGlamImages,
              "Maquillaje Glam",
              openModal,
              infoContentGlam(),
              termsContent(),
              glamMakeupServices.description
            )}
            {renderServiceItem(
              serviceExpressImages,
              "Maquillaje Quinceañera",
              openModal,
              infoContentExpress(),
              termsContent(),
              expressMakeupServices.description
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;
