import React, { ReactNode } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

interface RevealWrapperProps {
  animationClass: string;
  children: ReactNode;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({ animationClass, children }) => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default RevealWrapper;
