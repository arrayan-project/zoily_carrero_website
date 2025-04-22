import React, { useState, useRef } from "react"; // Importa useRef
import FormInput from "./ContactUsFormInput";
// import { v4 as uuidv4 } from "uuid"; // Ya no necesitamos uuid aquí
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"; // 1. Importa ReCAPTCHA

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Interfaz extendida para incluir el posible error de reCAPTCHA
interface FormErrors extends Partial<FormData> {
  recaptcha?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({}); // Usa la interfaz extendida
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // 2. Estado para el token de reCAPTCHA
  const recaptchaRef = useRef<ReCAPTCHA>(null); // 3. Ref para el componente ReCAPTCHA


  console.log('Site Key en Prod:', import.meta.env.VITE_RECAPTCHA_SITE_KEY);
  // --- Configuración ReCAPTCHA ---
  // Accede a la variable de entorno
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  // ------------------------------

  // Añade una comprobación para asegurarte de que la clave se cargó
  if (!RECAPTCHA_SITE_KEY) {
    console.error(
      "Error: La clave del sitio de reCAPTCHA (VITE_RECAPTCHA_SITE_KEY) no está definida en el archivo .env"
    );
    // Podrías retornar un mensaje o componente de error aquí si lo prefieres
    // return <p>Error de configuración de reCAPTCHA.</p>;
  }

  const handleChange = (id: string, value: string) => {
    // Usamos el id directamente como clave (asegúrate que los IDs en FormInput sean 'name', 'email', etc.)
    const fieldName = id as keyof FormData;
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));

    // Limpia el error específico del campo cuando el usuario empieza a escribir
    if (formErrors[fieldName]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
    // Limpia el mensaje de éxito/error general si se modifica algo
    if (submitMessage) {
      setSubmitMessage("");
    }
  };

  // 5. Función que se ejecuta cuando el usuario interactúa con reCAPTCHA
  const handleRecaptchaChange = (token: string | null) => {
    console.log("reCAPTCHA token:", token);
    setRecaptchaToken(token); // Guarda el token en el estado
    // Limpia el error de reCAPTCHA si el usuario lo completa
    if (formErrors.recaptcha && token) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.recaptcha;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitMessage(""); // Limpia mensajes anteriores

    // Validación de datos (incluyendo reCAPTCHA)
    let errors: FormErrors = {}; // Usa la interfaz extendida
    if (!formData.name) errors.name = "El nombre es requerido";
    if (!formData.email) errors.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo no tiene un formato válido";
    }
    if (!formData.subject) errors.subject = "El tema es requerido";
    if (!formData.message) errors.message = "El mensaje es requerido";

    // 6. Validación del reCAPTCHA
    if (!recaptchaToken) {
      errors.recaptcha = "Por favor, verifica que no eres un robot.";
    }

    setFormErrors(errors);

    // 7. Si hay algún error (de formulario O de reCAPTCHA), no continuar
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Si no hay errores, podemos proceder a enviar y bloquear el botón
    setIsSubmitting(true);

    try {
      // 8. Incluye el token de reCAPTCHA en los datos enviados al backend
      const payload = { ...formData, recaptchaToken };
      console.log("Enviando datos: ", payload);

      const response = await axios.post(
        "https://sendcontactform-tca7mefsba-uc.a.run.app", // Tu URL de backend
        payload // Envía los datos del formulario + el token
      );

      console.log("Respuesta recibida: ", response);
      // Asume que el backend devuelve un mensaje en response.data.message o similar
      setSubmitMessage(response.data?.message || "¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Limpiar formulario
      setFormErrors({}); // Limpiar errores
      recaptchaRef.current?.reset(); // 9. Resetea el widget de reCAPTCHA
      setRecaptchaToken(null); // Limpia el token del estado
    } catch (error: any) {
      console.error("Error al enviar el formulario: ", error);
      // Intenta obtener un mensaje de error más específico del backend
      const errorMessage =
        error.response?.data?.message ||
        "Hubo un error al enviar el formulario. Intenta de nuevo.";
      setSubmitMessage(errorMessage);
      // También resetea reCAPTCHA en caso de error para permitir reintentar
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false); // Rehabilitar el botón
    }
  };

  const buttonColor = "bg-pink-600";
  return (
    // Ajusta el espaciado si es necesario, `space-y-6` podría ser mejor que `space-y-8` con el reCAPTCHA
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Usamos IDs estáticos simples. Asegúrate que sean únicos dentro del form */}
      <FormInput
        type="text"
        id="name" // ID simple
        label="Nombre"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
      />
      <FormInput
        type="email"
        id="email" // ID simple
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <FormInput
        type="text"
        id="subject" // ID simple
        label="Tema"
        value={formData.subject}
        onChange={handleChange}
        error={formErrors.subject}
      />
      <FormInput
        type="textarea"
        id="message" // ID simple
        label="Mensaje"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={formErrors.message}
      />

      {/* 10. Añade el componente ReCAPTCHA al formulario */}
      <div className="flex justify-center my-4">
        {" "}
        {/* Centrar y dar espacio */}
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY} // Tu clave del sitio
          onChange={handleRecaptchaChange} // Función para manejar el token
        />
      </div>

      {/* 11. Muestra el error específico de reCAPTCHA si existe */}
      {formErrors.recaptcha && (
        <p className="text-red-500 text-sm text-center -mt-2 mb-4">
          {formErrors.recaptcha}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        // El botón se deshabilita solo mientras isSubmitting es true
        className={`w-full px-6 py-3 ${buttonColor} text-white rounded-lg hover:bg-pink-700 transition-colors font-cinzel tracking-wider ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Enviando..." : "ENVIAR MENSAJE"}
      </button>

      {/* Mensaje de éxito o error general */}
      {submitMessage && (
        <p
          className={`text-sm text-center mt-4 ${
            submitMessage.includes("error") ? "text-red-500" : "text-green-600"
          }`}
        >
          {submitMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
