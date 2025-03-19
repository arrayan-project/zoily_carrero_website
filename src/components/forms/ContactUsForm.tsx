import React, { useState } from "react";
import FormInput from "./ContactUsFormInput";
import { v4 as uuidv4 } from "uuid"; // Importamos la libreria uuid

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  //Cambios en la funcion
  const handleChange = (id: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [id.split('-')[0]]: value })); //separamos el id
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validacion de datos
    let errors: Partial<FormData> = {};
    if (!formData.name) errors.name = "El nombre es requerido";
    if (!formData.email) errors.email = "El email es requerido";
    if (!formData.subject) errors.subject = "El tema es requerido";
    if (!formData.message) errors.message = "El mensaje es requerido";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Si hay errores, no se envia el formulario
    }

    setIsSubmitting(true); // Se bloquea el boton

    // Simulacion de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Formulario enviado con éxito!");
      setFormData({ name: "", email: "", subject: "", message: "" }); //reiniciamos el formulario.
      setFormErrors({}); //Limpiamos los errores.
    }, 2000);
  };

  const buttonColor = "bg-pink-600";
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormInput
        type="text"
        id={"name-" + uuidv4()} // Id dinamico
        label="Nombre"
        value={formData.name}
        onChange={handleChange} // Pasamos handleChange sin el evento
        error={formErrors.name}
      />
      <FormInput
        type="email"
        id={"email-" + uuidv4()} // Id dinamico
        label="Email"
        value={formData.email}
        onChange={handleChange} // Pasamos handleChange sin el evento
        error={formErrors.email}
      />
      <FormInput
        type="text"
        id={"subject-" + uuidv4()} // Id dinamico
        label="Tema"
        value={formData.subject}
        onChange={handleChange} // Pasamos handleChange sin el evento
        error={formErrors.subject}
      />
      <FormInput
        type="textarea"
        id={"message-" + uuidv4()} // Id dinamico
        label="Mensaje"
        rows={4}
        value={formData.message}
        onChange={handleChange} // Pasamos handleChange sin el evento
        error={formErrors.message}
      />

      {/* Botón de enviar */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 ${buttonColor} text-white rounded-lg hover:bg-pink-700 transition-colors font-cinzel tracking-wider`}
      >
        {isSubmitting ? "Enviando..." : "ENVIAR MENSAJE"}
      </button>

      {submitMessage && <p>{submitMessage}</p>}
    </form>
  );
};

export default ContactForm;
