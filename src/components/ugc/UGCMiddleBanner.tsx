/**
 * Banner central para la sección UGC.
 * Muestra un texto destacado con animación y estilos adaptados al tema.
 *
 * @component
 * @param {BannerProps} props - Props del banner, incluyendo el texto y el ancho máximo opcional.
 * @returns {JSX.Element}
 */
import React from "react";
import { useTheme } from "../../components/context/themeContext";
import RevealWrapper  from "../common/RevealWrapper";
import { FONT_FAMILY_PRIMARY } from "../../constants/styles";

type BannerProps = {
  text: string;
  maxWidth?: string; // New prop to control the maximum width
};

const UGCMiddleBanner: React.FC<BannerProps> = ({
  text,
  maxWidth = "max-w-3xl",
}) => {
  const { colors } = useTheme();

  return (
    <div className="w-full py-6 px-4 text-center mt-24 relative overflow-hidden">
      <RevealWrapper animationClass="fade-in-animation">
        <div className={`mx-auto ${maxWidth}`}>
          <h1
            // Using FONT_FAMILY_PRIMARY, keeping specific sizes and italic style
            className={`${FONT_FAMILY_PRIMARY} text-base md:text-xl italic`}
            style={{ color: colors.text }}
          >
            {text}
          </h1>
        </div>
      </RevealWrapper>
    </div>
  );
};

export default UGCMiddleBanner;
