import React from "react";

import FormInput from "./ContactUsFormInput"; //Importamos FormInput

const ContactForm: React.FC = () => {


  return (

      <form className="space-y-8">
        <FormInput type="text" id="name" label="Nombre" /> {/* Implementando FormInput */}
        <FormInput type="text" id="email" label="Email" /> {/* Implementando FormInput */}
        <FormInput type="text" id="subject" label="Tema" /> {/* Implementando FormInput */}
        <FormInput type="textarea" id="message" label="Mensaje" rows={4} /> {/* Implementando FormInput */}

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-cinzel tracking-wider"
        >
          ENVIAR MENSAJE
        </button>
      </form>

  );
};

export default ContactForm;
