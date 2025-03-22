// src/components/modals/ModalRoot.tsx
import React from 'react';
import Modal from '../common/ModalBase';
import { ModalContent } from '../../data/servicesData';
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

  return (
    <>
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={modalContent.images}
          title={modalContent.title}
          infoContent={modalContent.infoContent}
          termsContent={modalContent.termsContent}
          description={modalContent.description}
        />
      )}
    </>
  );
};

export default ModalContainer;
