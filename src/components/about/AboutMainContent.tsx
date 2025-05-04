/* src/components/about/AboutMainContent.tsx */
import React from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { aboutInfo } from '../../data/aboutData';
import images from '../../assets/images';
import { useTheme } from '../context/useThemeHook';
import RevealWrapper from '../common/RevealWrapper';

const AboutMainContent: React.FC = React.memo(() => {
  const { colors } = useTheme();
  const { title, description1, description2 } = aboutInfo || {};

  return (
    <div className="lg:flex lg:items-start lg:justify-between lg:gap-8 flex-col-reverse lg:flex-row md:mt-24">
      {/* Image Section */}
      <div className="lg:w-2/5 mb-8 lg:mb-0">
        <RevealWrapper animationClass="fade-in-up-animation">
          <ImageWithFallback
            src={images.zoilyblack}
            alt="Equipo trabajando"
            fallbackSrc="/img/default-image.png"
            className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
            loading="lazy"
          />
        </RevealWrapper>
      </div>

      {/* Text Section */}
      <section className="lg:w-3/5 lg:ml-32 pt-12">
        <div className="max-w-lg">
          {title && (
            <RevealWrapper animationClass="fade-in-text">
              <h2
                className="text-2xl md:text-5xl font-cinzel font-light text-center mb-12 tracking-wider"
                style={{ color: colors.accent }}
              >
                {title}
              </h2>
            </RevealWrapper>
          )}

          <div className="prose prose-lg" style={{ color: colors.text }}>
            {description1 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className="leading-relaxed font-cinzel text-sm md:text-base">
                  {description1}
                </p>
              </RevealWrapper>
            )}
            {description2 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className="mt-4 leading-relaxed font-cinzel text-sm md:text-base">
                  {description2}
                </p>
              </RevealWrapper>
            )}
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutMainContent;