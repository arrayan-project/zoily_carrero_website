// src/components/home/HomeBrandsSection.tsx
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage'; // Asegúrate de tener este componente

interface HomeBrandsSectionProps {
  brands: {
    imageSrc: string;
    alt: string;
  }[];
}

const HomeBrandsSection: React.FC<HomeBrandsSectionProps> = ({ brands }) => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cinzel font-extralight text-center mb-8">Nuestras Marcas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {brands.map((brand, index) => (
            <div key={index} className="w-32 h-32 flex items-center justify-center">
              <SmoothImage src={brand.imageSrc} alt={brand.alt} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBrandsSection;
