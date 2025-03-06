// src/types.ts
import React from "react";

// src/types.ts
export interface ServiceItem {
    name: string;
    price: string;
    description: string[];
  }
  
  // types.ts
export interface Service { // Add export
  category: string;
  description?: string; // Keep it optional
  items: {
    name: string;
    price: string;
    description: string[];
  }[];
}

export interface ModalContent {
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?:string;
}
