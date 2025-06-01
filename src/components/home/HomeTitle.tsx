/**
 * Componente para mostrar el título y subtítulo principal del Home.
 * Permite personalizar el tamaño de fuente y el espaciado para móvil y desktop.
 *
 * @component
 * @param {HomeTitleProps} props - Props del componente, incluyendo título, subtítulo y clases opcionales de tamaño.
 * @returns {JSX.Element}
 */
import React from "react";
import { HOME_HERO_TITLE_CLASS, HOME_HERO_SUBTITLE_CLASS } from "../../constants/styles";

interface HomeTitleProps {
  title: string;
  subtitle: string;
      titleSizeClass?: string;
      subtitleSizeClass?: string;
}

    const HomeTitle: React.FC<HomeTitleProps> = ({
      title,
      subtitle,
      titleSizeClass = HOME_HERO_TITLE_CLASS, // Default from styles.ts
      subtitleSizeClass = HOME_HERO_SUBTITLE_CLASS, // Default from styles.ts
    }) => {
  return (
    <>
          <div className="md:mt-0">
            <h1 className={titleSizeClass}>
              {title}
        </h1>
</div>
      <div className="mt-36 md:mt-0"> {/* Ejemplo: empuja el subtítulo 2rem hacia abajo en móvil, se resetea en md */}
            <h2 className={subtitleSizeClass}>
              {subtitle}
        </h2>
      </div>
    </>
  );
};

export default HomeTitle;
