import React from 'react';
import styles from './ServicesColumn.module.css';
import { useModal } from "../context/ModalContext"; // Importamos useModal
import { coursesData } from '../../data/coursesData'; // Importamos coursesData y CourseData
import CourseColumnsItem from './CourseColumnsItem';
import { Course } from '../../types/CourseInterfaces'; // Importamos Course

const CoursePreviewSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className={styles['flex-wrapper']}>
      {coursesData.map((course: Course, index) => ( // Usamos coursesData y CourseData
        <CourseColumnsItem
          key={index}
          course={course} // Pasamos el objeto course directamente
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default CoursePreviewSection;