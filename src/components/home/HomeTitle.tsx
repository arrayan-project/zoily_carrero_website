// src/components/HomeTitle.tsx
import React from "react";
import AnimationWrapper from "../common/AnimationLayer";

interface HomeTitleProps {
  title: string;
  subtitle: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <AnimationWrapper animationClassName="fade-in">
        <h1 className="font-cinzel text-4xl md:text-6xl font-extralight text-white tracking-[0.2em] mb-4">
          {title}
        </h1>
      </AnimationWrapper>
      <AnimationWrapper animationClassName="fade-in">
        <h2 className="font-cinzel text-xl md:text-2xl text-white font-light tracking-[0.3em] mb-12">
          {subtitle}
        </h2>
      </AnimationWrapper>
    </>
  );
};

export default HomeTitle;
