// src/components/home/HomeFeaturesSection.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import AnimationWrapper from "../common/AnimationLayer";
import { useTheme } from "../../components/context/useThemeHook";

interface HomeFeaturesSectionProps {
  imageSrc: string;
  alt: string;
  features: {
    title: string;
    description: string;
  }[];
}

const HomeFeaturesSection: React.FC<HomeFeaturesSectionProps> = ({ imageSrc, alt, features }) => {
  const { colors } = useTheme();

  return (
    <section className={`py-20 px-12 md:mb-0`} style={{ backgroundColor: colors.background, color: colors.text  }}>
      <div className={`mx-auto w-full`} style={{ color: colors.text }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 h-full">
          <AnimationWrapper animationClassName="slide-in-left">
            <div className="md:order-1 overflow-hidden">
              <SmoothImage src={imageSrc} alt={alt} className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"/>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper animationClassName="slide-in-right">
            <div className="md:order-2 grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
              {features.map((feature, index) => (
                <div key={index} className="w-full group"> {/* Añadimos la clase group */}
                  <div className="shadow-sm h-full flex flex-col items-center justify-center transition-colors duration-300 hover:bg-gray-700 px-6 text-center min-h-[200px] md:min-h-full">
                    <h3 className={`text-sm md:text-base xl:text-base font-cinzel font-medium mb-4 group-hover:text-black`} style={{ color: colors.bannerTitle }} >{feature.title}</h3> {/* Clase condicional para el título */}
                    <p className={`text-sm md:text-xs xl:text-sm font-cinzel group-hover:text-black`} style={{ color: colors.bannerTitle }} >{feature.description}</p> {/* Clase condicional para la descripción */}
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesSection;
