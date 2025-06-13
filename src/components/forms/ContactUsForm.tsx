import React, { useState, useRef, Suspense } from "react";
import DOMPurify from "dompurify";
import FormInput from "./ContactUsFormInput";
import RevealWrapper from "../common/RevealWrapper";
import type RecaptchaType from "react-google-recaptcha";
import { LazyReCAPTCHA as RecaptchaComponent } from "../../utils/LazyReCAPTCHA";
import { CONTACT_FORM_SUBMIT_BUTTON_CLASS } from "../../constants/styles";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<RecaptchaType | null>(null);

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const loadRecaptchaScript = () => {
    if (document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]')) {
      setIsRecaptchaLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsRecaptchaLoaded(true);
    document.body.appendChild(script);
  };

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormErrors((prev) => ({ ...prev, [id]: undefined }));
    if (!isRecaptchaLoaded) loadRecaptchaScript();
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setFormErrors((prev) => ({ ...prev, recaptcha: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const errors: FormErrors = {};
    if (!formData.name) errors.name = "El nombre es requerido";
    if (!formData.email) errors.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "El email no tiene un formato válido";
    if (!formData.subject) errors.subject = "El tema es requerido";
    if (!formData.message) errors.message = "El mensaje es requerido";
    if (!recaptchaToken)
      errors.recaptcha = "Por favor, verifica que no eres un robot.";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      subject: DOMPurify.sanitize(formData.subject),
      message: DOMPurify.sanitize(formData.message),
    };

    try {
      const response = await fetch(
        "https://sendcontactform-tca7mefsba-uc.a.run.app",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...sanitizedData, recaptchaToken }),
        }
      );
      const data = await response.json();
      setSubmitMessage(data.message || "¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      setSubmitMessage("Hubo un error al enviar el formulario.");
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RevealWrapper animationClass="fade-in-animation">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput type="text" id="name" label="Nombre" value={formData.name} onChange={handleChange} error={formErrors.name} />
        <FormInput type="email" id="email" label="Email" value={formData.email} onChange={handleChange} error={formErrors.email} />
        <FormInput type="text" id="subject" label="Tema" value={formData.subject} onChange={handleChange} error={formErrors.subject} />
        <FormInput type="textarea" id="message" label="Mensaje" rows={4} value={formData.message} onChange={handleChange} error={formErrors.message} />

        <div className="flex justify-center my-4 min-h-[78px]">
          <Suspense fallback={<div>Cargando reCAPTCHA...</div>}>
            {isRecaptchaLoaded && (
              <RecaptchaComponent ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
            )}
          </Suspense>
        </div>

        {formErrors.recaptcha && <p className="text-red-500">{formErrors.recaptcha}</p>}

        <button type="submit" disabled={isSubmitting} className={`${CONTACT_FORM_SUBMIT_BUTTON_CLASS} bg-pink-600`}>
          {isSubmitting ? "Enviando..." : "ENVIAR MENSAJE"}
        </button>

        {submitMessage && <p className="text-center">{submitMessage}</p>}
      </form>
    </RevealWrapper>
  );
};

export default ContactForm;
