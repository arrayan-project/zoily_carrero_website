import * as functions from "firebase-functions/v2";
import sgMail from "@sendgrid/mail";
import axios from "axios";


interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    recaptchaToken?: string;
}

export const sendContactForm = functions
  .https.onRequest(
    {
      secrets: ["SENDGRID_API_KEY", "SENDGRID_TO", "RECAPTCHA_SECRET_KEY"],

      cors: [
        "https://zoilycarrero.web.app",
        "http://localhost:5173",
        // "https://soyzoilycarrero.com" // Tu dominio futuro
      ],
    },
    async (req, res) => {
      if (req.method !== "POST") {
        console.log("Método no permitido:", req.method);
        res.status(405).send("Método no permitido");
        return;
      }

      const sendgridKey = process.env.SENDGRID_API_KEY;
      const sendgridTo = process.env.SENDGRID_TO;
      const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

      console.log("Solicitud recibida:", req.body);

      if (!sendgridKey || !sendgridTo) {
        console.error("Error: Configuración incompleta de SendGrid.");
        res.status(500).json({message: "Error interno del servidor."});
        return;
      }
      if (!recaptchaSecretKey) {
        console.error("Error:Config incompleta reCAPTCHA");
        res.status(500).json({message: "Error interno del servidor."});
        return;
      }

      sgMail.setApiKey(sendgridKey);

      const {name, email, subject, message, recaptchaToken} =
         req.body as ContactFormData;

      if (!name || !email || !subject || !message) {
        res.status(400).json({message: "Campos del formulario son requeridos"});
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(400).json(
          {message: "El formato del correo electrónico no es válido."});
        return;
      }
      if (!recaptchaToken) {
        console.log("Error: Falta el token de reCAPTCHA en la solicitud.");
        res.status(400).json(
          {message: "Error: Verificación reCAPTCHA requerida."});
        return;
      }

      try {
        const verifyUrl =
        `https://www.google.com/recaptcha/api/siteverify?secret=
        ${recaptchaSecretKey}&response=${recaptchaToken}`;

        console.log("Verificando reCAPTCHA...");
        const recaptchaResponse = await axios.post(verifyUrl);
        const recaptchaData = recaptchaResponse.data;
        console.log("Respuesta de verificación reCAPTCHA:", recaptchaData);

        if (!recaptchaData.success) {
          console.warn(
            "Verificación reCAPTCHA fallida:", recaptchaData["error-codes"]);
          res.status(400).json(
            {message: "Error:Verificación reCAPTCHA fallida intenta de nuevo"});
          return;
        }

        console.log("reCAPTCHA verificado con éxito.");
      } catch (error) {
        console.error(
          "Error durante la llamada a API de verificación reCAPTCHA:", error);
        res.status(500).json({message: "Error interno al verificar reCAPTCHA"});
        return;
      }

      const msg = {
        to: sendgridTo,
        from: {
          name: "Zoily Carrero Web",
          email: "zoilycreadoraugc@gmail.com",
        },
        replyTo: email,
        subject: `Nuevo mensaje de ${name} - ${subject}`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        html: `<p><strong>Nombre:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Asunto:</strong> ${subject}</p>
               <p><strong>Mensaje:</strong></p>
               <p>${message.replace(/\n/g, "<br>")}</p>`,
      };

      try {
        await sgMail.send(msg);
        console.log("Correo enviado exitosamente a:", msg.to);
        res.status(200).json({message: "Formulario enviado correctamente."});
      } catch (error: unknown) {
        console.error("Error enviando el correo con SendGrid:");
        if (axios.isAxiosError(error) && error.response) {
          console.error("SendGrid Error Body:", error.response.data);
        } else if (error instanceof Error) {
          console.error("Mensaje:", error.message);
        } else {
          console.error("Error desconocido:", error);
        }
        res.status(500).json({message: "Hubo un error al enviar el mensaje."});
      }
    }
  );
