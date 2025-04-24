import React from "react";
import { useTheme } from "../context/useThemeHook";

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
      className="flex flex-nowrap md:justify-center justify-start space-x-4 mb-8 overflow-x-auto px-4 text-xs font-light md:text-base md:font-normal"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap border transition-colors duration-300 font-cinzel ${
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
