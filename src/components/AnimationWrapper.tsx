import React, { ReactNode, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

interface AnimationWrapperProps {
  animationClassName: string;
  children: ReactNode;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  animationClassName,
  children,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "20px",
        duration: 1000,
        delay: 200,
        reset: false,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
      });

      sr.reveal(elementRef.current, getAnimationOptions(animationClassName));

      return () => {
        sr.destroy();
      };
    }
  }, [animationClassName]);

  const getAnimationOptions = (className: string) => {
    switch (className) {
      case "fade-in-up-animation":
        return {
          origin: "bottom",
          distance: "60px",
          duration: 1000,
          delay: 200,
        };
      case "fade-in-text":
        return {
          origin: "bottom",
          distance: "30px",
          duration: 1000,
          delay: 200,
        };
      case "fade-in": //nueva animacion
        return {
          origin: "center",
          distance: "0px",
          duration: 3000,
          delay: 200,
        };
      default:
        return {};
    }
  };

  return <div ref={elementRef}>{children}</div>; // Remove sr-hidden
};

export default AnimationWrapper;
