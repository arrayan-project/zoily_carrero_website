import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm'; // Importa ContactForm
import { useTheme } from './context/useTheme';
import './ContactModal.css';
import { getTextColorClass} from "../util";//Importamos las funciones globales

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); // Use the useTheme hook to get the current theme


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

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center !mt-0 !mb-0 ${
        theme === 'dark'
          ? 'bg-black bg-opacity-50 backdrop-blur-md'
          : 'bg-gray-100 bg-opacity-50 backdrop-blur-sm'
      }`}
      onClick={onClose}
    >
      <div
        className={`modal-animation relative rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 mb-4 ${
          theme === "dark" 
          ? 'bg-gray-900 text-white bg-opacity-30'
          : 'bg-white text-gray-800 bg-opacity-50'
        }`}
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
      >
      <button className={`absolute top-4 right-4 hover:text-gray-800 ${
            theme === "dark" ? "text-white" : "text-gray-600"
          }`} onClick={onClose}>
        <X className="h-6 w-6 fill-current" />
        </button>
        <div className="mb-8">

        <h2 className={`text-2xl font-cinzel tracking-wide ${getTextColorClass(theme)} mb-6`}>Contáctame</h2>

        </div>
        <ContactForm /> {/* Renderiza el componente ContactForm */}
      </div>
    </div>
  );
};

export default ContactModal;
