/**
 * Menú de categorías para la galería.
 * Permite seleccionar la categoría activa y adapta estilos según el tema.
 *
 * @component
 * @param {GalleryCategoryMenuProps} props - Props del menú, incluyendo categorías, categoría activa y callback de cambio.
 * @returns {JSX.Element}
 */
import React, { useState } from "react";
import { useTheme } from "../context/themeContext";
import { GALLERY_CATEGORY_MENU_BUTTON_CLASS } from "../../constants/styles";

interface GalleryCategoryMenuProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const GalleryCategoryMenu: React.FC<GalleryCategoryMenuProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const { colors } = useTheme();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div
      role="group"
      aria-label="Menú de categorías de la galería"
      className="flex flex-nowrap md:justify-center justify-start space-x-4 mb-8 md:mb-24 overflow-x-auto px-4"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;
        const isHovered = hoveredCategory === category;

        // Define styles based on state and theme for better consistency
        const buttonStyle = {
          backgroundColor:
            isActive || isHovered ? colors.accent : "transparent",
          color: isActive || isHovered ? colors.background : colors.text,
          borderColor: isActive || isHovered ? colors.accent : colors.border,
          minWidth: "fit-content",
        };

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            aria-pressed={isActive}
            className={`px-4 py-2 whitespace-nowrap border transition-colors duration-300 ${GALLERY_CATEGORY_MENU_BUTTON_CLASS}`}
            style={buttonStyle}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default GalleryCategoryMenu;
