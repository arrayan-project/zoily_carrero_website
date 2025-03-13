import React, { useEffect, useRef, useState } from 'react'; // Importamos useState
import { X } from 'lucide-react';
import ContactForm from './ContactUsForm';
import { useTheme } from './context/useThemeHook';
import './ContactUsModal.css';
import { getTextColorClass } from "../GeneralUtil"; //Importamos las funciones globales

// Type para theme
type ThemeType = 'light' | 'dark';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const modalContentRef = useRef<HTMLDivElement>(null);
    const modalContainerRef = useRef<HTMLDivElement>(null); // Ref para el contenedor del modal
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false); // Nuevo estado para controlar si el modal esta montado

    useEffect(() => {
      if (isOpen) {
          setIsMounted(true); // El modal se ha abierto y se marca como montado
      } else {
        // Cuando se cierra, se quita el estado
        modalContainerRef.current?.classList.remove('open');
        modalContainerRef.current?.classList.remove('closing');
        setIsMounted(false); // Se ha cerrado y se marca como desmontado
      }
    }, [isOpen]);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
          if (
              modalContainerRef.current &&
              !modalContentRef.current?.contains(event.target as Node)
          ) {
              modalContainerRef.current.classList.add('closing'); // Añade la clase para cerrar
              setTimeout(onClose, 300); // Espera a que termine la animación antes de cerrar
          }
      };

        if (isOpen && isMounted) { // Si se ha montado
              modalContainerRef.current?.classList.add('open');
              document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose, isMounted]);

    if (!isOpen) return null;

    return (
        <div
            ref={modalContainerRef}
            className={`modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center 
      ${theme === 'dark' ? 'bg-black bg-opacity-50 backdrop-blur-md' : 'bg-gray-100 bg-opacity-50 backdrop-blur-sm'}`}

        >
            <div
                ref={modalContentRef}
                className={`modal-content relative rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 mb-4 ${theme === "dark" ? 'bg-gray-900 text-white bg-opacity-30' : 'bg-white text-gray-800 bg-opacity-50'}`}
            >
                <button
                    className={`close-button ${theme === "dark" ? "text-white" : "text-gray-600"}`}
                    onClick={() => {
                        modalContainerRef.current?.classList.add('closing');
                        setTimeout(onClose, 300); // Espera a que termine la animación antes de cerrar
                    }}
                >
                    <X className="h-6 w-6 fill-current" />
                </button>
                <div className="mb-8">
                    <h2 className={`text-2xl font-cinzel tracking-wide ${getTextColorClass(theme)} mb-6`}>Contáctame</h2>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactModal;
