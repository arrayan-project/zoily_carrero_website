// src/types/CourseInterfaces.tsx
import { ModalContent } from "../components/modals/ModalInterfaces";
import images from "../assets/images"; // Importar images para usar keyof typeof images

export interface CourseItem {
  name: string;
  price: string;
  description: string[];
}

export interface Course {
  category: string;
  imageKey: keyof typeof images; // Añadir la propiedad imageKey
  description?: string;
  items: CourseItem[];
  modalContent: ModalContent; // Add modalContent
}
