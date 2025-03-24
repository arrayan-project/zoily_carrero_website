// src/components/gallery/GalleryTitle.tsx
import React from "react";
import AnimationWrapper from "../common/AnimationLayer";
import { getTextColorClass } from "../../utils/utils";
import { useTheme } from "../context/useThemeHook";

interface GalleryTitleProps {
  title: string;
}

const GalleryTitle: React.FC<GalleryTitleProps> = ({ title }) => {
  const { theme } = useTheme();
  return (
    <AnimationWrapper animationClassName="fade-in-text">
      <h1
        className={`text-2xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${getTextColorClass(
          theme
        )}`}
      >
        {title}
      </h1>
    </AnimationWrapper>
  );
};

export default GalleryTitle;
