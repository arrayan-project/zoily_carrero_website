// src/utils/renderCarousel.tsx
import React from 'react';
import CourseCarousel from '../components/sliders/CourseSlider';
import ServiceCarousel from '../components/sliders/ServiceSlider';
import { ModalContent } from "../types";
import { CourseModalContent } from '../data/coursesData';

const renderCarousel = (
  images: string[],
  title: string,
  openModal: (content: ModalContent | CourseModalContent) => void,
  infoContent?: React.ReactNode,
  termsContent?: React.ReactNode,
  description?: string,
  isCourse?: boolean, 
  label?: string,
): JSX.Element => {
  const commonProps = {
    images: images,
    title: title,
    openModal: openModal,
    infoContent: infoContent || <></>,
    termsContent: termsContent || <></>,
    description: description,
    label:label,
  };

  if (isCourse) {
    return <CourseCarousel {...commonProps} />;
  } else {
    return <ServiceCarousel {...commonProps} />;
  }
};

export default renderCarousel;
