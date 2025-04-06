// src/components/services&courses/ServicesSectionTitle.tsx
import React from "react";
import AnimationWrapper from "../common/AnimationLayer";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <AnimationWrapper animationClassName="fade-in-text">
    <h2 className={className}>
      {title}
    </h2>
    </AnimationWrapper>
  );
};

export default SectionTitle;
