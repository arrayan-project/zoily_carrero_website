/**
 * Interfaces para los servicios y sus ítems.
 * Define la estructura de un servicio, sus ítems y la relación con el contenido del modal.
 *
 * @module ServiceInterfaces
 */
import { ModalContent } from "../components/modals/modalServ-Cour/ModalInterfacesServices";
import images from "../assets/images"; // Importar images para usar keyof typeof images

export interface ServiceItem {  
  id: string; // o number, según tu JSON
  name: string;
  price: string;
  description: string[];
}

export interface Service {
  id: string; // o number, asegúrate que sea único por servicio
  category: string;
  imageKey: keyof typeof images; // Añadir la propiedad imageKey
  description?: string;
  items: ServiceItem[];
  modalContent: ModalContent; // Add modalContent
}
