// src/components/home/HomeFeaturesSection.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import RevealWrapper from "../common/RevealWrapper";
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
            <div className="md:order-1 overflow-hidden">    
             <RevealWrapper animationClass="slide-in-left-animation">       
               <SmoothImage 
                  src={imageSrc} 
                  alt={alt} 
                  className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
                  disableInternalTransition={true}
                />
              </RevealWrapper>
            </div>
            <div className="md:order-2 grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="w-full group"> {/* Añadimos la clase group */}
                    <div className="shadow-sm h-full flex flex-col items-center justify-center transition-colors duration-300 hover:bg-gray-700 px-6 text-center min-h-[200px] md:min-h-full">
                    <RevealWrapper animationClass="slide-in-right-animation">
                      <h3 
                        className={`text-sm md:text-base xl:text-base font-cinzel font-medium mb-4 group-hover:text-black`} 
                        style={{ color: colors.bannerTitle }} >
                        {feature.title}</h3> {/* Clase condicional para el título */}
                    </RevealWrapper>  
                    <RevealWrapper animationClass="slide-in-right-animation">
                      <p 
                        className={`text-sm md:text-xs xl:text-sm font-cinzel group-hover:text-black`} 
                        style={{ color: colors.bannerTitle }} >
                        {feature.description}</p> {/* Clase condicional para la descripción */}
                    </RevealWrapper> 
                    </div>
                </div>
              ))}
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesSection;
