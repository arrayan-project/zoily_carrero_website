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
import {GALLERY_PAGE_TITLE_CLASS} from "../../constants/styles";

interface GalleryTitleProps {
  title: string;
  className?: string;
}

const GalleryTitle: React.FC<GalleryTitleProps> = ({ title }) => {
  const { colors } = useTheme();
  return (
    <RevealWrapper animationClass="fade-in-text">
      <h1
        className={GALLERY_PAGE_TITLE_CLASS}
        style={{ color: colors.accent }}
      >
        {title}
      </h1>
    </RevealWrapper>
  );
};

export default GalleryTitle;
