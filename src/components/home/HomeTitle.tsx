/**
 * Componente para mostrar el título y subtítulo principal del Home.
 * Permite personalizar el tamaño de fuente y el espaciado para móvil y desktop.
 *
 * @component
 * @param {HomeTitleProps} props - Props del componente, incluyendo título, subtítulo y clases opcionales de tamaño.
 * @returns {JSX.Element}
 */
import React from "react";
import { FONT_FAMILY_PRIMARY,  } from "../../constants/styles";

interface HomeTitleProps {
  title: string;
  subtitle: string;
      titleSizeClass?: string;
      subtitleSizeClass?: string;
}

    const HomeTitle: React.FC<HomeTitleProps> = ({
      title,
      subtitle,
      titleSizeClass = "text-3xl md:text-6xl", // Tamaño por defecto
      subtitleSizeClass = "text-lg md:text-2xl", // Tamaño por defecto
    }) => {
  return (
    <>
{/* Contenedor para el título.
          Puedes añadir un margen superior específico para móvil aquí (ej. "mt-4") si el título necesita
          moverse hacia abajo dentro de este bloque HomeTitle en móviles.
          Por defecto, no añade margen extra, permitiendo que el contenedor padre (en About.tsx) controle su inicio. */}
          <div className="md:mt-0">
            <h1 className={`${FONT_FAMILY_PRIMARY} ${titleSizeClass} text-white font-light tracking-[0.2em] mb-12 md:mb-6`}>          
              {title}
        </h1>
</div>
      {/* Contenedor para el subtítulo.
          Añade un margen superior específico para móvil aquí para empujar el subtítulo más abajo del título.
          Por ejemplo, "mt-8" (2rem) añade espacio extra en móviles. Ajusta este valor según necesites.
          Este margen es adicional al margen inferior del título (h1). */}
      <div className="mt-8 md:mt-0"> {/* Empuja el subtítulo 2rem hacia abajo en móvil, se resetea en md */}
            <h2 className={`${FONT_FAMILY_PRIMARY} ${subtitleSizeClass} text-white font-light tracking-[0.3em] mb-12`}>          
              {subtitle}
        </h2>
      </div>
    </>
  );
};

export default HomeTitle;
