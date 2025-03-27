// src/components/home/HomeLinksSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import AnimationWrapper from "../common/AnimationLayer";


interface HomeLinksSectionProps {
  title: string;
  subtitle: string;
  subtitle1: string;
  links: {
    to: string;
    sectionId?: string; // ID de sección para vista móvil (opcional)
    imageSrc: string;
    alt: string;
    label: string; // Propiedad para el texto del recuadro
  }[];
  isMobileView: boolean;
  onSmoothScroll: (sectionId: string) => void;
}

const HomeLinksSection: React.FC<HomeLinksSectionProps> = ({ title, subtitle, subtitle1, links, isMobileView, onSmoothScroll }) => {
  const navigate = useNavigate(); // Inicializamos el hook useNavigate para navegación

  const handleClick = (link: HomeLinksSectionProps['links'][number]) => {
    if (isMobileView && link.sectionId) {
      onSmoothScroll(link.sectionId);
    } else {
      navigate(link.to);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center mb-8 md:mb-24">
      <AnimationWrapper animationClassName="fade-in-up">
        <h2 className="text-4xl md:text-5xl font-cinzel font-extralight mb-12">{title}</h2>
        <p className="text-gray-600 font-cinzel">{subtitle}</p>
        <p className="text-gray-600 mb-24 md:mb-28 font-cinzel">{subtitle1}</p>
      </AnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <AnimationWrapper animationClassName="fade-in-up">
            <div
              key={index}
              className="w-full aspect-square overflow-hidden p-1 sm:p-2 md:p-3 lg:p-3 rounded-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer relative group"
              style={{ boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.3)' }} // Añadimos un box-shadow
              onClick={() => handleClick(link)} // Usamos navigate para redirigir
            >
              
              <img
                src={link.imageSrc}
                alt={link.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Zoom en la imagen al pasar el cursor
              />
             
              
              {/* Recuadro con texto */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-70">
                <p className="text-white font-cinzel text-lg">{link.label}</p>
              </div>
            </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLinksSection;
