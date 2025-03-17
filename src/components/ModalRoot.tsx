/*
##### Función #####
- Este componente es un contenedor para los modales. Renderiza ModalBase o CourseModal dependiendo de las props.
*/

import React, { useState } from 'react';
import Modal from './ModalBase';
import CourseModal from './CourseModal';
import courseData from "../data/coursesData";

interface ModalContainerProps {
  selectedCourse: string | null;
  isCourseModalOpen: boolean;
  isModalOpen: boolean;
  closeModal: (isCourseModal?: boolean) => void; //cambio
  modalContent: any; // Adjust 'any' to your actual type
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  selectedCourse,
  isCourseModalOpen,
  isModalOpen,
  closeModal, //cambio
  modalContent,
}) => {

  const [error, setError] = useState<string | null>(null); // Estado para el error

  if (error) {
    console.error("Error en ModalRoot:", error); // Registra el error en la consola
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
          onClose={() => closeModal(true)} //cambio
          images={[courseData[selectedCourse].image]}
          title={courseData[selectedCourse].title}
          infoContent={courseData[selectedCourse].infoContent()}
          termsContent={courseData[selectedCourse].termsContent()}
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
