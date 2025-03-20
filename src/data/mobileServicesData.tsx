// src/data/mobileServicesData.tsx

import {
    infoContentNovia,
    infoContentExpress,
    infoContentGlam,
    infoContentMadura,
    infoContentPeinado,
    infoContentSocial,
    termsContent,
  } from "./servicesData";
  import {
    noviaMakeupServices,
    socialMakeupServices,
    peinadoMakeupServices,
    maduraMakeupServices,
    glamMakeupServices,
    expressMakeupServices,
  } from "./servicesData";
  import { imageArrays } from "../assets/img/images";
  
  const {
    serviceBrideImages,
    serviceSocialImages,
    serviceHairAndMakeupImages,
    serviceMatureSkinImages,
    serviceGlamImages,
    serviceExpressImages,
  } = imageArrays;
  
  export const mobileServices = [
    {
      images: serviceBrideImages,
      title: "Maquillaje Novia",
      infoContent: infoContentNovia(),
      termsContent: termsContent(),
      description: noviaMakeupServices.description,
    },
    {
      images: serviceSocialImages,
      title: "Maquillaje Social",
      infoContent: infoContentSocial(),
      termsContent: termsContent(),
      description: socialMakeupServices.description,
    },
    {
      images: serviceHairAndMakeupImages,
      title: "Maquillaje y Peinado",
      infoContent: infoContentPeinado(),
      termsContent: termsContent(),
      description: peinadoMakeupServices.description,
    },
    {
      images: serviceMatureSkinImages,
      title: "Maquillaje en Piel Madura",
      infoContent: infoContentMadura(),
      termsContent: termsContent(),
      description: maduraMakeupServices.description,
    },
    {
      images: serviceGlamImages,
      title: "Maquillaje Glam",
      infoContent: infoContentGlam(),
      termsContent: termsContent(),
      description: glamMakeupServices.description,
    },
    {
      images: serviceExpressImages,
      title: "Maquillaje Quinceañera",
      infoContent: infoContentExpress(),
      termsContent: termsContent(),
      description: expressMakeupServices.description,
    },
  ];
  