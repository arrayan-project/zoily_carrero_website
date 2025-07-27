/**
 * Componente para mostrar el título de la galería con animación de aparición.
 *
 * @component
 * @param {GalleryTitleProps} props - Props del componente, incluyendo el título y clases opcionales.
 * @returns {JSX.Element}
 */
import React from "react";
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../context/themeContext";
import { HEADING_4_CLASS, FONT_FAMILY_PRIMARY } from "../../constants/styles";

interface GalleryTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

const GalleryTitle: React.FC<GalleryTitleProps> = ({ title, subtitle }) => {
  const { colors } = useTheme();
  return (
    <div className="flex justify-between items-start mt-24 md:mt-40 mb-8 md:mb-24 flex-nowrap gap-8 md:gap-36 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Títulos originales a la izquierda */}
      <div className="text-left mb-8 md:mb-0 flex-shrink-0">
        <RevealWrapper animationClass="fade-in-up-animation">
          <p
            className={`${HEADING_4_CLASS} text-sm lg:text-base xl:text-lg mb-2`}
            style={{ color: colors.text }}
          >
            {subtitle}
          </p>
        </RevealWrapper>
        <RevealWrapper animationClass="fade-in-up-animation">
          <h2
            className={`${FONT_FAMILY_PRIMARY} text-2xl lg:text-4xl xl:text-5xl`}
            style={{ color: colors.text }}
          >
            {title}
          </h2>
        </RevealWrapper>
      </div>

      {/* Título grande a la derecha */}
      <div className="text-right">
        <RevealWrapper animationClass="fade-in-up-animation">
          <h3
            className={`${FONT_FAMILY_PRIMARY} text-4xl md:text-9xl whitespace-nowrap`}
            style={{ color: `${colors.accent}20` }}
          >
            {title}
          </h3>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default GalleryTitle;
