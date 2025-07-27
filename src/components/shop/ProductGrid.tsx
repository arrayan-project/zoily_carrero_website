/**
 * Componente que muestra una cuadrícula de productos.
 *
 * @param {object} props - Propiedades del componente.
 * @param {Product[]} props.products - Array de productos a mostrar.
 * @returns {JSX.Element} La cuadrícula de productos renderizada.
 */
import React from "react";
import { Product } from "../../types/ProductInterfaces";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;