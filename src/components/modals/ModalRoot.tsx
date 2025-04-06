// src/components/modals/ModalRoot.tsx
import React, { useEffect, useRef } from 'react';
import Modal from '../common/ModalBase';
import { ModalContent } from '../../types';
import { CourseModalContent } from '../../data/coursesData';

interface ModalContainerProps {
  isModalOpen: boolean;
  closeModal: () => void;
  modalContent: ModalContent | CourseModalContent | null;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isModalOpen,
  closeModal,
  modalContent,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isModalOpen) {
      // Mover el foco al modal cuando se abre
      const focusableElement = modalElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusableElement instanceof HTMLElement) {
        focusableElement.focus();
      }
      // Remove inert when the modal is open
      modalElement.inert = false;
    } else {
      // Add inert when the modal is closed
      modalElement.inert = true;
    }
  }, [isModalOpen]);

  if (!modalContent) return null;

  return (
    <div
      ref={modalRef}
      data-inert={!isModalOpen} // Use data-inert instead of inert
    >
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={modalContent.images}
        title={modalContent.title}
        infoContent={modalContent.infoContent}
        termsContent={modalContent.termsContent}
        description={modalContent.description}
      />
    </div>
  );
};

export default ModalContainer;
