// src/components/gallery/GalleryTitle.tsx
import React from "react";
import AnimationWrapper from "../common/AnimationLayer";
import { getTextColorClass } from "../../utils/utils";
import { useTheme } from "../context/useThemeHook";

interface GalleryTitleProps {
  title: string;
  className?: string;
}

const GalleryTitle: React.FC<GalleryTitleProps> = ({ title, className }) => {
  const { theme } = useTheme();
  return (
    <AnimationWrapper animationClassName="fade-in-text">
      <h1
        className={`${className} ${getTextColorClass(
                  theme
                )} text-lg md:text-xl lg:text-3xl mb-12 md:mb-12`}
              >
        {title}
      </h1>
    </AnimationWrapper>
  );
};

export default GalleryTitle;
