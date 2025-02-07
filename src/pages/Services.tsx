import React from 'react';
import novia from '/src/img/boda.jpeg';
import social from '/src/img/social6.jpeg';
import m_peinado from '/src/img/social8copeinado.jpeg';
import pmadura from '/src/img/social14pielmadura.jpeg';
import glam from '/src/img/social10.jpeg';
import express from '/src/img/social3.jpeg';
import StatsSection from "../components/StatsSection";


function Services() {
  return (
    // Contenedor principal: flex-col para que el footer se posicione al final
    <div className="min-h-screen flex flex-col bg-pink-50">
      {/* Contenido principal: flex-grow hace que se expanda para ocupar el espacio disponible */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-2 py-16 md:py-52">
          <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
            NUESTROS SERVICIOS
          </h1>
          

          {/* Sección servicios de maquillaje */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 gap-y-20">
            <div className="space-y-6">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={novia}
                  alt="Maquillaje Novia"
                  className="w-full h-50 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  Reserva tu cita
                </button>
              </div>
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Maquillaje Novia</h2>
              <p className="text-gray-600 leading-relaxed">
                Each bouquet is thoughtfully designed to complement your wedding style and color palette,
                creating an unforgettable statement piece for your special day.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={social}
                  alt="Maquillaje Social"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  Reserva tu cita
                </button>
              </div>
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Maquillaje Social</h2>
              <p className="text-gray-600 leading-relaxed">
                From elegant centerpieces to dramatic installations, we transform your reception space
                into a breathtaking floral paradise.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={m_peinado}
                  alt="Maquillaje & Peinado"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  Reserva tu cita
                </button>
              </div>
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Maquillaje & Peinado</h2>
              <p className="text-gray-600 leading-relaxed">
                From elegant centerpieces to dramatic installations, we transform your reception space
                into a breathtaking floral paradise.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={pmadura}
                  alt="Maquillaje Piel Madura"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  Reserva tu cita
                </button>
              </div>
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Maquillaje Piel Madura</h2>
              <p className="text-gray-600 leading-relaxed">
                From elegant centerpieces to dramatic installations, we transform your reception space
                into a breathtaking floral paradise.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={glam}
                  alt="Maquillaje Piel Madura"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  Reserva tu cita
                </button>
              </div>
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Maquillaje Glam</h2>
              <p className="text-gray-600 leading-relaxed">
                From elegant centerpieces to dramatic installations, we transform your reception space
                into a breathtaking floral paradise.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                <img
                  src={express}
                  alt="Maquillaje Piel Madura"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  Reserva tu cita
                </button>
              </div>
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Maquillaje Express</h2>
              <p className="text-gray-600 leading-relaxed">
                From elegant centerpieces to dramatic installations, we transform your reception space
                into a breathtaking floral paradise.
              </p>
            </div>

          </div>
          {/* Fin sección servicios de maquillaje */}
            

          {/* Sección estadistica de servicios */}
          <div className="absolute left-0 w-full">
             <StatsSection />
          </div>
          {/* Fin sección estadistica de servicios */}


          {/* Sección "Nuestros servicios incluyen" */}
          <div className="text-center space-y-8 mb-24" >
            <h3 className="text-3xl font-montserrat tracking-wide text-gray-700">Nuestros Servicios Incluyen</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
              <li className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-montserrat mb-3">Asesoría para cuidado de la piel</h4>
                <p>Hidratación, limpieza y productos</p>
              </li>
              <li className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-montserrat mb-3">Ceremony Décor</h4>
                <p>Arches, aisle designs, and altar arrangements</p>
              </li>
              <li className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-montserrat mb-3">Reception Flowers</h4>
                <p>Centerpieces, cake flowers, and installations</p>
              </li>
            </ul>
          </div>
          {/* Fin sección "Nuestros servicios incluyen" */}


          {/* Sección Cursos */}
          <div className="text-center space-y-8 pt-16">
            <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
              NUESTROS CURSOS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                    alt="Curso Básico"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  >
                    Reserva tu cita
                  </button>
                </div>
                <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Curso Básico</h2>
                <p className="text-gray-600 leading-relaxed">
                  Each bouquet is thoughtfully designed to complement your wedding style and color palette,
                  creating an unforgettable statement piece for your special day.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                    alt="Curso Intermedio"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  >
                    Reserva tu cita
                  </button>
                </div>
                <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Curso Intermedio</h2>
                <p className="text-gray-600 leading-relaxed">
                  From elegant centerpieces to dramatic installations, we transform your reception space
                  into a breathtaking floral paradise.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                    alt="Curso Avanzado"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  >
                    Reserva tu cita
                  </button>
                </div>
                <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Curso Avanzado</h2>
                <p className="text-gray-600 leading-relaxed">
                  From elegant centerpieces to dramatic installations, we transform your reception space
                  into a breathtaking floral paradise.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800"
                    alt="Curso Profesional"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-200 text-gray px-6 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  >
                    Reserva tu cita
                  </button>
                </div>
                <h2 className="text-2xl font-montserrat tracking-wide text-gray-700">Curso Profesional</h2>
                <p className="text-gray-600 leading-relaxed">
                  From elegant centerpieces to dramatic installations, we transform your reception space
                  into a breathtaking floral paradise.
                </p>
              </div>
            </div>
          </div>
          {/* Fin sección Cursos */}

        </div>
      </main>

    </div>
  );
}

export default Services;
