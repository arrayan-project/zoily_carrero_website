import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../context/useThemeHook';
import { getTextColorClass } from '../../utils/utils';
import './ModalBase.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  infoContent: React.ReactNode;
  termsContent: React.ReactNode;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, infoContent, termsContent }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalContainerRef.current &&
        !modalContentRef.current?.contains(event.target as Node)
      ) {
        modalContainerRef.current.classList.add('closing');
        setTimeout(onClose, 300);
      }
    };

    if (isOpen) {
      modalContainerRef.current?.classList.add('open');
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={modalContainerRef}
      className={`modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center 
      ${theme === 'dark' ? 'bg-black bg-opacity-50 backdrop-blur-md' : 'bg-gray-100 bg-opacity-50 backdrop-blur-sm'}`}
      aria-hidden={!isOpen} // aria-hidden solo cuando el modal está cerrado
    >
      {isOpen && (
        <div
          ref={modalContentRef}
          className={`modal-content relative rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 mb-4 ${theme === "dark" ? 'bg-gray-900 text-white bg-opacity-30' : 'bg-white text-gray-800 bg-opacity-50'}`}
        >
          <button
            className={`close-button ${theme === "dark" ? "text-white" : "text-gray-600"}`}
            onClick={() => {
              modalContainerRef.current?.classList.add('closing');
              setTimeout(onClose, 300);
            }}
          >
            <X className="h-6 w-6 fill-current" />
          </button>
          <div className="mb-8">
            <h2 className={`text-2xl font-cinzel tracking-wide ${getTextColorClass(theme)} mb-6`}>{title}</h2>
          </div>
          {infoContent}
          {termsContent}
        </div>
      )}
    </div>
  );
};

export default Modal;
