// src/utils/renderItems.tsx
import React from 'react';
import { ModalContent } from '../data/servicesData';
import { CourseModalContent } from '../data/coursesData';
import renderCarousel from './renderCarousel';
import MobileServiceItem from '../components/sliders/MobileServiceItem'; // Importamos MobileServiceItem
import MobileCourseItem from '../components/sliders/MobileCourseItem'; // Importamos MobileCourseItem

export const renderServiceItem = (
  images: string[],
  title: string,
  openModal: (content: ModalContent | CourseModalContent) => void,
  infoContent: React.ReactNode,
  termsContent: React.ReactNode,
  description: string
): JSX.Element => {
  return (
    <MobileServiceItem
      images={images}
      title={title}
      openModal={openModal}
      infoContent={infoContent}
      termsContent={termsContent}
      description={description}
    />
  );
};

export const renderCourseItem = (
  images: string[],
  title: string,
  openModal: (content: ModalContent | CourseModalContent) => void,
  infoContent: React.ReactNode,
  termsContent: React.ReactNode,
  description: string
): JSX.Element => {
  return (
    <MobileCourseItem
      images={images} // Pasamos solo la primera imagen
      title={title}
      openModal={openModal}
      infoContent={infoContent}
      termsContent={termsContent}
      description={description}
    />
  );
};
