import React from 'react';
import styles from './ServicesColumn.module.css';
import { useModal } from "../context/ModalContext"; // Importamos useModal
import { servicesData} from '../../data/servicesData'; // Importamos servicesData y ServiceData
import ServicesColumnsItem from './ServicesColumnsItem';
import { Service } from '../../types/ServiceInterfaces'; // Importamos Service

const ServicesPreviewSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className={styles['flex-wrapper']}>
      {servicesData.map((service: Service, index) => ( // Usamos servicesData y ServiceData
        <ServicesColumnsItem
          key={index}
          service={service} // Pasamos el objeto service directamente
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default ServicesPreviewSection;
