/**
 * Sección de características destacadas en el Home.
 * Muestra una imagen y una lista de features como párrafos con títulos.
 * Ajustado para que los textos de features estén más arriba.
 * Layout: elimina justify-between y usa justify-start para alinear elementos al principio.
 *
 * @component
 * @param {HomeFeaturesSectionProps} props - Props del componente.
 * @returns {JSX.Element}
 */
import React from 'react';
import SmoothImage from '../smoothImages/SmoothImage';
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../../components/context/themeContext";
import { FONT_FAMILY_PRIMARY } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";

interface HomeFeaturesSectionProps {
  imageKey: string;
  alt: string;
  subtitle0: string;
  subtitle1: string;
  subtitle2: string;
  features: {
    title: string;
    description: string;
  }[];
}

const HomeFeaturesSection: React.FC<HomeFeaturesSectionProps> = ({ imageKey, alt, subtitle0, subtitle1, subtitle2, features }) => {
  const { colors } = useTheme();
  const imageObject = getImageObject(imageKey);

  return (
    <section className="py-20 px-4 lg:px-12" style={{ backgroundColor: colors.background, color: colors.text }}>
      <div className="mx-auto max-w-7xl">
        {/* Layout dinámico con proporciones fr */}
        {/* Móvil: 1 columna. Tablet: 2 columnas 50/50. Desktop: 2 columnas con proporción 3/2. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr] items-stretch gap-8 md:gap-12 lg:gap-16">

          {/* IMAGEN */}
          <div className="flex justify-start items-center p-4">
            <RevealWrapper animationClass="slide-in-left-animation">
              <div className="p-[1px]" style={{ backgroundColor: colors.bannerTitle }}>
                <div className="p-2 lg:p-4" style={{ backgroundColor: colors.background }}>
                  <div className="overflow-hidden group w-full">
                    <SmoothImage
                      src={imageObject.webp}
                      alt={alt}
                      className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      disableInternalTransition={true}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* TEXTO: ahora justify-start para subir features */}
          <div className="flex flex-col justify-start h-full">
            {/* Subtítulos con margen reducido */}
            <div className="px-6 lg:px-12 mb-4 lg:mb-6">
              <RevealWrapper animationClass="fade-in-up-animation">
                <h2 className={`${FONT_FAMILY_PRIMARY} text-sm lg:text-base xl:text-lg mb-2`} style={{ color: colors.text }}>
                  {subtitle0}
                </h2>
              </RevealWrapper>
              <RevealWrapper animationClass="fade-in-up-animation">
                <h2 className={`${FONT_FAMILY_PRIMARY} text-3xl lg:text-4xl xl:text-5xl mb-2`} style={{ color: colors.secondaryText }}>
                  {subtitle1}
                </h2>
              </RevealWrapper>
              <RevealWrapper animationClass="fade-in-up-animation">
                <h2 className={`${FONT_FAMILY_PRIMARY} text-3xl lg:text-4xl xl:text-5xl`} style={{ color: colors.text }}>
                  {subtitle2}
                </h2>
              </RevealWrapper>
            </div>

            {/* Lista de features más arriba */}
            <div className="space-y-8 px-6 lg:px-12 mt-8">
              {features.map((feature, index) => (
                <RevealWrapper key={index} animationClass="slide-in-right-animation">
                  <div>
                    <h3 className={`${FONT_FAMILY_PRIMARY} text-lg lg:text-xl xl:text-2xl mb-2`} style={{ color: colors.text }}>
                      {feature.title}
                    </h3>
                    <p className="font-cinzel text-xs lg:text-sm" style={{ color: colors.bannerTitle }}>
                      {feature.description}
                    </p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesSection;
