/**
 * Sección de características destacadas en el Home.
 * Muestra una imagen y una lista de features con animaciones y estilos adaptados al tema.
 *
 * @component
 * @param {HomeFeaturesSectionProps} props - Props del componente, incluyendo la imagen y el array de features.
 * @returns {JSX.Element}
 */
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../../components/context/themeContext";
import { HOME_FEATURES_ITEM_TITLE_CLASS, HOME_FEATURES_ITEM_DESCRIPTION_CLASS } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";

interface HomeFeaturesSectionProps {
  imageKey: string;
  alt: string;
  features: {
    title: string;
    description: string;
  }[];
}

const HomeFeaturesSection: React.FC<HomeFeaturesSectionProps> = ({ imageKey, alt, features }) => {
  const { colors } = useTheme();
  const imageObject = getImageObject(imageKey);

  return (
    <section className={`py-20 md:px-12 md:mb-0`} style={{ backgroundColor: colors.background, color: colors.text  }}>
      <div className={`mx-auto w-full`} style={{ color: colors.text }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 h-full">       
            <div className="md:order-1 overflow-hidden">    
             <RevealWrapper animationClass="slide-in-left-animation">       
               <SmoothImage 
                  src={imageObject.webp}
                  alt={alt} 
                  className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
                  disableInternalTransition={true}
                  loading="lazy"
                />
              </RevealWrapper>
            </div>
            <div className="md:order-2 grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="w-full group">
                    <div className="h-full flex flex-col items-center justify-center duration-300 px-6 text-center min-h-[200px] md:min-h-full">
                    <RevealWrapper animationClass="slide-in-right-animation">
                      <h3
                        className={`${HOME_FEATURES_ITEM_TITLE_CLASS}`}
                        style={{ color: colors.bannerTitle }} >
                        {feature.title}</h3>
                    </RevealWrapper>
                    <RevealWrapper animationClass="slide-in-right-animation">
                      <p
                        className={`${HOME_FEATURES_ITEM_DESCRIPTION_CLASS}`}
                        style={{ color: colors.bannerTitle }} >
                        {feature.description}</p>
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
