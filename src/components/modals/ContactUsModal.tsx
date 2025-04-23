// src/components/modals/ContactUsModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import ContactForm from '../forms/ContactUsForm';
import { useTheme } from '../context/useThemeHook';
import { getTextColorClass } from "../../utils/utils";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const modalContentRef = useRef<HTMLDivElement>(null);
    const modalContainerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setIsClosing(false);
        }
    }, [isOpen]);

    const startClosing = () => {
        if (isClosing || !isOpen) return;
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                modalContentRef.current &&
                !modalContentRef.current.contains(event.target as Node)
            ) {
                startClosing();
            }
        };
        if (isOpen && isMounted) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, isMounted, startClosing]);

    if (!isOpen && !isClosing) {
         return null;
    }

    const isInteractive = isOpen && isMounted && !isClosing;

    return (
        <div
            ref={modalContainerRef}
            className={`
                fixed inset-0 w-full h-full flex justify-center items-center z-50
                transition-opacity duration-300 ease-out
                ${theme === 'dark' ? 'bg-black bg-opacity-70 backdrop-blur-sm' : 'bg-gray-400 bg-opacity-50 backdrop-blur-sm'} /* Ajustado bg-opacity */
                ${isInteractive ? 'opacity-100' : 'opacity-0'} /* Control de opacidad */
                ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'} /* Control de interacción */
            `}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalContentRef}
                className={`
                    relative rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 mb-4
                    transition-transform duration-300 ease-out
                    ${theme === "dark" ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-800'} /* Fondo translúcido */
                    ${isInteractive ? 'scale-100' : 'scale-95'} /* Control de escala */
                    ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'} /* Asegura que el contenido tampoco sea interactivo si el overlay no lo es */
                `}
            >
                <button
                    className={`
                        absolute top-3 right-3 p-1 rounded-full
                        transition-colors duration-200
                        ${theme === "dark" ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-800 hover:bg-gray-200"}
                        ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'} /* Control de interacción */
                    `}
                    onClick={startClosing}
                    aria-label="Cerrar modal"
                >
                    <X className="h-6 w-6" />
                </button>
                <div className={`mb-8 ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                    <h2 className={`text-2xl font-cinzel tracking-wide ${getTextColorClass(theme)} mb-6`}>Contáctame</h2>
                </div>
                <div className={`${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
