import React, { useState, useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import images from "../assets/img/images";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { useTheme } from "../components/context/useTheme";
import "../index.css"; // Importa el archivo CSS para los estilos de transición
import ScrollReveal from "../components/ScrollReveal";


function About() {
  const whyUsPoints = [
    "Experiencia comprobada en el sector",
    "Atención personalizada y dedicada",
    "Soluciones innovadoras y creativas",
    "Compromiso con la excelencia",
    "Resultados medibles y garantizados",
  ];

  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "text-white" : "text-gray-800"
      }`}
    >
      <PageBanner
        title="GUSTO EN CONOCERTE!"
        imageSrcs={[images.aboutBannerUp]}
        objectPosition="left-bottom"
      >
        {/* Aquí está el código de tu botón como 'children' */}
        <div className="flex flex-col sm:flex-row gap-4">
        <ScrollReveal animationClassName="fade-in-image">
          <Link
            to="/contact"
            className="px-8 py-5 bg-pink-400 text-white font-base rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
          >
            Agenda tu cita
          </Link>
          </ScrollReveal>
        </div>
      </PageBanner>
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-8">
          {/* Imagen a la derecha */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <ScrollReveal animationClassName="fade-in-image">
              {" "}
              {/* Envolvemos la imagen con ScrollReveal */}
              <img
                src={images.zoilyblack}
                alt="Equipo trabajando"
                className={`rounded-lg shadow-xl object-cover aspect-[3/4] w-full`}
              />
            </ScrollReveal>
          </div>

          {/* Contenido principal */}
          <div className="lg:w-3/5 lg:ml-32">
            <div className="pt-12">
              <div className="max-w-lg">
                <ScrollReveal animationClassName="fade-in-text">
                  <h2
                    className={`text-2xl md:text-5xl font-montserrat font-light text-center mb-12 tracking-wider ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    ACERCA DE MI
                  </h2>
                </ScrollReveal>
                <div className="prose prose-lg">
                  <ScrollReveal animationClassName="fade-in-text">
                    <p
                      className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Hola, soy Zoily! licenciada en ciencias fiscales, y
                      creadora de contenido especializada en maquillaje,
                      estilismo e imagen personal. Mi trayectoria comenzó en el
                      mundo de la danza y el modelaje, donde descubrí mi pasión
                      por el cuidado personal y la belleza.
                    </p>
                    <p
                      className={`mt-4 leading-relaxed text-sm font-light md:text-base md:font-normal ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Desde 2020, me dedico a enseñar a otras mujeres sobre el
                      cuidado de la piel, maquillaje y el cabello, compartiendo
                      mis conocimientos en redes sociales. He tenido el
                      privilegio de colaborar con diversas marcas del sector, y
                      estoy comprometida en aportar valor genuino a cada
                      proyecto.
                    </p>
                  </ScrollReveal>
                </div>
              </div>

              {/* Por qué nosotros - Reposicionado */}
              <div className="mt-24 lg:mt-32">
                <div className="space-y-4 space-x-6">
                  <ScrollReveal animationClassName="fade-in-text">
                    <h3
                      className={`ml-20 text-2xl font-base mb-12 ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      ¿Por qué Mis Servicios?
                    </h3>
                  </ScrollReveal>

                  <ScrollReveal animationClassName="fade-in-text">
                    <ul className={`space-y-4`}>
                      {whyUsPoints.map((point, index) => (
                        <li key={index} className="flex items-center space-x-6">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 " />
                          <span
                            className={`leading-relaxed text-sm font-light md:text-base md:font-normal ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tres imágenes inferiores */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Imagen 1 */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <ScrollReveal animationClassName="fade-in-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Equipo colaborando"
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300`}
                />
              </ScrollReveal>
            </div>
            {/* Imagen 2 */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <ScrollReveal animationClassName="fade-in-image">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                  alt="Reunión de equipo"
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300`}
                />
              </ScrollReveal>
            </div>
            {/* Imagen 3 */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <ScrollReveal animationClassName="fade-in-image">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800"
                  alt="Espacio de trabajo"
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300`}
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <PageBanner
        title="'Te debes este momento'"
        imageSrcs={[images.aboutBannerBottom]}
      >
        {/* Aquí está el código de tu botón como 'children' */}
        <div className="flex flex-col sm:flex-row gap-4">
        <ScrollReveal animationClassName="fade-in-image">
          <Link
            to="/contact"
            className="px-8 py-5 bg-pink-400 text-white font-base rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
          >
            Agenda tu cita
          </Link>
          </ScrollReveal>
        </div>
      </PageBanner>
    </div>
  );
}

export default About;
