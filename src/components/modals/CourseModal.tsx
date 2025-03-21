// src/components/modals/CourseModal.tsx
import React from "react";
import Modal from "../common/ModalBase";
import { useTheme } from "../context/useThemeHook";
import { getTextColorClass } from "../../utils/utils";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}

const CourseModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
  images,
  title,
  infoContent,
  termsContent,
  description,
}) => {
  const { theme } = useTheme();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      images={images}
      title={title}
      infoContent={infoContent}
      termsContent={termsContent}
      description={description}
    />
  );
};

export default CourseModal;
