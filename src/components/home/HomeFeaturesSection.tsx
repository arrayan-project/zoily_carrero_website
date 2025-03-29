// src/components/home/HomeFeaturesSection.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage'; // Asegúrate de tener este componente
import AnimationWrapper from "../common/AnimationLayer";


interface HomeFeaturesSectionProps {
  imageSrc: string;
  alt: string;
  features: {
    title: string;
    description: string;
  }[];
}

const HomeFeaturesSection: React.FC<HomeFeaturesSectionProps> = ({ imageSrc, alt, features }) => {
  return (
    <section className="py-0"> {/* Eliminamos padding vertical */}
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 h-full"> {/* Agregamos h-full y items-stretch */}
        <AnimationWrapper animationClassName="slide-in-left">
          <div className="md:order-1 overflow-hidden">
            <SmoothImage src={imageSrc} alt={alt} className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"/>
          </div>
        </AnimationWrapper>
        
        <AnimationWrapper animationClassName="slide-in-right">
          <div className="md:order-2 grid grid-cols-1 md:grid-cols-2 gap-0 h-full"> {/* Agregamos h-full */}
            {features.map((feature, index) => (
              <div key={index} className="w-full">
                {/* Added min-h-[200px] for mobile view and md:min-h-full for desktop view */}
                <div className="shadow-sm h-full flex flex-col items-center justify-center transition-colors duration-300 hover:bg-pink-100 px-6 text-center min-h-[200px] md:min-h-full">
                  <h3 className="text-sm md:text-base font-cinzel font-medium mb-4">{feature.title}</h3>
                  <p className="text-sm md:text-xs xl:text-sm text-gray-600 font-cinzel">{feature.description}</p>
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
