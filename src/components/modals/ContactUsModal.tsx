/**
 * Modal de contacto reutilizable.
 * Muestra un formulario de contacto dentro de un modal base y bloquea el scroll al estar abierto.
 *
 * @component
 * @param {ContactModalProps} props - Props del modal de contacto, incluyendo control de apertura y cierre.
 * @returns {JSX.Element}
 */
import React from 'react';
import { HEADING_2_CLASS } from "../../constants/styles";
import ContactForm from '../forms/ContactUsForm';
import ModalBase from '../common/ModalBase';


interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    return(
    <ModalBase isOpen={isOpen} onClose={onClose} >
        <div className="mb-8">
            <h2 className={`${HEADING_2_CLASS} mb-6`}>Contáctame</h2>
        </div>
        <ContactForm />
    </ModalBase>
  );
};
export default ContactModal;