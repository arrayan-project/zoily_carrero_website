/**
 * Sección de cursos en formato columnas.
 * Muestra una lista de cursos con imagen, descripción y botón para ver más detalles en un modal.
 *
 * @component
 * @returns {JSX.Element}
 */
import React, { useRef } from "react";
import { useModal } from "../context/ModalContext";
import { coursesData } from "../../data/coursesData";
import CourseColumnsItem from "./CourseColumnsItem";
import { Course } from "../../types/CourseInterfaces";
import RevealWrapper from "../common/RevealWrapper";
import { ModalContent } from "../modals/ModalInterfaces";

const CoursePreviewSection: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const openerRef = useRef<HTMLButtonElement | null>(null);

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
        {coursesData.map((course: Course, index) => (
          <CourseColumnsItem
            key={index}
            course={course}
            openModal={handleOpenModal(course.modalContent)}
          />
        ))}
      </div>
    </RevealWrapper>
  );
};

export default CoursePreviewSection;