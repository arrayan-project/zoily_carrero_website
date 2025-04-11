import * as functions from "firebase-functions/v2";
import sgMail from "@sendgrid/mail";

export const sendContactForm = functions
  .https.onRequest(
    {
      secrets: ["SENDGRID_API_KEY", "SENDGRID_TO"],
    },
    async (req, res) => {
      const sendgridKey = process.env.SENDGRID_API_KEY;
      const sendgridTo = process.env.SENDGRID_TO;

      console.log("Solicitud recibida:", req.body);

      if (!sendgridKey || !sendgridTo) {
        console.error("Error: configuración incompleta de SendGrid");
        res.status(500).send("Error interno servidor:configuración incompleta");
        return;
      }

      sgMail.setApiKey(sendgridKey);

      const allowedOrigins = [
        "https://zoilycarrero.web.app",
        "http://localhost:5173",
        // "https://zoilycarrero.com" si.más.adelante.usas.dominio.propio
      ];

      const origin = req.headers.origin || "";
      if (allowedOrigins.includes(origin)) {
        res.set("Access-Control-Allow-Origin", origin);
      } else {
        console.warn("Origen no permitido:", origin);
      }

      res.set("Access-Control-Allow-Origin", "https://zoilycarrero.web.app");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");

      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }

      if (req.method !== "POST") {
        console.log("Método no permitido:", req.method);
        console.log("Request body:", req.body);
        res.status(405).send("Método no permitido");
        return;
      }

      const {name, email, subject, message} = req.body;

      if (!name || !email || !subject || !message) {
        res.status(400).send("Todos los campos son requeridos.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(400).send("El formato del correo electrónico no es válido.");
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
               <p><strong>Mensaje:</strong></p>
               <p>${message.replace(/\n/g, "<br>")}</p>`,
      };

      try {
        await sgMail.send(msg);
        console.log("Correo enviado exitosamente a:", msg.to);
        res.status(200).send("Formulario enviado correctamente.");
      } catch (error: unknown) {
        console.error("Error enviando el correo con SendGrid:");
        if (error instanceof Error) {
          console.error("Mensaje:", error.message);
        } else {
          console.error("Error desconocido:", error);
        }
        res.status(500).send("Hubo un error al enviar el mensaje.");
      }
    }
  );
