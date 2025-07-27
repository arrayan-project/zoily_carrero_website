/**
 * Componente para una tarjeta de producto individual.
 * Muestra la imagen, nombre, descripción, precio y un botón de acción.
 *
 * @param {object} props - Propiedades del componente.
 * @param {Product} props.product - El objeto del producto a mostrar.
 * @returns {JSX.Element} La tarjeta del producto renderizada.
 */
import React from "react";
import { useModal } from "../modals/modalServ-Cour/ModalContextServices";
import { useTheme } from "../context/themeContext";
import { Product } from "../../types/ProductInterfaces";
import { useCart } from "../context/CartContext";
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_SECONDARY } from "../../constants/styles";
import { getImageObject } from "../../utils/getImageObject";
import SmoothImage from "../smoothImages/SmoothImage";
import ProductDetailView from "./ProductDetailView";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { colors } = useTheme();
  const { openModal } = useModal();
  const { addToCart } = useCart();
  // Tomamos la primera imagen del array para la vista previa.
  const imageObject = product.images.length > 0 ? getImageObject(product.images[0]) : null;

  const handleViewDetails = () => {
    // Para solucionar el error de tipado, creamos un objeto que se ajusta a la interfaz `ModalContent`
    // que el `ModalContext` espera. Pasamos el componente de detalle como `infoContent`.
    openModal({
      title: product.name, // El título se pasará al contenedor del modal.
      infoContent: <ProductDetailView product={product} />,
      // Omitimos el contenido de términos, ya que no aplica a un producto.
      // El ModalContainer debería ocultar la pestaña de términos si este valor es nulo.
      termsContent: null,
      images: [], // Las imágenes ya están dentro de ProductDetailView.
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative cursor-pointer" onClick={handleViewDetails}>
        {imageObject ? (
          <SmoothImage
            src={imageObject.webp}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
        ) : (
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Imagen no disponible</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className={`${FONT_FAMILY_PRIMARY} text-lg font-bold`} style={{ color: colors.accent }}>{product.name}</h3>
        <p className={`${FONT_FAMILY_SECONDARY} text-sm mt-2 flex-grow`} style={{ color: colors.text }}>{product.description}</p>
        <p className={`${FONT_FAMILY_PRIMARY} text-xl font-semibold mt-4`} style={{ color: colors.accent }}>
          ${product.price.toLocaleString("es-CL")}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => addToCart(product)}
            className={`w-full py-2 rounded transition-colors duration-300 ${FONT_FAMILY_PRIMARY}`}
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

export default ProductCard;