// src/components/modals/CourseModal.tsx

import React from "react";
import Modal from "../common/ModalBase"; // Importamos el componente ModalBase
import { useTheme } from "../context/useThemeHook"; // Importamos el hook
import { getTextColorClass } from "../../utils/utils"; // Importamos la funcion

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  infoContent: () => JSX.Element; // Ahora es una función que devuelve JSX
  termsContent: () => JSX.Element; // Ahora es una función que devuelve JSX
}

const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  images,
  title,
  infoContent,
  termsContent,
}) => {
  const { theme } = useTheme(); // Usamos el hook

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      images={images}
      title={title}
      infoContent={infoContent()} // Ejecutamos la función
      termsContent={termsContent()} // Ejecutamos la función
    />
  );
};

export default CourseModal;
