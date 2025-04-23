import React from 'react';
import { useModal } from "../context/ModalContext";
import { servicesData} from '../../data/servicesData';
import ServicesColumnsItem from './ServicesColumnsItem';
import { Service } from '../../types/ServiceInterfaces';

const ServicesPreviewSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center gap-0 mb-8">
      {servicesData.map((service: Service, index) => (
        <ServicesColumnsItem
          key={index}
          service={service}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default ServicesPreviewSection;
