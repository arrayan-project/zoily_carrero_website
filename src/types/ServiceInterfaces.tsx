// src/types/ServiceInterfaces.tsx
import { ModalContent } from "../components/modals/ModalInterfaces";

export interface ServiceItem {
  name: string;
  price: string;
  description: string[];
}

export interface Service {
  category: string;
  description?: string;
  items: ServiceItem[];
  modalContent: ModalContent; // Add modalContent
}
