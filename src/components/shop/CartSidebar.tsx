/**
 * Componente de barra lateral para mostrar el contenido del carrito de compras.
 * Se muestra como un overlay y permite al usuario ver y gestionar los ítems del carrito.
 *
 * @returns {JSX.Element | null} El sidebar del carrito o null si está cerrado.
 */
import React from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/themeContext';
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_SECONDARY } from '../../constants/styles';
import { getImageObject } from '../../utils/getImageObject';
import SmoothImage from '../smoothImages/SmoothImage';
import { CartItem } from '../../types/CartInterfaces';

const CartSidebar: React.FC = () => {
  const { isCartOpen, closeCart, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();
  const { colors } = useTheme();

  if (!isCartOpen) {
    return null;
  }

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black/50 z-[1100] transition-opacity duration-300"
      onClick={closeCart}
    >
      {/* Sidebar */}
      <div
        className="fixed top-0 right-0 w-full max-w-md h-full shadow-xl flex flex-col transition-transform duration-300 transform translate-x-0"
        style={{ backgroundColor: colors.background }}
        onClick={(e) => e.stopPropagation()} // Evita que el click en el sidebar cierre el modal
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: colors.border }}>
          <h2 className={`${FONT_FAMILY_PRIMARY} text-xl font-bold`} style={{ color: colors.accent }}>
            Tu Carrito
          </h2>
          <button onClick={closeCart} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.text }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className={`${FONT_FAMILY_SECONDARY} text-center`} style={{ color: colors.text }}>Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map(item => <CartItemRow key={item.id} item={item} />)}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t" style={{ borderColor: colors.border }}>
            <div className="flex justify-between items-center mb-4">
              <span className={`${FONT_FAMILY_PRIMARY} text-lg font-semibold`} style={{ color: colors.text }}>Subtotal:</span>
              <span className={`${FONT_FAMILY_PRIMARY} text-xl font-bold`} style={{ color: colors.accent }}>
                ${cartTotal.toLocaleString('es-CL')}
              </span>
            </div>
            <button
              className={`w-full py-3 rounded transition-colors duration-300 ${FONT_FAMILY_PRIMARY} text-lg`}
              style={{ backgroundColor: colors.accent, color: colors.background }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.hover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Componente para una fila de item en el carrito
const CartItemRow: React.FC<{ item: CartItem }> = ({ item }) => {
    const { colors } = useTheme();
    const { removeFromCart, updateQuantity } = useCart();
    const imageObject = item.images.length > 0 ? getImageObject(item.images[0]) : null;

    return (
        <li className="flex items-center gap-4">
            {imageObject ? (
                <SmoothImage src={imageObject.webp} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
            ) : (
                <div className="w-20 h-20 bg-gray-200 rounded-md" />
            )}
            <div className="flex-grow">
                <h3 className={`${FONT_FAMILY_PRIMARY} text-sm font-bold`} style={{ color: colors.text }}>{item.name}</h3>
                <p className={`${FONT_FAMILY_SECONDARY} text-sm`} style={{ color: colors.accent }}>${item.price.toLocaleString('es-CL')}</p>
                <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border rounded-l" style={{ borderColor: colors.border }}>-</button>
                    <span className="px-3 py-1 border-t border-b" style={{ borderColor: colors.border }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border rounded-r" style={{ borderColor: colors.border }}>+</button>
                </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
        </li>
    );
}

export default CartSidebar;