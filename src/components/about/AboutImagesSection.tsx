// src/components/about/AboutImagesSection.tsx
import React from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { aboutImages } from '../../data/aboutData';
import images from '../../assets/img/images';

const AboutImagesSection: React.FC = () => {
  return (
    <section className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      {aboutImages.map((image, index) => (
        <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
          <ImageWithFallback
            src={images.zoilyblack}
            alt={image.alt}
            fallbackSrc="/img/default-image.png"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </section>
  );
};

export default AboutImagesSection;
