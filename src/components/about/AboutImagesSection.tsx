/* src/components/about/AboutImagesSection.tsx */
import React from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { aboutImages } from '../../data/aboutData';
import RevealWrapper from '../common/RevealWrapper';

const AboutImagesSection: React.FC = React.memo(() => {
  if (!aboutImages.length) return null;

  return (
    <section className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      {aboutImages.map(({ src, alt }, index) => (
        <RevealWrapper
          key={`about-img-${index}`}
          animationClass="fade-in-up-animation"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <ImageWithFallback
              src={src}
              alt={alt || 'About image'}
              fallbackSrc="/img/default-image.png"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </RevealWrapper>
      ))}
    </section>
  );
});

export default AboutImagesSection;