/**
 * Componente de barra lateral para mostrar y filtrar por categorías de productos.
 *
 * @param {object} props - Propiedades del componente.
 * @param {CategoryTreeItem[]} props.categoryTree - El árbol de categorías y subcategorías.
 * @param {{ type: string; name: string }} props.selectedFilter - El filtro actualmente seleccionado.
 * @param {(filter: { type: string; name: string }) => void} props.onSelectFilter - Función para manejar la selección de un filtro.
 * @returns {JSX.Element} La barra lateral de categorías renderizada.
 */
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/themeContext';
import { FONT_FAMILY_PRIMARY } from '../../constants/styles';

interface CategoryTreeItem {
  name: string;
  subcategories: string[];
}

interface CategorySidebarProps {
  categoryTree: CategoryTreeItem[];
  selectedFilter: { type: string; name: string };
  onSelectFilter: (filter: { type: string; name: string }) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ categoryTree, selectedFilter, onSelectFilter }) => {
  const { colors } = useTheme();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const isSelected = (type: string, name: string) => {
    return selectedFilter.type === type && selectedFilter.name === name;
  };

  const handleCategoryClick = (categoryName: string) => {
    onSelectFilter({ type: 'category', name: categoryName });
    // Expande la categoría clickeada o la colapsa si ya estaba abierta.
    setExpandedCategory(prev => (prev === categoryName ? null : categoryName));
  };

  // Efecto para expandir automáticamente la categoría si se selecciona una subcategoría
  useEffect(() => {
    if (selectedFilter.type === 'subcategory') {
      const parentCategory = categoryTree.find(cat => cat.subcategories.includes(selectedFilter.name));
      if (parentCategory) {
        setExpandedCategory(parentCategory.name);
      }
    }
    if (selectedFilter.type === 'all') {
      setExpandedCategory(null);
    }
  }, [selectedFilter, categoryTree]);

  return (
    <aside className="w-full md:w-64 lg:w-72 md:pr-8">
      <h2 className={`${FONT_FAMILY_PRIMARY} text-2xl font-bold mb-6`} style={{ color: colors.accent }}>
        Categorías
      </h2>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectFilter({ type: 'all', name: 'Todas' })}
            className={`${FONT_FAMILY_PRIMARY} w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${isSelected('all', 'Todas') ? 'font-bold' : ''}`}
            style={{ color: isSelected('all', 'Todas') ? colors.accent : colors.text }}
            onMouseEnter={(e) => {
              if (!isSelected('all', 'Todas')) e.currentTarget.style.backgroundColor = colors.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Todas
          </button>
        </li>
        {categoryTree.map((category) => (
          <li key={category.name}>
            <div className="flex flex-col">
              <button
                onClick={() => handleCategoryClick(category.name)}
                className={`${FONT_FAMILY_PRIMARY} w-full flex justify-between items-center text-left px-4 py-2 rounded-md transition-colors duration-200 ${isSelected('category', category.name) ? 'font-bold' : ''}`}
                style={{ color: isSelected('category', category.name) ? colors.accent : colors.text }}
                onMouseEnter={(e) => {
                  if (!isSelected('category', category.name)) e.currentTarget.style.backgroundColor = colors.hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>{category.name}</span>
                {category.subcategories.length > 0 && (
                  <svg className={`w-4 h-4 transition-transform duration-200 ${expandedCategory === category.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                )}
              </button>
            </div>

            {/* Subcategorías colapsables */}
            {expandedCategory === category.name && category.subcategories.length > 0 && (
              <ul className="pl-6 mt-1 space-y-1">
                {category.subcategories.map((sub) => (
                  <li key={sub}>
                    <button
                      onClick={() => onSelectFilter({ type: 'subcategory', name: sub })}
                      className={`${FONT_FAMILY_PRIMARY} w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${isSelected('subcategory', sub) ? 'font-bold' : ''}`}
                      style={{ color: isSelected('subcategory', sub) ? colors.accent : colors.text }}
                      onMouseEnter={(e) => {
                        if (!isSelected('subcategory', sub)) e.currentTarget.style.backgroundColor = colors.hover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {sub}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;