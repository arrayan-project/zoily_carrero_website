/**
 * Sección de servicios en formato columnas.
 * Muestra una lista de servicios con imagen, descripción y botón para ver más detalles en un modal.
 *
 * @component
 * @returns {JSX.Element}
 */
import React, { useRef } from "react";
import { useModal } from "../context/ModalContext";
import { servicesData } from "../../data/servicesData";
import ServicesColumnsItem from "./ServicesColumnsItem";
import { Service } from "../../types/ServiceInterfaces";
import RevealWrapper from "../common/RevealWrapper";
import { ModalContent } from "../modals/ModalInterfaces";

const ServicePreviewSection: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const openerRef = useRef<HTMLButtonElement | null>(null);

  // Recibe el evento del botón y guarda el opener
  const handleOpenModal = (modalContent: ModalContent) => (e: React.MouseEvent<HTMLButtonElement>) => {
    openerRef.current = e.currentTarget;
    openModal({ ...modalContent, showTabs: true, onClose: handleCloseModal });
  };

  const handleCloseModal = () => {
    closeModal();
    openerRef.current?.focus();
  };

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center gap-0 mb-8">
        {servicesData.map((service: Service, index) => (
          <ServicesColumnsItem
            key={index}
            service={service}
            openModal={handleOpenModal(service.modalContent)}
          />
        ))}
      </div>
    </RevealWrapper>
  );
};

export default ServicePreviewSection;