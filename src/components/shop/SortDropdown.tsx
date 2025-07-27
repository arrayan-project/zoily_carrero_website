/**
 * Componente de menú desplegable para ordenar los productos.
 *
 * @param {object} props - Propiedades del componente.
 * @param {SortOrder} props.sortOrder - El orden de clasificación actual.
 * @param {(order: SortOrder) => void} props.onSortOrderChange - Función para manejar el cambio de orden.
 * @returns {JSX.Element} El menú desplegable de ordenación renderizado.
 */
import React from 'react';
import { useTheme } from '../context/themeContext';
import { FONT_FAMILY_PRIMARY } from '../../constants/styles';

export type SortOrder = 'recommended' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

interface SortDropdownProps {
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortOrder, onSortOrderChange }) => {
  const { colors } = useTheme();

  return (
    <div className="relative">
      <select
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
        className={`${FONT_FAMILY_PRIMARY} appearance-none w-full md:w-auto bg-transparent border rounded-md py-2 pl-3 pr-10 text-xs focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500`}
        style={{ color: colors.text, borderColor: colors.accent, backgroundColor: colors.background }}
      >
        <option value="recommended">Recomendados</option>
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
        <option value="name-asc">Nombre (A-Z)</option>
        <option value="name-desc">Nombre (Z-A)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2" style={{ color: colors.text }}>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  );
};

export default SortDropdown;