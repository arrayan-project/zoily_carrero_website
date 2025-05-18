// src/components/HomeTitle.tsx
import React from "react";
import { FONT_FAMILY_PRIMARY, COLOR_TEXT_WHITE } from "../../constants/styles";

interface HomeTitleProps {
  title: string;
  subtitle: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className={`${FONT_FAMILY_PRIMARY} text-3xl md:text-4xl font-light ${COLOR_TEXT_WHITE} tracking-[0.2em] mb-12 md:mb-6`}>
          {title}
        </h1>
      <h2 className={`${FONT_FAMILY_PRIMARY} text-lg md:text-xl font-light ${COLOR_TEXT_WHITE} tracking-[0.3em] mb-12`}>
          {subtitle}
      </h2>
    </>
  );
};

export default HomeTitle;
