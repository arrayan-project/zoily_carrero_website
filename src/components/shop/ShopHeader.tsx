/**
 * Componente para el encabezado de la página de la tienda.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.title - El título a mostrar.
 * @returns {JSX.Element} El encabezado renderizado.
 */
import React from "react";
import { useTheme } from "../context/themeContext";
import { FONT_FAMILY_PRIMARY } from "../../constants/styles";

interface ShopHeaderProps {
  title: string;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ title }) => {
  const { colors } = useTheme();

  return (
    <h1
      className={`${FONT_FAMILY_PRIMARY} text-4xl md:text-5xl font-bold text-center mb-12`}
      style={{ color: colors.accent }}
    >
      {title}
    </h1>
  );
};

export default ShopHeader;