/**
 * Componente para renderizar líneas decorativas animadas a los lados de un elemento central (como un logo).
 * Las líneas se animan desde el centro hacia afuera, creando un efecto de expansión,
 * y dejando un espacio en el medio para otro elemento.
 *
 * @component
 * @param {AnimatedDecorativeLinesProps} props - Propiedades del componente.
 * @property {boolean} isExpanded - Controla si las líneas están expandidas (visibles) o contraídas (invisibles).
 * @property {string} widthClasses - Clases de Tailwind para el ancho final de las líneas (ej. 'w-32').
 * @property {string} positionClasses - Clases de Tailwind para la posición vertical de las líneas (ej. 'top-1/2 -translate-y-1/2').
 * @property {string} [gap="4"] - El espaciado a cada lado del centro. Un valor de "14" crea un margen `mr-14` y `ml-14`, resultando en un espacio total de `7rem` (112px), ideal para un logo de 100px.
 * @property {string} [lineColorClass] - Clase de Tailwind para el color de las líneas (ej. 'bg-white').
 * @returns {JSX.Element}
 */
import React from "react";

interface AnimatedDecorativeLinesProps {
  isExpanded: boolean;
  widthClasses: string;
  positionClasses: string;
  gap?: string;
  lineColorClass?: string;
}

const AnimatedDecorativeLines: React.FC<AnimatedDecorativeLinesProps> = ({
  isExpanded,
  widthClasses,
  positionClasses,
  gap = "4", // Corresponde a 1rem (16px) por defecto en Tailwind
  lineColorClass = "bg-black",
}) => {
  // Se usa la transición de 'width' en lugar de 'transform' para evitar posibles
  // conflictos con otras transformaciones y asegurar un comportamiento predecible.
  const baseClasses = `absolute h-px ${lineColorClass} transition-all duration-1000 ease-out`;

  // La línea izquierda se posiciona a la izquierda del centro y crece hacia afuera (a la izquierda).
  const leftLineClasses = `${baseClasses} right-1/2 mr-${gap} ${positionClasses} ${
    isExpanded ? widthClasses : "w-0"
  }`;

  // La línea derecha se posiciona a la derecha del centro y crece hacia afuera (a la derecha).
  const rightLineClasses = `${baseClasses} left-1/2 ml-${gap} ${positionClasses} ${
    isExpanded ? widthClasses : "w-0"
  }`;

  return (
    <>
      <div className={leftLineClasses} />
      <div className={rightLineClasses} />
    </>
  );
};

export default AnimatedDecorativeLines;