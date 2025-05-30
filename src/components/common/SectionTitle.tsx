/**
 * Componente reutilizable para mostrar títulos de sección con animación de aparición.
 *
 * @component
 * @param {SectionTitleProps} props - Props del componente, incluyendo el título, clase y estilos opcionales.
 * @returns {JSX.Element}
 */
import React from "react";
import RevealWrapper from "../common/RevealWrapper";

interface SectionTitleProps {
  title: string;
  className?: string;
    style?: React.CSSProperties;

}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className, style }) => {

  return (
    <RevealWrapper animationClass="fade-in-text">
      <h1
        className={`${className} text-center text-2xl md:text-xl lg:text-3xl font-light text-white tracking-wide mb-12 md:mb-2`}
        style={style}
      >
        {title}
      </h1>
    </RevealWrapper>
  );
};

export default SectionTitle;
