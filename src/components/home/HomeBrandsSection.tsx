// src/components/home/HomeBrandsSection.tsx
import React, { useRef, useEffect } from 'react';
import SmoothImage from '../smoothImages/SmoothImage';

interface HomeBrandsSectionProps {
  brands: {
    imageSrc: string;
    alt: string;
  }[];
}

const HomeBrandsSection: React.FC<HomeBrandsSectionProps> = ({ brands }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let scrollAmount = 0;
      const scrollStep = 2; // Ajusta la velocidad de desplazamiento
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const scrollInterval = setInterval(() => {
        scrollAmount += scrollStep;
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0; // Reinicia al llegar al final
        }
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }, 15); // Ajusta el intervalo para controlar la velocidad

      return () => clearInterval(scrollInterval); // Limpia el intervalo al desmontar el componente
    }
  }, [brands]);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cinzel font-extralight text-center mb-8">Nuestras Marcas</h2>
        <div ref={sliderRef} className="overflow-x-hidden whitespace-nowrap flex gap-8 scroll-smooth">
          {brands.map((brand, index) => (
            <div key={index} className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
              <SmoothImage src={brand.imageSrc} alt={brand.alt} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBrandsSection;
