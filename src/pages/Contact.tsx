import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../components/context/useTheme';
import PageBanner from "../components/PageBanner";
import images from '../assets/img/images';
import { Link, useLocation } from 'react-router-dom';

function Contact() {

  const { theme } = useTheme();

  return (
    <div className="min-h-screen ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
       <PageBanner
                title="CONVERSEMOS"
                imageSrcs={[images.contactBannerUp]}
                objectPosition="left-bottom"
                >
                    {/* Aquí está el código de tu botón como 'children' */}
                <div className="flex flex-col sm:flex-row gap-4">
                <Link
                to="/contact"
                className="px-8 py-5 bg-pink-400 text-white font-base rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
                >
                Agenda tu cita
                </Link>
            </div>
            </PageBanner> 
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-montserrat s text-center mb-12 tracking-wider ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
          CONTACTANOS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`shadow-sm p-2 md:p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl text-base md:text-2xl font-montserrat tracking-wide mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              Envíanos un mensaje
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                      ${theme === 'dark' ? 'bg-gray-700 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-700'}
                  `}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                      ${theme === 'dark' ? 'bg-gray-700 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-700'}
                  `}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2">
                  Tema
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                      ${theme === 'dark' ? 'bg-gray-700 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-700'}
                  `}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                    ${theme === 'dark' ? 'bg-gray-700 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-700'}
                `}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-montserrat tracking-wider"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-lg shadow-sm p-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
              <h2 className="text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2 mb-6">
                Información de Contacto 
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">Telefono</h3>
                    <p className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">Email</h3>
                    <p className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>info@sadiesfloral.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">Ubicación</h3>
                    <p className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>123 Floral Street<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">Horario</h3>
                    <p className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                      Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 10:00 AM - 4:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-sm p-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}">
              <h2 className="text-2xl font-montserrat tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-6">
                Síguenos
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="{` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}> hover:text-pink-600 transition-colors">Instagram</a>
                <a href="#" className="{` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}> hover:text-pink-600 transition-colors">Pinterest</a>
                <a href="#" className="{` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}> hover:text-pink-600 transition-colors">Facebook</a>
              </div>
            </div>           
          </div>         
        </div>      
      </div>
      <PageBanner
         title="'Te debes este momento'"
            imageSrcs={[images.contactBannerBottom]}
            objectPosition="bottom"
            >
      {/* Aquí está el código de tu botón como 'children' */}
        <div className="flex flex-col sm:flex-row gap-4">
             <Link
              to="/contact"
              className="px-8 py-5 bg-pink-400 text-white font-base rounded shadow hover:bg-pink-600 transition duration-200 text-center animate-color-button"
              >
               Agenda tu cita
              </Link>
              </div>
      </PageBanner> 
    </div>
  );
}

export default Contact;