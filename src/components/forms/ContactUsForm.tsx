import React, { useState, useRef, lazy, Suspense } from "react";
import FormInput from "./ContactUsFormInput";

// Lazy load de reCAPTCHA
const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

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
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<any>(null);

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const handleChange = (id: string, value: string) => {
    const fieldName = id as keyof FormData;
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));

    if (formErrors[fieldName]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }

    if (submitMessage) setSubmitMessage("");
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
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
    setSubmitMessage("");

    let errors: FormErrors = {};
    if (!formData.name) errors.name = "El nombre es requerido";
    if (!formData.email) {
      errors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo no tiene un formato válido";
    }
    if (!formData.subject) errors.subject = "El tema es requerido";
    if (!formData.message) errors.message = "El mensaje es requerido";
    if (!recaptchaToken) errors.recaptcha = "Por favor, verifica que no eres un robot.";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    try {
      const payload = { ...formData, recaptchaToken };
      const response = await fetch("https://sendcontactform-tca7mefsba-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setSubmitMessage(data?.message || "¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormErrors({});
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error: any) {
      console.error("Error al enviar el formulario: ", error);
      setSubmitMessage(
        error?.response?.data?.message ||
          "Hubo un error al enviar el formulario. Intenta de nuevo."
      );
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonColor = "bg-pink-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        type="text"
        id="name"
        label="Nombre"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
      />
      <FormInput
        type="email"
        id="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <FormInput
        type="text"
        id="subject"
        label="Tema"
        value={formData.subject}
        onChange={handleChange}
        error={formErrors.subject}
      />
      <FormInput
        type="textarea"
        id="message"
        label="Mensaje"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={formErrors.message}
      />

      <div className="flex justify-center my-4">
        <Suspense fallback={<p>Cargando reCAPTCHA...</p>}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
          />
        </Suspense>
      </div>

      {formErrors.recaptcha && (
        <p className="text-red-500 text-sm text-center -mt-2 mb-4">
          {formErrors.recaptcha}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 ${buttonColor} text-white rounded-lg hover:bg-pink-700 transition-colors font-cinzel tracking-wider ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Enviando..." : "ENVIAR MENSAJE"}
      </button>

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
