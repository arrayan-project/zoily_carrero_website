import React, { useState } from "react";
import { Service } from '../../types/ServiceInterfaces'; // Importamos Service
import ServicesButton from '../buttons/ServicesButton';
import { ModalContent } from "../modals/ModalInterfaces"; // Importamos ModalContent

interface ServiceColumnsItemProps {
  service: Service;
  openModal: (content: ModalContent) => void;
}

const ServiceColumnsItem: React.FC<ServiceColumnsItemProps> = ({ service, openModal }) => {
  const [, setError] = useState<string | null>(null);

  const handleOpenModal = () => {
    try {
      openModal(service.modalContent);
    } catch (err) {
      setError("Error al abrir el modal.");
      console.error("Error en handleOpenModal:", err);
    }
  };

  return (
    <div
        className="group relative w-full aspect-[3/4] lg:w-[200px] lg:h-[800px] lg:aspect-auto flex-1 lg:hover:grow-[3] lg:hover:shrink-0 text-center text-white no-underline bg-cover bg-center bg-no-repeat cursor-pointer transition-[flex-grow] duration-400"
        style={{ backgroundImage: `url(${service.modalContent.images[0]})` }}
    >
      <div className="absolute inset-0 flex justify-center items-end p-4 bg-gradient-to-t from-[rgba(0,0,0,0.7)_25%] to-[rgba(0,0,0,0)_90%] opacity-100 lg:items-center lg:p-0 lg:bg-[rgba(0,0,0,0.5)] lg:opacity-0 group-hover:lg:opacity-100 transition-opacity duration-300 ease-out lg:transition-opacity">
        <div className="text-center text-white w-full mb-4">
          <h2 className="font-cinzel text-2xl opacity-100 visible lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible transition-opacity duration-400 lg:transition-opacity">
            {service.category}
          </h2>
          <p className="hidden">{service.description}</p>

          <ServicesButton
            onClick={handleOpenModal}
            className="relative mt-2.5 px-3 py-1 bg-red-900/50 text-white text-base font-cinzel shadow hover:bg-red-800/70 transition duration-200 text-center opacity-100 visible lg:opacity-0 lg:invisible group-hover:lg:opacity-100 group-hover:lg:visible lg:transition-opacity" // Eliminado duration-400 aquí ya que el botón ya tiene duration-200
            >
            VER MÁS
          </ServicesButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceColumnsItem;
