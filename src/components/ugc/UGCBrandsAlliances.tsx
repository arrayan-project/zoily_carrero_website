/**
 * Sección de alianzas y colaboraciones de marcas UGC.
 * Muestra los logos de marcas colaboradoras con animaciones y fondo decorativo.
 *
 * @component
 * @returns {JSX.Element}
 */
import React from "react";
import { getImageObject } from "../../utils/getImageObject";
import { useTheme } from "../../components/context/themeContext";
import "../../GlobalStyles.css";
import RevealWrapper from "../common/RevealWrapper";
import { FONT_FAMILY_PRIMARY, HEADING_4_CLASS } from "../../constants/styles";

interface UGCBrandsAlliancesProps {
  title: string;
  subtitle: string;
}

const UGCBrandsAlliances: React.FC<UGCBrandsAlliancesProps> = ({ title, subtitle }) => {
  // Ahora solo guardas la key
  const brands = [
    { name: "Cetaphil", logoKey: "ugcBrandLogo2" },
    { name: "Beauty Plus", logoKey: "ugcBrandLogo1" },
    { name: "Esika", logoKey: "ugcBrandLogo3" },
    { name: "Neutrogena", logoKey: "ugcBrandLogo5" },
    { name: "Venus", logoKey: "ugcBrandLogo4" },
    { name: "Pantene", logoKey: "ugcBrandLogo6" },
  ];

  const { colors } = useTheme();

  return (
    <div className="py-16 px-4 relative md:mt-24">
      <div className="flex justify-between items-start mb-8 md:mb-36 flex-nowrap gap-36">
        {/* Títulos originales a la izquierda */}
        <div className="text-left mb-8 md:mb-0 flex-shrink-0">
          <RevealWrapper animationClass="fade-in-up-animation">
            <p
              className={`${HEADING_4_CLASS} text-base mb-4`}
              style={{ color: colors.text }}
            >
              {subtitle}
            </p>
          </RevealWrapper>
          <RevealWrapper animationClass="fade-in-text">
            <h2
              className={`${FONT_FAMILY_PRIMARY} text-2xl lg:text-4xl xl:text-5xl`}
              style={{ color: colors.text }}
            >
              {title}
            </h2>
          </RevealWrapper>
        </div>

        {/* Título grande a la derecha */}
        <div className="text-right">
          <RevealWrapper animationClass="fade-in-up-animation">
            <h3
              className={`${FONT_FAMILY_PRIMARY} text-4xl md:text-9xl whitespace-nowrap`}
              style={{ color: `${colors.accent}20` }}
            >
              {title}
            </h3>
          </RevealWrapper>
        </div>
      </div>

      {/* Contenedor relativo para los logos y el texto de fondo */}
      <div className="relative">
        {/* Texto de fondo UGC, ahora posicionado relativo a este contenedor */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none ugc-background-text">
          <span
            className="font-bold opacity-5 flex flex-col md:flex-row"
            style={{ color: colors.text }}
          >
            <span className="text-[15rem] md:text-[30rem]">U</span>
            <span className="text-[15rem] md:text-[30rem]">G</span>
            <span className="text-[15rem] md:text-[30rem]">C</span>
          </span>
        </div>

        {/* Los logos ahora están sobre el texto de fondo */}
        <RevealWrapper animationClass="slide-in-left">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-12 lg:gap-24 xl:gap-36 mx-auto">
            {brands.map((brand, index) => {
              const logoObj = getImageObject(brand.logoKey);
              return (
                <div key={index} className="flex items-center justify-center">
                  {/* Círculo con fondo blanco y un borde (anillo) de 2px */}
                  <div
                    className="bg-white rounded-full flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52 p-3 shadow-sm logo-ring"
                    style={{ outlineColor: colors.bannerTitle }}
                  >
                    <picture>
                      {logoObj.avif && <source srcSet={logoObj.avif} type="image/avif" />}
                      {logoObj.webp && <source srcSet={logoObj.webp} type="image/webp" />}
                      <img
                        src={logoObj.webp}
                        alt={brand.name}
                        loading="lazy"
                        className="max-h-full max-w-full rounded-full object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).src = logoObj.placeholder; }}
                      />
                    </picture>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
};

export default UGCBrandsAlliances;
