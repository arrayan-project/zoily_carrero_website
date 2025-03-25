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
        )} mb-12 md:mb-18`}
      >
        {title}
      </h1>
    </AnimationWrapper>
  );
};

export default SectionTitle;
