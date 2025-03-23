// src/components/layout/ServicesIncludeSection.tsx
import React from "react";
import { useTheme } from "../context/useThemeHook";
import { getTextColorClass } from "../../utils/utils";
import AnimationWrapper from "../common/AnimationLayer";
import ServiceIncludeItem from "../common/ServiceIncludeItem";
import { SERVICES_INCLUDE_TITLE_CLASS } from "../../constants/styles";

const ServicesIncludeSection = () => {
  const { theme } = useTheme();
  return (
    <div className="text-center space-y-8 px-2 py-16 md:py-8 md:px-6 lg:px-68 mb-24 md:mb-32">
      <AnimationWrapper animationClassName="fade-in-text">
        <h2
          className={`${SERVICES_INCLUDE_TITLE_CLASS} ${getTextColorClass(
            theme
          )} text-lg md:text-xl lg:text-3xl`}
        >
          Nuestros servicios incluyen
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
          <ServiceIncludeItem
            title="Asesoría para cuidado de la piel"
            description="Hidratación, limpieza y productos"
          />
          <ServiceIncludeItem
            title="Asesoría de imagen"
            description="Accesorios y prendas según la ocasión"
          />
          <ServiceIncludeItem
            title="Regalo sorpresa"
            description="Algo que te ayudará a recordar tu día"
          />
        </ul>
      </AnimationWrapper>
    </div>
  );
};

export default ServicesIncludeSection;
