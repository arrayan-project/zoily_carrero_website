// src/components/HomeTitle.tsx
import React from "react";
import RevealWrapper from "../common/RevealWrapper";

interface HomeTitleProps {
  title: string;
  subtitle: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ title, subtitle }) => {
  return (
    <>

      <h1 className="font-cinzel text-4xl md:text-6xl font-light text-white tracking-[0.2em] mb-4">
          {title}
        </h1>
      <h2 className="font-cinzel text-xl md:text-2xl font-light text-white tracking-[0.3em] mb-12">
          {subtitle}
      </h2>

    </>
  );
};

export default HomeTitle;
