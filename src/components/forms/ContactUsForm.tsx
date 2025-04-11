import React, { useState } from "react";
import FormInput from "./ContactUsFormInput";
import { v4 as uuidv4 } from "uuid"; // Importamos la libreria uuid
import axios from "axios"; // Importamos axios para enviar la solicitud

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

  const handleChange = (id: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [id.split('-')[0]]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    // Validación de datos
    let errors: Partial<FormData> = {};
    if (!formData.name) errors.name = "El nombre es requerido";
    if (!formData.email) errors.email = "El email es requerido";
    if (!formData.subject) errors.subject = "El tema es requerido";
    if (!formData.message) errors.message = "El mensaje es requerido";
  
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo no tiene un formato válido";
    }
  
    setFormErrors(errors);
  
    if (Object.keys(errors).length > 0) {
      return; // Si hay errores, no se envía el formulario
    }
  
    setIsSubmitting(true); // Se bloquea el botón
  
    try {
      // Realizar la solicitud POST al backend de Firebase Functions
      console.log("Enviando datos: ", formData);  // Log para ver qué estamos enviando
      const response = await axios.post(
        "https://sendcontactform-tca7mefsba-uc.a.run.app", // Usa la URL de Cloud Run aquí
        formData
      );
      
      console.log("Respuesta recibida: ", response); // Log para ver la respuesta del backend
      setSubmitMessage(response.data); // Muestra el mensaje de éxito
    } catch (error) {
      console.error("Error al enviar el formulario: ", error); // Log para ver el error si ocurre
      setSubmitMessage("Hubo un error al enviar el formulario. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false); // Rehabilitar el botón
      setFormData({ name: "", email: "", subject: "", message: "" }); // Limpiar los datos del formulario
    }
  };

  const buttonColor = "bg-pink-600";
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormInput
        type="text"
        id={"name-" + uuidv4()}
        label="Nombre"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
      />
      <FormInput
        type="email"
        id={"email-" + uuidv4()}
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <FormInput
        type="text"
        id={"subject-" + uuidv4()}
        label="Tema"
        value={formData.subject}
        onChange={handleChange}
        error={formErrors.subject}
      />
      <FormInput
        type="textarea"
        id={"message-" + uuidv4()}
        label="Mensaje"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={formErrors.message}
      />
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
