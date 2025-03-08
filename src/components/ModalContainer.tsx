// ModalContainer.tsx
import React from 'react';
import Modal from './Modal';
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
