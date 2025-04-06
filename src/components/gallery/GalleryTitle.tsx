// src/components/gallery/GalleryTitle.tsx
import React from "react";
import AnimationWrapper from "../common/AnimationLayer";
import { useTheme } from "../context/useThemeHook";

interface GalleryTitleProps {
  title: string;
  className?: string;
}

const GalleryTitle: React.FC<GalleryTitleProps> = ({ title, className }) => {
  const {colors} = useTheme();
  return (
    <AnimationWrapper animationClassName="fade-in-text">
      <h1
        className={`${className} text-xl mb-12 md:mb-24 mt-12 md:mt-24`} 
        style={{ color: colors.accent }}
              >
        {title}
      </h1>
    </AnimationWrapper>
  );
};

export default GalleryTitle;
