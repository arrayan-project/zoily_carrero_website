/**
 * Interfaces para los tipos de datos del carrito de compras.
 * @module CartInterfaces
 */
import { Product } from './ProductInterfaces';

export interface CartItem extends Product {
  quantity: number;
}