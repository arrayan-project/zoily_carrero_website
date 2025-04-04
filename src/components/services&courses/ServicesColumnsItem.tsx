// src/components/layout/ServicePreviewItem.tsx
import React, { useState } from "react";
import styles from './ServicesColumn.module.css';
import { Service} from '../../data/servicesData'; // Importamos Service, ModalContent y termsContent
import ServicesButton from '../buttons/ServicesButton';
import { ModalContent } from "../../types";

interface ServiceColumnsItemProps {
  service: Service; // Recibe un objeto Service
  openModal: (content: ModalContent) => void;
  getInfoContent: (index: number) => ModalContent; // Modificamos el tipo de retorno
  index: number;
}

const ServiceColumnsItem: React.FC<ServiceColumnsItemProps> = ({ service, openModal, getInfoContent, index }) => {
  const [, setError] = useState<string | null>(null);

  const handleOpenModal = () => {
    try {
      const modalContent = getInfoContent(index); // Obtenemos el objeto ModalContent completo
      openModal(modalContent); // Pasamos el objeto ModalContent completo
    } catch (err) {
      setError("Error al abrir el modal.");
      console.error("Error en handleOpenModal:", err);
    }
  };

  return (
    <div
      className={styles['service-preview-item']} // Usamos la nueva clase
      style={{ backgroundImage: `url(${service.modalContent.images[0]})` }} // Usamos service.modalContent.images[0]
    >
      <div className={styles.overlay}>
        <div className={styles['overlay-inner']}>
          <h2>{service.modalContent.title}</h2>
          <p>{service.modalContent.description}</p>

          <ServicesButton
            onClick={handleOpenModal}
            className={`${styles.button} px-6 py-3 bg-pink-500 text-white font-normal font-cinzel rounded shadow hover:bg-pink-800 transition duration-200 text-center`}
          >
            Ver más...
          </ServicesButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceColumnsItem;
