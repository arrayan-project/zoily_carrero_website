// src/types/ServiceInterfaces.tsx
import { ModalContent } from "../components/modals/ModalInterfaces";
import images from "../assets/images"; // Importar images para usar keyof typeof images

export interface ServiceItem {
  name: string;
  price: string;
  description: string[];
}

export interface Service {
  category: string;
  imageKey: keyof typeof images; // Añadir la propiedad imageKey
  description?: string;
  items: ServiceItem[];
  modalContent: ModalContent; // Add modalContent
}
