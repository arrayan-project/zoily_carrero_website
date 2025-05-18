// src/components/gallery/GalleryTitle.tsx
import React from "react";
import RevealWrapper from "../common/RevealWrapper";
import { useTheme } from "../context/useThemeHook";

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
