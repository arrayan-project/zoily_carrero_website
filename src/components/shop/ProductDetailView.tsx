/**
 * Vista de detalle para un producto, diseñada para ser mostrada en un modal.
 *
 * @param {object} props - Propiedades del componente.
 * @param {Product} props.product - El producto a mostrar.
 * @returns {JSX.Element} La vista de detalle del producto renderizada.
 */
import React from 'react';
import { Product } from '../../types/ProductInterfaces';
import { useTheme } from '../context/themeContext';
import { useCart } from '../context/CartContext';
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_SECONDARY } from '../../constants/styles';
import ImageCarousel from './ImageCarousel';

interface ProductDetailViewProps {
  product: Product;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }) => {
  const { colors } = useTheme();
  const { addToCart } = useCart();

  return (
    <div className="p-4 md:p-6 max-h-[90vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna de la Imagen */}
        <div className="w-full">
          <ImageCarousel imageKeys={product.images} />
        </div>

        {/* Columna de la Información */}
        <div className="flex flex-col">
          <p className={`${FONT_FAMILY_PRIMARY} text-2xl font-semibold mb-4`} style={{ color: colors.accent }}>
            ${product.price.toLocaleString('es-CL')}
          </p>
          <p className={`${FONT_FAMILY_SECONDARY} text-base mb-4`} style={{ color: colors.text }}>
            {product.description}
          </p>

          {product.details && product.details.length > 0 && (
            <div className="mb-6">
              <h3 className={`${FONT_FAMILY_PRIMARY} text-lg font-bold mb-2`} style={{ color: colors.text }}>Detalles:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className={`${FONT_FAMILY_SECONDARY} text-sm`} style={{ color: colors.text }}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className={`mt-auto w-full py-3 rounded transition-colors duration-300 ${FONT_FAMILY_PRIMARY} text-lg`}
            style={{ backgroundColor: colors.accent, color: colors.background }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.hover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
