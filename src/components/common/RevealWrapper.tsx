/**
 * Componente wrapper que aplica una animación de aparición al hacer scroll.
 * Utiliza Intersection Observer para revelar el contenido cuando entra en pantalla.
 *
 * @component
 * @param {RevealWrapperProps} props - Props del wrapper, incluyendo la clase de animación y los hijos.
 * @returns {JSX.Element}
 */
import React, { ReactNode } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

interface RevealWrapperProps {
  animationClass: string;
  children: ReactNode;
  className?: string;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({
  animationClass,
  children,
  className = "",
}) => {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`${className} ${animationClass} ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default RevealWrapper;
