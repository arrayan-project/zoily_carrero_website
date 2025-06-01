/**
 * Componente para mostrar una flecha indicadora de scroll (arriba o abajo).
 *
 * @component
 * @param {ScrollIndicatorArrowProps} props - Propiedades del componente.
 * @returns {JSX.Element | null}
 */
import React from "react";

interface ScrollIndicatorArrowProps {
  direction: 'up' | 'down';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isVisible: boolean;
  backgroundColor: string;
  strokeColor: string;
}

const ScrollIndicatorArrow: React.FC<ScrollIndicatorArrowProps> = ({
  direction,
  onClick,
  isVisible,
  backgroundColor,
  strokeColor,
}) => {
  if (!isVisible) return null;

  const isUp = direction === 'up';
  const pathD = isUp ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5";
  const positionClass = isUp ? "top-4" : "bottom-4";
  const ariaLabel = isUp ? "Desplazar hacia arriba" : "Desplazar hacia abajo";

  return (
    <button
      className={`absolute ${positionClass} left-1/2 transform -translate-x-1/2 z-20 p-1 rounded-full cursor-pointer hover:opacity-80 transition-opacity`}
      style={{ backgroundColor }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={strokeColor} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d={pathD} />
      </svg>
    </button>
  );
};

export default ScrollIndicatorArrow;