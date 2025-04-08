// src/types/CourseInterfaces.tsx
import { ModalContent } from "../components/modals/ModalInterfaces";

export interface CourseItem {
  name: string;
  price: string;
  description: string[];
}

export interface Course {
  category: string;
  description?: string;
  items: CourseItem[];
  modalContent: ModalContent; // Add modalContent
}
