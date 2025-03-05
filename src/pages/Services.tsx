import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatsSection from "../components/StatsSection";
import PageBanner from "../components/PageBanner";
import Modal from "../components/Modal";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";
import images, {
  noviaGalleryImages as noviaImages,
  socialGalleryImages as socialImages,
  peinadoGalleryImages as peinadoImages,
  pielMaduraGalleryImages as maduraImages,
  glamGalleryImages as glamImages,
  expressGalleryImages as expressImages,
} from "../assets/img/images";
import { useTheme } from "../components/context/useTheme";
import ScrollReveal from "../components/ScrollReveal";
import "../index.css";
import ServicesBackgroundSVG from "../components/svgBackground/ServicesBackground";
import ServiceCarousel from "../components/ServiceCarousel";
import {
  noviaMakeupServices,
  socialMakeupServices,
  peinadoMakeupServices,
  maduraMakeupServices,
  glamMakeupServices,
  expressMakeupServices,
  basicCourseServices,
  intermediateCourseServices,
  advancedCourseServices,
  professionalCourseServices,
} from "../data/servicesData";

// Type for Makeup Service Items (e.g., name, price, description)
interface MakeupServiceItemProps {
  name: string;
  price: string;
  description: string;
}

function Services() {
  // State for the image gallery (not currently used, but can be used in future)
  const [galleryImages] = useState<string[]>([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Swipe logic for the carousel
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length),
    onSwipedRight: () =>
      setCurrentImageIndex(
        (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
      ),
    trackMouse: true,
  });

  // Function to close the gallery (not currently used, but can be used in future)
  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  //Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    images: string[];
    title: string;
    infoContent: React.ReactNode;
    termsContent: React.ReactNode;
  } | null>(null);

  const openModal = (content: {
    images: string[];
    title: string;
    infoContent: React.ReactNode;
    termsContent: React.ReactNode;
  }) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Helper components to render each service item
  const NoviaMakeupServiceItem: React.FC<MakeupServiceItemProps> = ({
    name,
    price,
    description,
  }) => (
    <div className="mb-4">
      <h4 className="font-bold">{name}</h4>
      <p className="text-gray-600">Precio: {price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
  const SocialMakeupServiceItem: React.FC<MakeupServiceItemProps> = ({
    name,
    price,
    description,
  }) => (
    <div className="mb-4">
      <h4 className="font-bold">{name}</h4>
      <p className="text-gray-600">Precio: {price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
  const GlamMakeupServiceItem: React.FC<MakeupServiceItemProps> = ({
    name,
    price,
    description,
  }) => (
    <div className="mb-4">
      <h4 className="font-bold">{name}</h4>
      <p className="text-gray-600">Precio: {price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
  const MaduraMakeupServiceItem: React.FC<MakeupServiceItemProps> = ({
    name,
    price,
    description,
  }) => (
    <div className="mb-4">
      <h4 className="font-bold">{name}</h4>
      <p className="text-gray-600">Precio: {price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
  const PeinadoMakeupServiceItem: React.FC<MakeupServiceItemProps> = ({
    name,
    price,
    description,
  }) => (
    <div className="mb-4">
      <h4 className="font-bold">{name}</h4>
      <p className="text-gray-600">Precio: {price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
  const ExpressMakeupServiceItem: React.FC<MakeupServiceItemProps> = ({
    name,
    price,
    description,
  }) => (
    <div className="mb-4">
      <h4 className="font-bold">{name}</h4>
      <p className="text-gray-600">Precio: {price}</p>
      <p className="text-sm">{description}</p>
    </div>
  );

  const { theme } = useTheme();

  // Content for the "Informacion" tab of each modal
  const infoContentNovia = (
    <div>
      {noviaMakeupServices.items.map((item, index) => (
        <NoviaMakeupServiceItem key={index} {...item} />
      ))}
    </div>
  );
  const termsContentNovia = (
    <div>
      <p className="text-sm">Terminos para el servicio de novia</p>
    </div>
  );
  const infoContentExpress = (
    <div>
      {expressMakeupServices.items.map((item, index) => (
        <ExpressMakeupServiceItem key={index} {...item} />
      ))}
    </div>
  );
  const termsContentExpress = (
    <div>
      <p className="text-sm">Terminos para el servicio express</p>
    </div>
  );
  const infoContentGlam = (
    <div>
      {glamMakeupServices.items.map((item, index) => (
        <GlamMakeupServiceItem key={index} {...item} />
      ))}
    </div>
  );
  const termsContentGlam = (
    <div>
      <p className="text-sm">Terminos para el servicio glam</p>
    </div>
  );
  const infoContentMadura = (
    <div>
      {maduraMakeupServices.items.map((item, index) => (
        <MaduraMakeupServiceItem key={index} {...item} />
      ))}
    </div>
  );
  const termsContentMadura = (
    <div>
      <p className="text-sm">Terminos para el servicio de piel madura</p>
    </div>
  );
  const infoContentPeinado = (
    <div>
      {peinadoMakeupServices.items.map((item, index) => (
        <PeinadoMakeupServiceItem key={index} {...item} />
      ))}
    </div>
  );
  const termsContentPeinado = (
    <div>
      <p className="text-sm">Terminos para el servicio de peinado</p>
    </div>
  );
  const infoContentSocial = (
    <div>
      {socialMakeupServices.items.map((item, index) => (
        <SocialMakeupServiceItem key={index} {...item} />
      ))}
    </div>
  );
  const termsContentSocial = (
    <div>
      <p className="text-sm">Terminos para el servicio social</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Opens the main div */}
      <main className="flex-grow">
        {/* Opens the main content container */}
        {/* Banner personalizado para la sección de Servicios */}
        <PageBanner
          title="NUESTROS SERVICIOS"
          imageSrcs={[images.servicesBannerUp]}
          objectPosition="left-bottom"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollReveal animationClassName="fade-in-image">
              <Link
                to="/contact"
                className="px-8 py-5 bg-pink-400 text-white font-base font-cinzel rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
              >
                Agenda tu cita
              </Link>
            </ScrollReveal>
          </div>
        </PageBanner>
        <div className="relative mb-24 md:mb-36">
          <ServicesBackgroundSVG className="absolute inset-0 w-full h-full" />
          <div className=" mx-auto px-2 py-16 md:py-32 md:px-6 lg:px-48 z-10 ">
          <ScrollReveal className="fade-in-up-animation">
            <h1
              className={`text-4xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              CONOCE LO QUE PODEMOS HACER POR TI
            </h1>
          </ScrollReveal>

            {/* Sección servicios de maquillaje */}
            <div className="font-cinzel grid grid-cols-2 lg:grid-cols-3 gap-2 mb-20 md:mb-18 gap-y-20">
              {/* Item Novia)*/}
              <ServiceCarousel
                images={noviaImages}
                title="Maquillaje Novia"
                description="From elegant centerpieces to dramatic installations, we transform your reception space into a breathtaking floral paradise."
                openModal={openModal}
                infoContent={infoContentNovia}
                termsContent={termsContentNovia}
              />
              {/* Item Social*/}
              <ServiceCarousel
                images={socialImages}
                title="Maquillaje Social"
                description="From elegant centerpieces to dramatic installations, we transform your reception space into a breathtaking floral paradise."
                openModal={openModal}
                infoContent={infoContentSocial}
                termsContent={termsContentSocial}
              />
              {/* Item Peinado*/}
              <ServiceCarousel
                images={peinadoImages}
                title="Maquillaje y Peinado"
                description="From elegant centerpieces to dramatic installations, we transform your reception space into a breathtaking floral paradise."
                openModal={openModal}
                infoContent={infoContentPeinado}
                termsContent={termsContentPeinado}
              />
              {/* Item Madura*/}
              <ServiceCarousel
                images={maduraImages}
                title="Maquillaje en Piel Madura"
                description="From elegant centerpieces to dramatic installations, we transform your reception space into a breathtaking floral paradise."
                openModal={openModal}
                infoContent={infoContentMadura}
                termsContent={termsContentMadura}
              />
              {/* Item Glam*/}
              <ServiceCarousel
                images={glamImages}
                title="Maquillaje Glam"
                description="From elegant centerpieces to dramatic installations, we transform your reception space into a breathtaking floral paradise."
                openModal={openModal}
                infoContent={infoContentGlam}
                termsContent={termsContentGlam}
              />
              {/* Item Express*/}
              <ServiceCarousel
                images={expressImages}
                title="Maquillaje Express"
                description="From elegant centerpieces to dramatic installations, we transform your reception space into a breathtaking floral paradise."
                openModal={openModal}
                infoContent={infoContentExpress}
                termsContent={termsContentExpress}
              />
            </div>
          </div>

          {/* Sección "Nuestros servicios incluyen" */}
          <div className="text-center space-y-8 md:mb-6">
            <h2
              className={`text-2xl md:text-3xl font-cinzel font-extralight text-center ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Nuestros servicios incluyen
            </h2>

            <ScrollReveal animationClassName="fade-in-text">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                <li className={`p-6 shadow-sm p-2 md:p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <h4 className={`font-montserrat tracking-wide mb-3 text-center ${theme === "dark" ? "text-white" : "text-gray-700"}`}
                  >
                    Asesoría para cuidado de la piel
                  </h4>
                  <p className={`text-xs sm:text-sm md:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Hidratación, limpieza y productos
                  </p>
                </li>

                <li className={`p-6 shadow-sm p-2 md:p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <h4 className={`font-montserrat tracking-wide mb-3 text-center ${theme === "dark" ? "text-white" : "text-gray-700"}`}
                  >
                    Ceremony Décor
                  </h4>
                  <p className={`text-xs sm:text-sm md:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Arches, aisle designs, and altar arrangements
                  </p>
                </li>

                <li className={`p-6 shadow-sm p-2 md:p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <h4 className={`font-montserrat tracking-wide mb-3 text-center ${theme === "dark" ? "text-white" : "text-gray-700"}`}
                  >
                    Reception Flowers
                  </h4>
                  <p className={`text-xs sm:text-sm md:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Centerpieces, cake flowers, and installations
                  </p>
                </li>
              </ul>
            </ScrollReveal>
          </div>
          {/* Fin sección "Nuestros servicios incluyen" */}
        </div>

        {/* Sección estadistica de servicios */}
        <div className="w-full mb-0 md:mb-6">
          <StatsSection />
        </div>
        {/* Fin sección estadistica de servicios */}
        <div className=" mx-auto md:px-48 px-2">


          {/* Sección Cursos */}
            <div className="text-center space-y-8 pt-16 mb-24 md:mb-48">
              <ScrollReveal animationClassName="fade-in-text">
                <h1 className="text-2xl md:text-5xl font-cinzel font-light text-center md:mb-24 md-12 tracking-wider ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                  NUESTROS CURSOS
                </h1>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
                {/* CURSO BASICO */}
                <div className="space-y-6">
                  <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                    <ScrollReveal animationClassName="fade-in-image">
                      <img
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                        alt="Curso Básico"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </ScrollReveal>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                      Reserva tu cita
                    </button>
                  </div>
                  <ScrollReveal animationClassName="fade-in-text">
                    <h2 className="text-xl md:text-2xl font-cinzel tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                      Curso Básico
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal animationClassName="fade-in-text">
                    <p
                      className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Each bouquet is thoughtfully designed to complement your
                      wedding style and color palette,               creating
                      an unforgettable statement piece for your special day.
                    </p>
                  </ScrollReveal>
                  <div className="mb-16">
                    <div
                      className={`shadow-sm p-2 md:p-8 ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <ScrollReveal animationClassName="fade-in-text">
                        <h2
                          className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                            theme === "dark" ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {basicCourseServices.category}
                          {/* Usamos los datos de basicCourseServices */}
                        </h2>
                      </ScrollReveal>
                      <div className="space-y-6">
                        {basicCourseServices.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`border-b pb-4 last:border-0 ${
                              theme === "dark"
                                ? "border-gray-600"
                                : "border-gray-100"
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <ScrollReveal animationClassName="fade-in-text">
                                <h3
                                  className={`font-montserrat text-sm sm:text-lg ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {item.name}
                                </h3>
                              </ScrollReveal>
                              <ScrollReveal animationClassName="fade-in-text">
                                <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                  {item.price}
                                </span>
                              </ScrollReveal>
                            </div>
                            <ScrollReveal animationClassName="fade-in-text">
                              <p
                                className={`text-xs sm:text-sm md:text-base ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.description}
                              </p>
                            </ScrollReveal>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              {/* CURSO INTERMEDIO */}
              <div className="space-y-6">
                {" "}
                <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                  <ScrollReveal animationClassName="fade-in-image">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </ScrollReveal>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                    Reserva tu cita
                  </button>{" "}
                </div>
                <ScrollReveal animationClassName="fade-in-text">
                  <h2 className="text-xl md:text-2xl font-cinzel tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                    Curso Intermedio
                  </h2>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <p
                    className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Each bouquet is thoughtfully designed to complement your
                    wedding style and color palette,             creating an
                    unforgettable statement piece for your special day.
                  </p>
                </ScrollReveal>
                <div className="mb-16">
                  <div
                    className={`shadow-sm p-2 md:p-8 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <ScrollReveal animationClassName="fade-in-text">
                      <h2
                        className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {intermediateCourseServices.category}
                        {/* Usamos los datos de basicCourseServices */}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {intermediateCourseServices.items.map(
                        (item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`border-b pb-4 last:border-0 ${
                              theme === "dark"
                                ? "border-gray-600"
                                : "border-gray-100"
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <ScrollReveal animationClassName="fade-in-text">
                                <h3
                                  className={`font-montserrat text-sm sm:text-lg ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {item.name}
                                </h3>
                              </ScrollReveal>
                              <ScrollReveal animationClassName="fade-in-text">
                                <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                  {item.price}
                                </span>
                              </ScrollReveal>
                            </div>
                            <ScrollReveal animationClassName="fade-in-text">
                              <p
                                className={`text-xs sm:text-sm md:text-base ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.description}
                              </p>
                            </ScrollReveal>
                          </div>
                        )
                      )}
                    </div>
                  </div>{" "}
                </div>
              </div>
              {/* CURSO AVANZADO */}
              <div className="space-y-6">
                {" "}
                <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                  <ScrollReveal animationClassName="fade-in-image">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </ScrollReveal>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                    Reserva tu cita
                  </button>
                </div>
                <ScrollReveal animationClassName="fade-in-text">
                  <h2 className="text-xl md:text-2xl font-cinzel tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                    Curso Avanzado
                  </h2>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <p
                    className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Each bouquet is thoughtfully designed to complement your
                    wedding style and color palette, creating an unforgettable
                    statement piece for your special day.
                  </p>
                </ScrollReveal>
                <div className="mb-16">
                  <div
                    className={`shadow-sm p-2 md:p-8 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <ScrollReveal animationClassName="fade-in-text">
                      <h2
                        className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {advancedCourseServices.category}
                        {/* Usamos los datos de basicCourseServices */}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {advancedCourseServices.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`border-b pb-4 last:border-0 ${
                            theme === "dark"
                              ? "border-gray-600"
                              : "border-gray-100"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <ScrollReveal animationClassName="fade-in-text">
                              <h3
                                className={`font-montserrat text-sm sm:text-lg ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-800"
                                }`}
                              >
                                {item.name}
                              </h3>
                            </ScrollReveal>
                            <ScrollReveal animationClassName="fade-in-text">
                              <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                {item.price}
                              </span>
                            </ScrollReveal>
                          </div>
                          <ScrollReveal animationClassName="fade-in-text">
                            <p
                              className={`text-xs sm:text-sm md:text-base ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.description}
                            </p>
                          </ScrollReveal>
                        </div>
                      ))}
                    </div>
                  </div>{" "}
                </div>
              </div>
              {/* CURSO PROFESIONAL */}
              <div className="space-y-6">
                <div className="w-full h-96 shadow-lg overflow-hidden relative group">
                  <ScrollReveal animationClassName="fade-in-image">
                    <img
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </ScrollReveal>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-white px-6 py-3 rounded opacity-0 group-hover:opacity-100 animate-color-button">
                    Reserva tu cita
                  </button>{" "}
                </div>
                <ScrollReveal animationClassName="fade-in-text">
                  <h2 className="text-xl md:text-2xl font-cinzel tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                    Curso Profesional
                  </h2>
                </ScrollReveal>
                <ScrollReveal animationClassName="fade-in-text">
                  <p
                    className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Each bouquet is thoughtfully designed to complement your
                    wedding style and color palette,     creating an
                    unforgettable statement piece for your special day.
                  </p>
                </ScrollReveal>
                <div className="mb-16">
                  <div
                    className={`shadow-sm p-2 md:p-8 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <ScrollReveal animationClassName="fade-in-text">
                      <h2
                        className={`text-lg text-base md:text-2xl font-montserrat tracking-wide mb-6 text-center ${
                          theme === "dark" ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {professionalCourseServices.category}
                        {/* Usamos los datos de basicCourseServices */}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {professionalCourseServices.items.map(
                        (item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`border-b pb-4 last:border-0 ${
                              theme === "dark"
                                ? "border-gray-600"
                                : "border-gray-100"
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <ScrollReveal animationClassName="fade-in-text">
                                <h3
                                  className={`font-montserrat text-sm sm:text-lg ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-800"
                                  }`}
                                >
                                  {item.name}
                                </h3>
                              </ScrollReveal>
                              <ScrollReveal animationClassName="fade-in-text">
                                <span className="font-montserrat text-xs sm:text-sm md:text-base text-pink-600">
                                  {item.price}
                                </span>
                              </ScrollReveal>
                            </div>
                            <ScrollReveal animationClassName="fade-in-text">
                              <p
                                className={`text-xs sm:text-sm md:text-base ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                {item.description}
                              </p>
                            </ScrollReveal>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fin sección Cursos */}
          </div>

          {/* Galería de imágenes modal */}
          {isGalleryOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center"
              onClick={closeGallery}
            >
              <div
                className="relative  p-4 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Detiene la propagación del evento para que no se cierre al hacer clic en la imagen/controles */}
                <button
                  onClick={closeGallery}
                  className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`Imagen en galería ${currentImageIndex + 1}`}
                  className="max-h-[80vh] max-w-[90vw] object-cover"
                  loading="lazy"
                  {...swipeHandlers}
                />
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (currentImageIndex - 1 + galleryImages.length) %
                        galleryImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-200 text-gray rounded-full p-2 hover:bg-pink-300"
                  aria-label="Imagen anterior" // Accesibilidad
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (currentImageIndex + 1) % galleryImages.length
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-200 text-gray rounded-full p-2 hover:bg-pink-300"
                  aria-label="Imagen siguiente" // Accesibilidad
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.servicesBannerBottom]}
        >
          {/* Aquí está el código de tu botón como 'children' */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollReveal animationClassName="fade-in-image">
              <Link
                to="/contact"
                className="px-8 py-5 bg-pink-400 text-white font-base font-cinzel rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
              >
                Agenda tu cita
              </Link>
            </ScrollReveal>
          </div>
        </PageBanner>
      </main>
      {/* Render the modal if modalContent is not null */}
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={modalContent.images}
          title={modalContent.title}
          infoContent={modalContent.infoContent}
          termsContent={modalContent.termsContent}
        />
      )}
    </div>
  );
}

export default Services;
