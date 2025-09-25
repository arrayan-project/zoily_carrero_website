/**
 * Sección de marcas en el Home.
 * Muestra un slider automático con las marcas, usando imágenes optimizadas y estilos adaptados al tema.
 *
 * @component
 * @param {HomeBrandsSectionProps} props - Props del componente, incluyendo el array de marcas.
 * @returns {JSX.Element}
 */
import React, { useRef, useState, useEffect } from "react";
import SmoothImage from "../smoothImages/SmoothImage";
import { useTheme } from "../../components/context/themeContext";
import {
  FONT_FAMILY_PRIMARY,
  FONT_WEIGHT_LIGHT,
  TEXT_CENTER,
} from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import { useAutoScroll } from "../../hooks/useAutoScroll";

interface HomeBrandsSectionProps {
  brands: {
    imageKey: string;
    alt: string;
  }[];
}

const HomeBrandsSection: React.FC<HomeBrandsSectionProps> = ({ brands }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const scrollSpeed = 1;
  const { colors } = useTheme();

  // Calcula el ancho total del slider duplicado cuando cambian las marcas o el tamaño
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setTotalWidth(sliderRef.current.scrollWidth / 2);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [brands]);

  useAutoScroll(() => {
    setScrollPosition((prev) => {
      const newPos = prev + scrollSpeed;
      return totalWidth > 0 && newPos >= totalWidth ? 0 : newPos;
    });
  }, totalWidth > 0);

  return (
    <section className="py-36 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2
          className={`${FONT_FAMILY_PRIMARY} ${FONT_WEIGHT_LIGHT} text-3xl ${TEXT_CENTER} mb-8`}
          style={{ color: colors.accent }}
        >
          Nuestras Marcas
        </h2>
        <div ref={sliderRef} className="relative overflow-hidden w-full">
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              willChange: "transform",
            }}
          >
            {[...brands, ...brands].map((brand, index) => {
              const imageObject = getImageObject(brand.imageKey);
              return (
                <div
                  key={index}
                  className="w-32 h-32 flex-shrink-0 flex items-center justify-center"
                >
                  <SmoothImage
                    src={imageObject.webp}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandsSection;