// src/components/modals/ContactUsModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import { X } from "../../assets/icons";
import ContactForm from '../forms/ContactUsForm';
import { useTheme } from '../context/useThemeHook';
import { HEADING_2_CLASS } from "../../constants/styles";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const modalContentRef = useRef<HTMLDivElement>(null);
    const modalContainerRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null); // Ref para el botón de cerrar
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(isOpen); // Para controlar la renderización y animación de salida

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true); // Renderiza inmediatamente si isOpen es true
            setIsClosing(false);
        } // No necesitamos manejar !isOpen aquí directamente para la entrada
    }, [isOpen]);
    const startClosing = () => {
        if (isClosing || !isOpen) return;
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
            setShouldRender(false); // Desmonta después de la animación
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

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                startClosing();
            }
            // --- INICIO: Lógica básica de Focus Trap ---
            if (event.key === 'Tab' && modalContentRef.current) {
                const focusableElements = modalContentRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (focusableElements.length === 0) return;

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        event.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        event.preventDefault();
                    }
                }
            }
            // --- FIN: Lógica básica de Focus Trap ---
        };

        if (isOpen && shouldRender) {
            document.addEventListener('mousedown', handleOutsideClick);
            window.addEventListener('keydown', handleKeyDown);
            // Mover foco al botón de cerrar al abrir (o al primer input)
            closeButtonRef.current?.focus();
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, shouldRender, startClosing]); // Dependencias actualizadas

    // No renderizar nada si no está abierto y la animación de cierre ha terminado
    if (!shouldRender) {
        return null;
    }

    return (
        <div
            ref={modalContainerRef}
            className={`
                fixed inset-0 w-full h-full flex justify-center items-center z-50
                transition-opacity duration-300 ease-out
                ${theme === 'dark' ? 'bg-black bg-opacity-70 backdrop-blur-sm' : 'bg-gray-400 bg-opacity-50 backdrop-blur-sm'} /* Ajustado bg-opacity */
                ${isOpen && !isClosing ? 'opacity-100' : 'opacity-0'} /* Control de opacidad basado en isOpen y isClosing */
                ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} /* Control de interacción basado en isOpen */            `}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalContentRef}
                className={`
                    relative rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 mb-4
                    transition-transform duration-300 ease-out
                    ${theme === "dark" ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-800'} /* Fondo translúcido */
                    ${isOpen && !isClosing ? 'scale-100' : 'scale-95'} /* Control de escala */
                    ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} /* Control de interacción */                `}
            >
                <button
                    ref={closeButtonRef} // Añadir ref al botón
                    className={`
                        absolute top-3 right-3 p-1 rounded-full
                        transition-colors duration-200
                        ${theme === "dark" ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-800 hover:bg-gray-200"}
                        ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} /* Control de interacción */                    `}
                    onClick={startClosing}
                    aria-label="Cerrar modal"
                    tabIndex={0} // Asegurar que sea enfocable
                >
                    <X className="h-6 w-6" />
                </button>
                <div className={`mb-8 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ color: theme === "dark" ? "white" : "black" }}> {/* Apply text color based on theme */}
                    {/* Using HEADING_2_CLASS for consistency */}
                    <h2 className={`${HEADING_2_CLASS} mb-6`}>Contáctame</h2>
                </div>
                <div className={`${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
