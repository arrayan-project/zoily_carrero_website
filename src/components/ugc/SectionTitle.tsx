// src/components/services&courses/ServicesSectionTitle.tsx
import React from "react";
import RevealWrapper from "../common/RevealWrapper";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <RevealWrapper animationClass="fade-in-text">
    <h2 className={className}>
      {title}
    </h2>
    </RevealWrapper>
  );
};

export default SectionTitle;
