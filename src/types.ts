// src/types.ts
export interface ServiceItem {
    name: string;
    price: string;
    description: string;
  }
  
  export interface Service {
    category: string;
    items: ServiceItem[];
  }
  