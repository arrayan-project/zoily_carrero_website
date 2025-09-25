/**
 * Sección de título y descripción para el contenido UGC.
 * Muestra el título y la descripción con estilos y colores adaptados al tema.
 *
 * @component
 * @param {UGCContentTitleSectionProps} props - Props del componente, incluyendo título y descripción.
 * @returns {JSX.Element}
 */
import React from "react";
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../context/themeContext";
import {
  HEADING_4_CLASS,
  FONT_FAMILY_PRIMARY,
  GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS,
} from "../../constants/styles";

interface UGCContentTitleSectionProps {
  title: string;
  subtitle: string;
  description: string[];
}

const UGCContentTitleSection: React.FC<UGCContentTitleSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  const { colors } = useTheme();

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 md:mt-20 md:mb-20">
      <div className="flex justify-between items-start mb-8 md:mb-12 flex-nowrap gap-8 md:gap-36">
        {/* Títulos originales a la izquierda */}
        <div className="text-left mb-8 md:mb-0 flex-shrink-0">
          <RevealWrapper animationClass="fade-in-up-animation">
            <p
              className={`${HEADING_4_CLASS} text-base mb-4`}
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

      {/* Description part */}
      <div className="max-w-3xl">
        {description.map((line, index) => (
          <RevealWrapper key={index} animationClass="fade-in-up-animation">
            <p
              className={`${GENERAL_SECTION_PARAGRAPH_DESCRIPTION_CLASS} mt-2 text-justify`}
              style={{ color: colors.text }}
            >
              {line}
            </p>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
};

export default UGCContentTitleSection;
