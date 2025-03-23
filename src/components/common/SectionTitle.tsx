// src/components/common/SectionTitle.tsx
import React from 'react';
import { useTheme } from '../context/useThemeHook';
import { getTextColorClass } from '../../utils/utils';
import AnimationWrapper from './AnimationLayer';

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  const { theme } = useTheme();

  return (
    <AnimationWrapper animationClassName="fade-in-up">
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

export default SectionTitle;
