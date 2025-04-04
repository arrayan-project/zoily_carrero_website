// src/components/home/HomeGallerySection.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import AnimationWrapper from "../common/AnimationLayer";
import { useNavigate } from 'react-router-dom';
import { getTextColorClass } from "../../utils/utils";
import { useTheme } from "../../components/context/useThemeHook";

interface HomeGallerySectionProps {
  imageSrc: string;
  alt: string;
  gallery: {
    title: string;
    description: string;
  }[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({ imageSrc, alt, gallery }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleViewMoreClick = () => {
    navigate('/gallery#gallery');
  };

  return (
    <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}> {/* Añadimos la clase de fondo */}
      <div className={`mx-auto w-full ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
       <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 h-full"> {/* Mantenemos la grilla para la imagen */}
          {/* Contenedor de texto */}
          <AnimationWrapper animationClassName="slide-in-left">
            <div className="flex flex-col items-center justify-center gap-4 h-full text-center"> {/* Centrado y flexible */}
              {gallery.map((galleryItem, index) => (
                <div key={index} className="w-full">
                  <div className="flex flex-col items-center justify-center px-6 py-8"> {/* Padding vertical */}
                    <h3 className={`text-xl font-cinzel font-medium mb-16 ${getTextColorClass(theme)}`}>{galleryItem.title}</h3>
                    <p className={`text-sm md:text-xs xl:text-sm text-gray-600 font-cinzel px-4 ${getTextColorClass(theme)}`}>{galleryItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>

          {/* Contenedor de imagen */}
          <AnimationWrapper animationClassName="slide-in-right">
            <div className="overflow-hidden relative">
              <SmoothImage
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <button onClick={handleViewMoreClick} className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-md font-cinzel hover:bg-pink-700 transition-colors duration-300">
                Ver más...
              </button>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
