/**
 * Componente para mostrar el título de la galería con animación de aparición.
 *
 * @component
 * @param {GalleryTitleProps} props - Props del componente, incluyendo el título y clases opcionales.
 * @returns {JSX.Element}
 */
import React from "react";
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../context/themeContext";;

interface GalleryTitleProps {
  title: string;
  className?: string;
}

const GalleryTitle: React.FC<GalleryTitleProps> = ({ title, className }) => {
  const { colors } = useTheme();
  return (
    <RevealWrapper animationClass="fade-in-text">
      <h1
        className={`${className} mb-12 md:mb-24 mt-12 md:mt-24`}
        style={{ color: colors.accent }}
      >
        {title}
      </h1>
    </RevealWrapper>
  );
};

export default GalleryTitle;
