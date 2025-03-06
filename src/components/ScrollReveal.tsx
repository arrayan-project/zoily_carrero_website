import React, { useRef, useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animationClassName?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animationClassName = "fade-in-text",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); //Add the class here
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`${animationClassName}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
