//ModalInterfaces defines the data structure for modal content.
import React from 'react';

export interface ModalContent {
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}
