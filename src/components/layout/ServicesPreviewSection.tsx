// src/components/layout/ServicesPreviewSection.tsx
import React from 'react';
import styles from './test.module.css';
import { useModal } from '../../pages/Services';
import { getInfoContent, servicesArray } from '../../data/servicesData'; // Importamos desde servicesData.tsx
import ServicePreviewItem from './ServicePreviewItem';

const ServicesPreviewSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className={styles['flex-wrapper']}>
      {servicesArray.map((service, index) => (
        <ServicePreviewItem
          key={index}
          service={service}
          openModal={openModal}
          getInfoContent={getInfoContent}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServicesPreviewSection;
