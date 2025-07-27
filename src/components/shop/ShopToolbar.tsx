/**
 * Barra de herramientas para la tienda, que contiene controles como el ordenamiento.
 *
 * @param {object} props - Propiedades del componente.
 * @param {SortOrder} props.sortOrder - El orden de clasificación actual.
 * @param {(order: SortOrder) => void} props.onSortOrderChange - Función para manejar el cambio de orden.
 * @param {number} props.productCount - El número de productos que se muestran.
 * @returns {JSX.Element} La barra de herramientas renderizada.
 */
import React from 'react';
import SortDropdown, { SortOrder } from './SortDropdown';

interface ShopToolbarProps {
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
  productCount: number;
}

const ShopToolbar: React.FC<ShopToolbarProps> = ({ sortOrder, onSortOrderChange, productCount }) => {
  return (
    // Cambiamos a flex-col en móvil y flex-row en pantallas 'sm' y superiores.
    // Añadimos un espacio (gap) para cuando los elementos están apilados.
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-8">
      <p className="text-sm text-gray-500">{productCount} producto(s)</p>
      <SortDropdown sortOrder={sortOrder} onSortOrderChange={onSortOrderChange} />
    </div>
  );
};

export default ShopToolbar;