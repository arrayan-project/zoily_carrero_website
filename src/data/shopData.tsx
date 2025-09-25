/**
 * Datos de los productos para la tienda.
 *
 * @module shopData
 */
import { Product } from "../types/ProductInterfaces";

export const products: Product[] = [
  {
    id: "prod1",
    name: 'Kit de Brochas "Esencial"',
    description:
      "Set completo de 15 brochas profesionales para un acabado perfecto en rostro y ojos.",
    price: 24990,
    images: [
      "product-brushes", // Debes agregar estas imágenes en tus assets
      "product-brushes-2",
      "product-brushes-3",
    ],
    category: "Accesorios",
    details: [
      { label: "Material", value: "Cerdas sintéticas de alta calidad, mangos de madera." },
      { label: "Incluye", value: "15 brochas y estuche de viaje." },
      { label: "Dimensiones del estuche", value: "24cm x 15cm x 5cm" },
    ],
    stock: 15,
  },
  {
    id: "prod2",
    name: 'Paleta de Sombras "Atardecer"',
    description:
      "12 tonos cálidos y vibrantes, mates y satinados, para looks de día y de noche.",
    price: 17990,
    images: [
      "product-palette", // Debes agregar estas imágenes en tus assets
      "product-palette-2",
    ],
    category: "Maquillaje",
    subcategory: "Ojos",
    details: [
      { label: "Acabado", value: "Mate y Satinado" },
      { label: "Peso neto", value: "14.4g" },
      { label: "Cruelty-Free", value: "Sí" },
    ],
    stock: 22,
  },
  {
    id: "prod3",
    name: "Base de Maquillaje Fluida",
    description:
      "Cobertura media a completa con acabado natural y larga duración. Disponible en 8 tonos.",
    price: 19990,
    images: ["product-foundation"],
    category: "Maquillaje",  
    subcategory: "Rostro",
  },
  {
    id: "prod4",
    name: "Delineador Líquido 'Precisión'",
    description:
      "Punta ultra fina para un trazo perfecto y de larga duración. Color negro intenso.",
    price: 12990,
    images: ["product-eyeliner"],
    category: "Maquillaje",
    subcategory: "Ojos",
  },
  {
    id: "prod5",
    name: "Esponja de Maquillaje 'Pro-Blend'",
    description:
      "Diseño ergonómico para una aplicación sin marcas. Ideal para bases y correctores.",
    price: 7990,
    images: ["product-sponge"],
    category: "Accesorios",
  },
  {
    id: "prod6",
    name: "Labial Mate 'Rojo Pasión'",
    description:
      "Color intenso, acabado mate aterciopelado y fórmula que no reseca los labios.",
    price: 14990,
    images: ["product-lipstick"],
    category: "Maquillaje",
    subcategory: "Labios",
  },
  {
    id: "prod7",
    name: "Fijador de Maquillaje 'Larga Duración'",
    description:
      "Bruma ligera que sella tu maquillaje por hasta 16 horas, controlando el brillo.",
    price: 16990,
    images: ["product-fixer"],
    category: "Cuidado Facial",
    subcategory: "Ojos",
  },
  {
    id: "prod8",
    name: "Limpiador de Brochas 'Express'",
    description:
      "Solución de secado rápido para limpiar y desinfectar tus brochas al instante.",
    price: 9990,
    images: ["product-brush-cleaner"],
    category: "Accesorios",
  },
  {
    id: "prod9",
    name: "Máscara de Pestañas 'Volumen Extremo'",
    description:
      "Aporta volumen y longitud a tus pestañas sin grumos. Efecto pestañas postizas.",
    price: 15990,
    images: ["product-mascara"],
    category: "Maquillaje",
  },
  {
    id: "prod10",
    name: "Sérum Hidratante con Ácido Hialurónico",
    description:
      "Prepara tu piel antes del maquillaje con una hidratación profunda y duradera.",
    price: 22990,
    images: ["product-serum"],
    category: "Cuidado Facial",
    subcategory: "Rostro",
  },
  {
    id: "prod11",
    name: "Corrector de Ojeras 'Cobertura Total'",
    description:
      "Cubre imperfecciones y ojeras con una fórmula cremosa que no se cuartea.",
    price: 13990,
    images: ["product-concealer"],
    category: "Maquillaje",
  },
  {
    id: "prod12",
    name: "Polvos Translúcidos 'Sella y Matifica'",
    description:
      "Fija el maquillaje, controla el brillo y minimiza la apariencia de los poros.",
    price: 18990,
    images: ["product-powder"],
    category: "Maquillaje",
    subcategory: "Rostro",
  },
];
