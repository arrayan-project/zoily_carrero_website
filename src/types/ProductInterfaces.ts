/**
 * Interfaces para los tipos de datos de la tienda.
 *
 * @module ProductInterfaces
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // Ahora es un array de claves de imagen para el carrusel
  category: string;
  subcategory?: string; // Nueva propiedad opcional para subcategorías
  details?: { label: string; value: string }[]; // Detalles adicionales del producto
  stock?: number; // Opcional: para mostrar disponibilidad
}
