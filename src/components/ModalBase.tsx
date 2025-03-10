import React, { useState, useRef, useEffect } from 'react';
import SlideComponent from './SlideComponent';
import Slider from 'react-slick';
import { useTheme } from './context/useThemeHook';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[]; // Array of image URLs
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?:string; // Make it optional
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, images, title, infoContent, termsContent, description,children  }) => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('Informacion'); // Default to "Informacion"

  const modalContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            modalContentRef.current &&
            !modalContentRef.current.contains(event.target as Node)
          ) {
            onClose();
          }
        };
    
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen, onClose]);

      const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center !mt-0 !mb-0 ${
        theme === 'dark'
          ? 'bg-black bg-opacity-50 backdrop-blur-md'
          : 'bg-gray-100 bg-opacity-50 backdrop-blur-sm'
      }`}
      onClick={onClose} //se agrega aqui para que cierre el modal al hacer click afuera
    >
      <div
        className={`modal-animation relative rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto ${ //agregamos la clase aqui
          theme === 'dark'
            ? 'bg-gray-900 text-white bg-opacity-30'
            : 'bg-white text-gray-800 bg-opacity-50'
        }`}
        ref={modalContentRef}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 text-gray-500 hover:text-gray-700 ${
            theme === 'dark'
              ? 'dark:text-gray-300 dark:hover:text-gray-100'
              : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content of the modal */}
        <div className="font-cinzel">
            <h2 className="text-2xl font-bold mb-8">{title}</h2>
            {/* Render the description if it exists */}
            {description && (
                <p className="mb-4">{description}</p>
            )}
        </div>

        {/* Tab Navigation */}
        <div
            className={`flex mb-4 mt-12 w-full ${
              theme === 'dark' 
              ? 'bg-gray-400 bg-opacity-50' 
              : 'bg-gray-100 bg-opacity-50'
            }`}
          >
          <button
            className={`flex-1 px-4 py-2 text-sm font-cinzel font-semibold ${
              activeTab === 'Informacion'
                ? 'bg-white dark:bg-gray-800 text-pink-600'
                : 'text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 bg-opacity-50'
            }`}
            onClick={() => setActiveTab('Informacion')}
          >
            Información
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-cinzel font-semibold ${
              activeTab === 'Terminos'
                ? 'bg-white dark:bg-gray-800 text-pink-600'
                : 'text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 bg-opacity-50'
            }`}
            onClick={() => setActiveTab('Terminos')}
          >
            Términos
          </button>
          <button
            className={`flex-1 px-4 py-2 text-sm font-cinzel font-semibold ${
              activeTab === 'Imagenes'
                ? 'bg-white dark:bg-gray-800 text-pink-600'
                : 'text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 bg-opacity-50'
            }`}
            onClick={() => setActiveTab('Imagenes')}
          >
            Imágenes
          </button>
        </div>

        {/* Tab Content */}
       <div className="relative h-96"> {/*agregamos relative aqui */}
        {activeTab === 'Informacion' && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation"> {/* Agregamos la animacion para las pestañas y las clases*/}
            {infoContent}
          </div>
        )}
        {activeTab === 'Terminos' && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation">{/* Agregamos la animacion para las pestañas y las clases*/}
            {termsContent}
          </div>
        )}
        {activeTab === 'Imagenes' && (
          <div className="absolute top-0 left-0 w-full h-full tab-content-animation">{/* Agregamos la animacion para las pestañas y las clases*/}
            <Slider {...sliderSettings}>
              {images.map((img, index) => (
                <SlideComponent key={index} img={img}/>
              ))}
            </Slider>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
