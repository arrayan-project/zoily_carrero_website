import React, { useState } from "react";
import styles from './ServicesColumn.module.css';
import { Service } from '../../types/ServiceInterfaces'; // Importamos Service
import ServicesButton from '../buttons/ServicesButton';
import { ModalContent } from "../modals/ModalInterfaces"; // Importamos ModalContent

interface ServiceColumnsItemProps {
  service: Service; // Recibe un objeto ServiceData
  openModal: (content: ModalContent) => void;
}

const ServiceColumnsItem: React.FC<ServiceColumnsItemProps> = ({ service, openModal }) => {
  const [, setError] = useState<string | null>(null);

  const handleOpenModal = () => {
    try {
      openModal(service.modalContent); // Pasamos el objeto ModalContent directamente
    } catch (err) {
      setError("Error al abrir el modal.");
      console.error("Error en handleOpenModal:", err);
    }
  };

  return (
    <div
      className={styles['service-preview-item']}
      style={{ backgroundImage: `url(${service.modalContent.images[0]})` }}
    >
      <div className={styles.overlay}>
        <div className={styles['overlay-inner']}>
          <h2>{service.category}</h2>
          <p>{service.description}</p>

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
