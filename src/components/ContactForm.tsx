import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import "./ContactForm.css";
import { useTheme } from "../components/context/useTheme";

const ContactForm: React.FC = () => {
  const { theme } = useTheme();

  return (
    <form className="space-y-8">
      <div>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el label "Nombre" */}
          <label
            htmlFor="name"
            className={`block text-sm font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2`}
          >
            Nombre
          </label>
        </ScrollReveal>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el input "Nombre" */}
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                              ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-700 text-white"
                                  : "bg-white border-gray-300 text-gray-700"
                              }
                              `}
          />
        </ScrollReveal>
      </div>
      <div>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el label "Email" */}
          <label
            htmlFor="email"
            className={`block text-sm font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2`}
          >
            Email
          </label>
        </ScrollReveal>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el input "Email" */}
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                              ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-700 text-white"
                                  : "bg-white border-gray-300 text-gray-700"
                              }
                              `}
          />
        </ScrollReveal>
      </div>
      <div>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el label "Tema" */}
          <label
            htmlFor="subject"
            className={`block text-sm font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2`}
          >
            Tema
          </label>
        </ScrollReveal>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el input "Tema" */}
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                              ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-700 text-white"
                                  : "bg-white border-gray-300 text-gray-700"
                              }
                              `}
          />
        </ScrollReveal>
      </div>
      <div>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el label "Mensaje" */}
          <label
            htmlFor="message"
            className={`block text-sm font-cinzel ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-2`}
          >
            Mensaje
          </label>
        </ScrollReveal>
        <ScrollReveal animationClassName="fade-in-text">
          {" "}
          {/* ScrollReveal para el textarea "Mensaje" */}
          <textarea
            id="message"
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200
                              ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-700 text-white"
                                  : "bg-white border-gray-300 text-gray-700"
                              }
                          `}
          ></textarea>
        </ScrollReveal>
      </div>
      <ScrollReveal animationClassName="fade-in-text">
        {" "}
        {/* ScrollReveal para el botón "ENVIAR MENSAJE" */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-cinzel tracking-wider"
        >
          ENVIAR MENSAJE
        </button>
      </ScrollReveal>
    </form>
  );
};

export default ContactForm;
