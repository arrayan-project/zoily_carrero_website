// GalleryCategoryMenu.tsx
import React from 'react';
import { Category } from '../../data/galleryData';
import { getTextColorClass } from '../../utils/utils';

interface GalleryCategoryMenuProps {
  galleryCategories: Category[];
  selectedCategory: string;
  handleCategoryClick: (categoryValue: string) => void;
  theme: string;
}

const GalleryCategoryMenu: React.FC<GalleryCategoryMenuProps> = ({
  galleryCategories,
  selectedCategory,
  handleCategoryClick,
  theme,
}) => {
  return (
    <div
      className="flex md:justify-center justify-start space-x-4 mb-8 overflow-x-auto whitespace-nowrap px-12 text-xs font-light md:text-base md:font-normal"
      style={{ maxWidth: "100%" }}
    >
      {galleryCategories.map((category) => (
        <button
          key={category.value} // Usamos category.value como key
          aria-label={`Seleccionar categoría ${category.name}`}
          className={`px-4 py-2 rounded-full font-cinzel font-base whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
                          ${getTextColorClass(theme)}
                          ${
                            selectedCategory === category.value
                              ? theme === "dark"
                                ? "bg-pink-400"
                                : "bg-pink-200"
                              : theme === "dark"
                              ? "bg-gray-700"
                              : "bg-gray-100"
                          }
                        `}
          onClick={() => handleCategoryClick(category.value)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default GalleryCategoryMenu;
