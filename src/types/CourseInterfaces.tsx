/**
 * Interfaces para los cursos y sus ítems.
 * Define la estructura de un curso, sus ítems y la relación con el contenido del modal.
 *
 * @module CourseInterfaces
 */
import { ModalContent } from "../components/modals/modalServ-Cour/ModalInterfacesServices";
import images from "../assets/images"; // Importar images para usar keyof typeof images

export interface CourseItem {
  id: string; // o number
  name: string;
  price: string;
  description: string[];
}

export interface Course {
  id: string; // o number, asegúrate que sea único por curso
  category: string;
  imageKey: keyof typeof images; // Añadir la propiedad imageKey
  description?: string;
  items: CourseItem[];
  modalContent: ModalContent; // Add modalContent
}
