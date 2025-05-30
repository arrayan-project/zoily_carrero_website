/**
 * Componente principal de contenido para la página "Sobre mí".
 * Muestra el título, descripciones y la imagen principal con animaciones y estilos adaptados al tema.
 *
 * @component
 * @returns {JSX.Element}
 */
import React from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { aboutInfo } from '../../data/aboutData';
import images from '../../assets/images';
import { useTheme } from '../context/themeContext';
import RevealWrapper from '../common/RevealWrapper';
import { FONT_FAMILY_PRIMARY, FONT_WEIGHT_LIGHT, TRACKING_WIDE, PARAGRAPH_CLASS, TEXT_CENTER } from '../../constants/styles';
import { getImageObject } from '../../utils/getImageObject';


const AboutMainContent: React.FC = React.memo(() => {
  const { colors } = useTheme();
  const { title, description1, description2 } = aboutInfo || {};

  return (
    <div className="lg:flex lg:items-start lg:justify-between lg:gap-8 flex-col-reverse lg:flex-row md:mt-24">
      {/* Image Section 
      <div>
      {title && (
            <RevealWrapper animationClass="fade-in-text">
              <h2
                // Using base font properties, specific text sizes, and TEXT_CENTER
                className={`${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_LIGHT} text-2xl md:text-5xl ${TEXT_CENTER} mb-12 ${TRACKING_WIDE}`}
                style={{ color: colors.accent }}
              >
                {title}
              </h2>
            </RevealWrapper>
          )}
      </div>

      <div className="lg:w-2/5 mb-8 lg:mb-0">
        <RevealWrapper animationClass="fade-in-up-animation">
          <ImageWithFallback
            src={getImageObject("zoilyblack")?.avif}
            alt="Equipo trabajando"
            fallbackSrc="/img/default-image.png"
            className="w-full aspect-[3/4] object-cover rounded-lg shadow-xl"
            loading="lazy"
          />
        </RevealWrapper>
      </div>*/}

      {/* Text Section */}
      <section className="lg:w-3/5 lg:ml-32 pt-12">
        <div className="max-w-lg">

          <div className="prose prose-lg" style={{ color: colors.text }}>
            {description1 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className={`${PARAGRAPH_CLASS} leading-relaxed`}>
                  {description1}
                </p>
              </RevealWrapper>
            )}
            {description2 && (
              <RevealWrapper animationClass="fade-in-text">
                <p className={`${PARAGRAPH_CLASS} mt-4 leading-relaxed`}>
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