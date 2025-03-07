import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatsSection from "../components/StatsSection";
import PageBanner from "../components/PageBanner";
import Modal from "../components/Modal";
import CourseModal from "../components/CourseModal";
import { Link } from "react-router-dom";
import images, {
  noviaImages,
  socialImages,
  peinadoImages,
  maduraImages,
  glamImages,
  expressImages,
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
import { MOBILE_BREAKPOINT } from "../constants";
import cbasico from "../assets/img/cursos/basico.webp";
import cintermedio from "../assets/img/cursos/intermedio.webp";
import cavanzado from "../assets/img/cursos/avanzado.webp";
import cprofesional from "../assets/img/cursos/profesional.webp";

interface CourseData {
  title: string;
  image: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
}

interface ModalContent {
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}

// Define ServicesProps interface here
interface ServicesProps {

}

function Services({ }: ServicesProps) {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // New functions to open and close the course modal
  const openCourseModal = (courseKey: string) => {
    const course = courseData[courseKey];
    if (course) {
      setSelectedCourse(courseKey);
      setIsCourseModalOpen(true);
    }
  };

  const closeCourseModal = () => {
    setIsCourseModalOpen(false);
    setSelectedCourse(null);
  };

  //Modal state for services
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null); // Use the new interface

  // Functions to open and close the service modal
  const openModal = (content: ModalContent) => {
    // Use the new interface
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Content for the "Informacion" tab of each modal
  const infoContentNovia = (
    <div className="font-cinzel">
      {noviaMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const infoContentExpress = (
    <div className="font-cinzel">
      {expressMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const infoContentGlam = (
    <div className="font-cinzel">
      {glamMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const infoContentMadura = (
    <div className="font-cinzel">
      {maduraMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const infoContentPeinado = (
    <div className="font-cinzel">
      {peinadoMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const infoContentSocial = (
    <div className="font-cinzel">
      {socialMakeupServices.items.map((item, index) => (
        <div key={index} className="mb-6">
          <h4 className="font-bold mb-4">{item.name}</h4>
          <p className="mb-2">Precio: {item.price}</p>
          <ul className="text-sm list-disc list-inside">
            {item.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // Centralized Terms and Conditions
  const termsContent = (
    <div>
      <h1 className="font-cinzel mb-8">Términos y Condiciones del Servicio</h1>

      <h2 className="font-cinzel mb-2">Reservas y Pagos</h2>
      <ul className="list-disc pl-6 font-cinzel">
        <li>Para agendar, se debe realizar un abono previo.</li>
        <li>
          Si se abona el <strong>30%</strong>, el <strong>70% restante</strong>{" "}
          debe pagarse al menos <strong>24 horas antes del evento</strong>.
        </li>
        <li>
          Si solo se paga la <strong>prueba</strong> sin reservar la fecha, no
          se garantiza disponibilidad.
        </li>
        <li>La prueba debe pagarse en su totalidad para ser agendada.</li>
        <li>
          <strong>No hay reembolsos</strong> una vez reservado el servicio.
        </li>
      </ul>

      <h2 className="font-cinzel mb-2 mt-6">Condiciones del Servicio</h2>
      <ul className="list-disc pl-6 font-cinzel">
        <li>
          <strong>Los peinados no incluyen secado</strong>. El cabello debe
          estar seco y limpio al natural.
        </li>
        <li>
          El servicio es <strong>intransferible</strong>.
        </li>
        <li>
          Se pueden atender hasta <strong>5 personas adicionales</strong> a la
          novia. Para grupos, solicitar propuesta.
        </li>
      </ul>

      <h2 className="font-cinzel mb-2 mt-6">Pruebas y Atención en Estudio</h2>
      <ul className="list-disc pl-6 font-cinzel">
        <li>
          Las pruebas se realizan <strong>solo en días de semana</strong> en mi
          estudio.
        </li>
        <li>
          Se requiere <strong>puntualidad</strong>. No se atenderá después de{" "}
          <strong>15 minutos de retraso</strong>.
        </li>
        <li>
          <strong>Evitar el uso del celular</strong> durante el servicio.
        </li>
        <li>
          Informar con anticipación si el evento se cancela. Se puede reagendar
          dentro de <strong>30 días</strong>; pasado ese plazo, no habrá nueva
          fecha.
        </li>
      </ul>

      <h2 className="font-cinzel mb-2 mt-6">Servicio a Domicilio</h2>
      <ul className="list-disc pl-6 font-cinzel">
        <li>Verificar disponibilidad antes de realizar abonos.</li>
        <li>
          El traslado tiene un costo adicional <strong>(ida y vuelta)</strong>.
        </li>
        <li>
          Se cobra un <strong>recargo de $20.000</strong> por servicio a
          domicilio.
        </li>
      </ul>

      <h2 className="font-cinzel mb-2 mt-6">Recomendaciones</h2>
      <ul className="list-disc pl-6 font-cinzel">
        <li>
          <strong>No tener lifting de pestañas</strong>, ya que interfiere con
          las pestañas de cortina.
        </li>
      </ul>

      <p className="font-cinzel mt-6">
        Estoy disponible para cualquier consulta. ¡Gracias por tu confianza! 😊
      </p>
    </div>
  );

  //Data for the courses
  const courseData: Record<string, CourseData> = {
    basico: {
      title: "Curso Básico",
      image: cbasico,
      infoContent: (
        <div className="font-cinzel">
          {basicCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
      termsContent: (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>No se requieren conocimientos previos</p>
        </div>
      ),
    },
    intermedio: {
      title: "Curso Intermedio",
      image: cintermedio,
      infoContent: (
        <div className="font-cinzel">
          {intermediateCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
      termsContent: (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>Haber realizado el curso basico</p>
        </div>
      ),
    },
    avanzado: {
      title: "Curso Avanzado",
      image: cavanzado,
      infoContent: (
        <div className="font-cinzel">
          {advancedCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
      termsContent: (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>Haber realizado el curso intermedio</p>
        </div>
      ),
    },
    profesional: {
      title: "Curso Profesional",
      image: cprofesional,
      infoContent: (
        <div className="font-cinzel">
          {professionalCourseServices.items.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold mb-2">{item.name}</h4>
              <ul className="list-disc list-inside">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
      termsContent: (
        <div>
          <h2>Materiales:</h2>
          <p>Se proveerán los materiales durante el curso</p>
          <h2>Requisitos:</h2>
          <p>Haber realizado el curso avanzado</p>
        </div>
      ),
    },
  };

  //Manejo del estado del tamaño de ventana
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobileView = windowWidth < MOBILE_BREAKPOINT;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { theme } = useTheme();

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
        </PageBanner>
        <div className="relative mb-24 md:mb-36">
          <ServicesBackgroundSVG className="absolute inset-0 w-full h-full" />
          <div className=" mx-auto px-2 py-16 md:py-32 md:px-6 lg:px-48 z-10 ">
            <ScrollReveal animationClassName="fade-in-up-animation">
              <h1
                className={`text-4xl md:text-5xl font-cinzel font-extralight text-center mb-24 md:py-10 tracking-wider ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                CONOCE LO QUE PODEMOS HACER POR TI
              </h1>
            </ScrollReveal>

            {/* Sección servicios de maquillaje */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
              {/* Item Novia)*/}
              <ServiceCarousel
                images={noviaImages}
                title="Maquillaje Novia"
                openModal={openModal}
                infoContent={infoContentNovia}
                termsContent={termsContent}
                description={noviaMakeupServices.description}
              />
              {/* Item Social*/}
              <ServiceCarousel
                images={socialImages}
                title="Maquillaje Social"
                openModal={openModal}
                infoContent={infoContentSocial}
                termsContent={termsContent}
                description={socialMakeupServices.description}
              />
              {/* Item Peinado*/}
              <ServiceCarousel
                images={peinadoImages}
                title="Maquillaje y Peinado"
                openModal={openModal}
                infoContent={infoContentPeinado}
                termsContent={termsContent}
                description={peinadoMakeupServices.description}
              />
              {/* Item Madura*/}
              <ServiceCarousel
                images={maduraImages}
                title="Maquillaje en Piel Madura"
                openModal={openModal}
                infoContent={infoContentMadura}
                termsContent={termsContent}
                description={maduraMakeupServices.description}
              />
              {/* Item Glam*/}
              <ServiceCarousel
                images={glamImages}
                title="Maquillaje Glam"
                openModal={openModal}
                infoContent={infoContentGlam}
                termsContent={termsContent}
                description={glamMakeupServices.description}
              />
              {/* Item Quinceañera*/}
              <ServiceCarousel
                images={expressImages}
                title="Maquillaje Quinceañera"
                openModal={openModal}
                infoContent={infoContentExpress}
                termsContent={termsContent}
                description={expressMakeupServices.description}
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
                <li
                  className={`p-6 shadow-sm p-2 md:p-8 ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <h4
                    className={`font-cinzel tracking-wide mb-3 text-center ${
                      theme === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Asesoría para cuidado de la piel
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base font-cinzel ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Hidratación, limpieza y productos
                  </p>
                </li>

                <li
                  className={`p-6 shadow-sm p-2 md:p-8 font-cinzel${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <h4
                    className={`tracking-wide mb-3 text-center font-cinzel ${
                      theme === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Asesoría de imagen
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base font-cinzel ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Accesorios y prendas según la ocasión
                  </p>
                </li>

                <li
                  className={`p-6 shadow-sm p-2 md:p-8 font-cinzel ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <h4
                    className={`tracking-wide mb-3 text-center font-cinzel ${
                      theme === "dark" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Regalo sorpresa
                  </h4>
                  <p
                    className={`text-xs sm:text-sm md:text-base font-cinzel ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Algo que te ayudará a recordar tu día
                  </p>
                </li>
              </ul>
            </ScrollReveal>
          </div>
          {/* Fin sección "Nuestros servicios incluyen" */}
        </div>

        {/* Sección estadistica de servicios */}
        <div className="w-full md:mb-6">
          <StatsSection />
        </div>
        {/* Fin sección estadistica de servicios */}
        <div className=" mx-auto md:px-48 px-2">
          {/* Sección Cursos */}
          <div className="text-center space-y-20 pt-16 mb-24 md:mb-48">
            <ScrollReveal animationClassName="fade-in-text">
              <h1 className="text-2xl md:text-5xl font-cinzel font-light text-center md:mb-24 md-18 tracking-wider ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
                NUESTROS CURSOS
              </h1>
            </ScrollReveal>

            <ScrollReveal animationClassName="fade-in-up-animation">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
                {/* CURSO BASICO */}
                <div className="space-y-6">
                  {/* Image with onClick */}
                  <div
                    className="w-full h-96 shadow-lg overflow-hidden relative group cursor-pointer rounded-lg"
                    onClick={() => openCourseModal("basico")}
                  >
                    <img
                      src={courseData.basico.image}
                      alt="Curso Básico"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the image's onClick
                        openCourseModal("basico");
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                    >
                      Ver detalles
                    </button>
                  </div>
                  <h2
                    onClick={() => openCourseModal("basico")}
                    className={`text-xl md:text-2xl font-cinzel tracking-wide ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } cursor-pointer`}
                  >
                    {courseData.basico.title}
                  </h2>
                </div>
                {/* CURSO INTERMEDIO */}
                <div className="space-y-6">
                  {/* Image with onClick */}
                  <div
                    className="w-full h-96 shadow-lg overflow-hidden relative group cursor-pointer rounded-md"
                    onClick={() => openCourseModal("intermedio")}
                  >
                    <img
                      src={courseData.intermedio.image}
                      alt="Curso Intermedio"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the image's onClick
                        openCourseModal("intermedio");
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                    >
                      Ver detalles
                    </button>
                  </div>
                  <h2
                    onClick={() => openCourseModal("intermedio")}
                    className={`text-xl md:text-2xl font-cinzel tracking-wide ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } cursor-pointer`}
                  >
                    {courseData.intermedio.title}
                  </h2>
                </div>
                {/* CURSO AVANZADO */}
                <div className="space-y-6">
                  {/* Image with onClick */}
                  <div
                    className="w-full h-96 shadow-lg overflow-hidden relative group cursor-pointer rounded-md"
                    onClick={() => openCourseModal("avanzado")}
                  >
                    <img
                      src={courseData.avanzado.image}
                      alt="Curso Avanzado"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the image's onClick
                        openCourseModal("avanzado");
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                    >
                      Ver detalles
                    </button>
                  </div>
                  <h2
                    onClick={() => openCourseModal("avanzado")}
                    className={`text-xl md:text-2xl font-cinzel tracking-wide ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } cursor-pointer`}
                  >
                    {courseData.avanzado.title}
                  </h2>
                </div>
                {/* CURSO PROFESIONAL */}
                <div className="space-y-6">
                  {/* Image with onClick */}
                  <div
                    className="w-full h-96 shadow-lg overflow-hidden relative group cursor-pointer rounded-md"
                    onClick={() => openCourseModal("profesional")}
                  >
                    <img
                      src={courseData.profesional.image}
                      alt="Curso Profesional"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the image's onClick
                        openCourseModal("profesional");
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-900 text-white text-lg md:text-base px-2 md:px-6 py-1 md:py-3 rounded opacity-0 group-hover:opacity-100 group-hover:opacity-100"
                    >
                      Ver detalles
                    </button>
                  </div>
                  <h2
                    onClick={() => openCourseModal("profesional")}
                    className={`text-xl md:text-2xl font-cinzel tracking-wide ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } cursor-pointer`}
                  >
                    {courseData.profesional.title}
                  </h2>
                </div>
              </div>
            </ScrollReveal>
            {/* Fin sección Cursos */}
          </div>
        </div>

        {/* Render the modal if modalContent is not null */}
        {selectedCourse && courseData[selectedCourse] && (
          <CourseModal
            isOpen={isCourseModalOpen}
            onClose={closeCourseModal}
            images={[courseData[selectedCourse].image]}
            title={courseData[selectedCourse].title}
            infoContent={courseData[selectedCourse].infoContent}
            termsContent={courseData[selectedCourse].termsContent}
          />
        )}

        {modalContent && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            images={modalContent.images}
            title={modalContent.title}
            infoContent={modalContent.infoContent}
            termsContent={modalContent.termsContent}
            description={modalContent.description} // Add this line
          />
          
        )}

        {!isMobileView && (
          <PageBanner
            title="'Te debes este momento'"
            imageSrcs={[images.servicesBannerBottom]}
          >
          </PageBanner>
        )}
      </main>
    </div>
  );
}

export default Services;
