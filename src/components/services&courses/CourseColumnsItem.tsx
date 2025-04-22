import React, { useState } from "react";
import styles from './CoursesColumn.module.css';
import { Course } from "../../types/CourseInterfaces";
import ServicesButton from '../buttons/ServicesButton';
import { ModalContent } from "../modals/ModalInterfaces"; // Importamos ModalContent

interface CourseColumnsItemProps {
    course: Course; // Recibe un objeto CourseData
    openModal: (content: ModalContent) => void;
}

    const CourseColumnItem: React.FC<CourseColumnsItemProps> = ({ course, openModal }) => {
        const [, setError] = useState<string | null>(null);

        const handleOpenModal = () => {
            try {
                openModal(course.modalContent); // Pasamos el objeto ModalContent directamente
            } catch (err) {
                setError("Error al abrir el modal.");
                console.error("Error en handleOpenModal:", err);
            }
        };

        return (
            <div
                className={styles['course-preview-item']}
                style={{ backgroundImage: `url(${course.modalContent.images[0]})` }}
            >
                <div className={`${styles.overlay} ${styles['overlay-bottom']}`}>
                    <div className={styles['overlay-inner']}>
                        <h2 className="font-cinzel text-2xl">{course.category}</h2>
                        <p>{course.description}</p>

                        <ServicesButton
                            onClick={handleOpenModal}
                            className={`${styles.button} px-3 py-1 bg-red-900/50 text-white text-base font-cinzel shadow hover:bg-red-800/70 transition duration-200 text-center`}
                            >
                            VER MÁS
                        </ServicesButton>
                    </div>
                </div>
            </div>
        );
    };

    export default CourseColumnItem;