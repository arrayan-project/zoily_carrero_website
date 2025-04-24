import React from 'react';
import { useModal } from "../context/ModalContext";
import { servicesData} from '../../data/servicesData';
import ServicesColumnsItem from './ServicesColumnsItem';
import { Service } from '../../types/ServiceInterfaces';
import RevealWrapper from "../common/RevealWrapper";

const ServicesPreviewSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <RevealWrapper animationClass="fade-in-animation">
    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center gap-0 mb-8">
      {servicesData.map((service: Service, index) => (
        <ServicesColumnsItem
          key={index}
          service={service}
          openModal={openModal}
        />
      ))}
    </div>
    </RevealWrapper>
  );
};

export default ServicesPreviewSection;
