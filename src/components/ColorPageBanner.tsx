import React from "react";
import { useTheme } from "./context/useTheme"; // Asegúrate de que la ruta a useTheme sea correcta

interface ColorPageBannerProps {
  title: string;
  bannerColor?: string;
  titleColor?: string;
  marginTop?: string;
  className?: string;
  children?: React.ReactNode;
  objectPosition?:
    | "bottom"
    | "center"
    | "left"
    | "left-bottom"
    | "left-top"
    | "right"
    | "right-bottom"
    | "right-top"
    | "top";
}

const ColorPageBanner: React.FC<ColorPageBannerProps> = ({
  title,
  children,
  bannerColor,
  objectPosition = "center",
  titleColor,
  marginTop,
  className,
}) => {
  const { theme, colors } = useTheme();

  const defaultBannerColor =
    bannerColor || (theme === "dark" ? "#333" : "#f0f0f0");
  const defaultTitleColor = titleColor || (theme === "dark" ? "#fff" : "#333");

  // Define el color de las líneas horizontales de forma inversa al tema
  const lineColor = theme === "light" ? colors.text : colors.background; // **NUEVO: Color de línea inverso al tema**

  return (
    <div
      className="color-page-banner relative overflow-hidden"
      style={{
        backgroundColor: defaultBannerColor,
        marginTop: marginTop,
      }}
    >
      {/* **NUEVO: Línea horizontal superior** */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]" // Ajusta 'h-[2px]' para el grosor de la línea
        style={{ backgroundColor: lineColor, opacity: 0.7 }} // Opacidad para suavizar la línea, ajusta si es necesario
      ></div>

      <div
        className={
          "relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 " + className
        }
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-montserrat text-center mb-12 tracking-wider"
          style={{ color: defaultTitleColor }}
        >
          {title}
        </h1>

        {children && <div className="flex justify-center">{children}</div>}
      </div>
      {/* **NUEVO: Línea horizontal inferior** */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]" // Ajusta 'h-[2px]' para el grosor de la línea
        style={{ backgroundColor: lineColor, opacity: 0.7 }} // Opacidad para suavizar la línea, ajusta si es necesario
      ></div>
    </div>
  );
};

export default ColorPageBanner;
