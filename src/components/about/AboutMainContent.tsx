// src/components/about/AboutMainContent.tsx
import React from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { aboutInfo } from '../../data/aboutData';
import images from '../../assets/images';
import { useTheme } from '../context/useThemeHook';
import RevealWrapper from '../common/RevealWrapper';

const AboutMainContent: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="lg:flex lg:items-start lg:justify-between lg:gap-8 md:mt-24 flex-col-reverse lg:flex-row">
      <div className="lg:w-2/5 mb-8 lg:mb-0">
        <RevealWrapper animationClass="fade-in-up-animation">
          <ImageWithFallback
            src={images.zoilyblack}
            alt="Equipo trabajando"
            fallbackSrc="/img/default-image.png"
            className="rounded-lg shadow-xl object-cover aspect-[3/4] w-full"
            loading="lazy"
          />
        </RevealWrapper>
      </div>

      <section className="lg:w-3/5 lg:ml-32 pt-12">
        <div className="max-w-lg">
          <RevealWrapper animationClass="fade-in-text">
            {aboutInfo?.title && (
              <h2 className={`text-2xl md:text-5xl font-cinzel font-light text-center mb-12 tracking-wider`} style={{ color: colors.accent }}>
                {aboutInfo.title}
              </h2>
            )}
          </RevealWrapper>

          <div className="prose prose-lg">
          <RevealWrapper animationClass="fade-in-text">
              {aboutInfo?.description1 && (
                <p className={`leading-relaxed text-sm font-cinzel font-light md:text-base md:font-normal`} style={{ color: colors.text }}>
                  {aboutInfo.description1}
                </p>
              )}
              {aboutInfo?.description2 && (
                <p className={`mt-4 leading-relaxed text-sm font-cinzel font-light md:text-base md:font-normal`} style={{ color: colors.text }}>
                  {aboutInfo.description2}
                </p>
              )}
           </RevealWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMainContent;
