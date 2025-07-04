/**
 * Menú de categorías para la galería.
 * Permite seleccionar la categoría activa y adapta estilos según el tema.
 *
 * @component
 * @param {GalleryCategoryMenuProps} props - Props del menú, incluyendo categorías, categoría activa y callback de cambio.
 * @returns {JSX.Element}
 */
import React from "react";
import { useTheme } from "../context/themeContext";;
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
  const { colors, theme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Menú de categorías de la galería"
      className="flex flex-nowrap md:justify-center justify-start space-x-4 mb-8 overflow-x-auto px-4"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            aria-pressed={isActive}
            className={`px-4 py-2 rounded-full whitespace-nowrap border transition-colors duration-300 ${GALLERY_CATEGORY_MENU_BUTTON_CLASS} ${
              isActive
                ? "bg-pink-700 text-white border-pink-700"
                : theme === "light"
                ? "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                : "bg-gray-800 text-gray-100 border-gray-700 hover:bg-gray-700"
            }`}
            style={{
              minWidth: "fit-content",
              borderColor: isActive ? colors.accent : colors.border,
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default GalleryCategoryMenu;
