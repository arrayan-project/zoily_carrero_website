/**
 * Contenedor raíz para renderizar cualquier modal dinámico.
 * Recibe el contenido y estado desde el contexto y gestiona accesibilidad y cierre.
 *
 * @component
 * @param {ModalContainerProps} props - Props del contenedor, incluyendo estado de apertura, función de cierre y contenido del modal.
 * @returns {JSX.Element | null}
 */
import React, { useRef} from "react";
import Modal from "../common/ModalBase";
import { ModalContent } from "../modals/ModalInterfaces";
import { useModalAccessibility } from "../../hooks/useModalAccessibility";

interface ModalContainerProps {
  isModalOpen: boolean;
  closeModal: () => void;
  modalContent: ModalContent | null;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isModalOpen,
  closeModal,
  modalContent,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useModalAccessibility(isModalOpen, closeModal, modalRef);

  const handleClose = () => {
    closeModal();
    openerRef.current?.focus();
  };

  if (!modalContent) return null;

  return (
    <div ref={modalRef} data-inert={!isModalOpen}>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        images={modalContent.images}
        title={modalContent.title}
        infoContent={modalContent.infoContent}
        termsContent={modalContent.termsContent}
        description={modalContent.description}
        showTabs={modalContent.showTabs}
      >
        {modalContent.children}
      </Modal>
    </div>
  );
};

export default ModalContainer;
