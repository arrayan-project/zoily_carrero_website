import React from 'react';
import { useModal } from "../context/ModalContext";
import { coursesData } from '../../data/coursesData';
import CourseColumnsItem from './CourseColumnsItem';
import { Course } from '../../types/CourseInterfaces';

const CoursePreviewSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    // Aplicadas las clases de Tailwind para flex-wrapper
    <div className="flex flex-col lg:flex-row lg:flex-wrap w-full justify-center gap-0 mb-8">
      {coursesData.map((course: Course, index) => (
        <CourseColumnsItem
          key={index}
          course={course}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default CoursePreviewSection;
