// src/components/common/SectionTitle.tsx
import React from 'react';
import { useTheme } from '../context/useThemeHook';
import AnimationWrapper from "./AnimationLayer";


interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  const { colors } = useTheme();

  return (
    <AnimationWrapper animationClassName="fade-in-text">
      <h1
        className={`${className} text-xl mb-12 md:mb-18`} 
        style={{ color: colors.accent }}
      >
        {title}
      </h1>
   </AnimationWrapper>
  );
};

export default SectionTitle;
