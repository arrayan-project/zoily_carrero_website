// src/components/common/SectionTitle.tsx
import React from "react";
import { useTheme } from "../context/useThemeHook";
import RevealWrapper from "../common/RevealWrapper";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  const { colors } = useTheme();

  return (
    <RevealWrapper animationClass="fade-in-text">
      <h1
        className={`${className} text-xl mb-12 md:mb-18`}
        style={{ color: colors.accent }}
      >
        {title}
      </h1>
    </RevealWrapper>
  );
};

export default SectionTitle;
