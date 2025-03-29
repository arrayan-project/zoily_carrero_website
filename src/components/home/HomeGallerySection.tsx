// src/components/home/HomeGallerySection.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import AnimationWrapper from "../common/AnimationLayer";

interface HomeGallerySectionProps {
  imageSrc: string;
  alt: string;
  gallery: {
    title: string;
    description: string;
  }[];
}

const HomeGallerySection: React.FC<HomeGallerySectionProps> = ({ imageSrc, alt, gallery }) => {
  return (
    <section className="py-16 px-4"> {/* Agregamos padding vertical y horizontal */}
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 h-full"> {/* Mantenemos la grilla para la imagen */}
          {/* Contenedor de texto */}
          <AnimationWrapper animationClassName="slide-in-left">
            <div className="flex flex-col items-center justify-center gap-4 h-full text-center"> {/* Centrado y flexible */}
              {gallery.map((galleryItem, index) => (
                <div key={index} className="w-full">
                  <div className="flex flex-col items-center justify-center px-6 py-8"> {/* Padding vertical */}
                    <h3 className="text-base font-cinzel font-medium mb-4">{galleryItem.title}</h3>
                    <p className="text-base text-gray-600 font-cinzel px-4">{galleryItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimationWrapper>

          {/* Contenedor de imagen */}
          <AnimationWrapper animationClassName="slide-in-right">
            <div className="overflow-hidden">
              <SmoothImage
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover rounded-base shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
