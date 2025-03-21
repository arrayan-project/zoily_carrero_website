// src/components/modals/ModalRoot.tsx
import React, { useState } from 'react';
import Modal from '../common/ModalBase';
import CourseModal from './CourseModal';
import courseData from "../../data/coursesData";
import { ModalContent } from '../../data/servicesData';

interface ModalContainerProps {
  selectedCourse: string | null;
  isCourseModalOpen: boolean;
  isModalOpen: boolean;
  closeModal: (isCourseModal?: boolean) => void;
  modalContent: ModalContent | null;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  selectedCourse,
  isCourseModalOpen,
  isModalOpen,
  closeModal,
  modalContent,
}) => {
  const [error, setError] = useState<string | null>(null);

  if (error) {
    console.error("Error en ModalRoot:", error);
    return (
      <div className="error-container">
        <p className="error-message">Ha ocurrido un error inesperado al cargar el modal.</p>
      </div>
    );
  }

  return (
    <>
      {selectedCourse && courseData[selectedCourse] && (
        <CourseModal
          isOpen={isCourseModalOpen}
          onClose={() => closeModal(true)}
          images={[courseData[selectedCourse].image]}
          title={courseData[selectedCourse].title}
          infoContent={courseData[selectedCourse].infoContent()} // Se llama a la función para obtener el nodo
          termsContent={courseData[selectedCourse].termsContent()} // Se llama a la función para obtener el nodo

        />
      )}

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
