// pages/Policy.tsx

import { useTheme } from '../components/context/useThemeHook';
import LazyFooter from "../components/common/LazyFooter";
import useWindowSize from "../hooks/useWindowSize";

const Policy = () => {
  const { colors } = useTheme();
  const { isMobileView } = useWindowSize();


  return (
    <div style={{ backgroundColor: colors.background }}>

      <div className="max-w-3xl mx-auto p-6 text-base">
        <h1 className="text-2xl md:text-5xl font-cinzel mb-16 mt-24 md:mt-40 text-center" style={{ color: colors.accent }}>Política de Privacidad</h1>

        <p className="mb-4 font-cinzel" style={{ color: colors.text }}>
          En nombre de <strong>SoyZoilyCarrero</strong>, valoramos y respetamos tu privacidad. Esta Política de Privacidad describe cómo
          recopilamos, utilizamos y protegemos la información personal que nos proporcionas al utilizar nuestro sitio web y
          servicios de maquillaje profesional.
        </p>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>1. Información que recopilamos</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Datos de contacto: Nombre completo, número de teléfono y correo electrónico.</li>
          <li>Datos de ubicación: Dirección para servicios a domicilio.</li>
          <li>Preferencias personales: Información sobre tus preferencias de maquillaje o detalles del evento.</li>
          <li>Datos de navegación: Información recopilada automáticamente mediante cookies y herramientas analíticas como Google Analytics, incluyendo dirección IP, tipo de dispositivo, páginas visitadas y tiempo de navegación.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>2. Uso de la información</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Prestación de servicios: Gestionar y coordinar tus reservas de maquillaje.</li>
          <li>Comunicación: Responder a tus consultas y enviarte confirmaciones o recordatorios de citas.</li>
          <li>Mejora del servicio: Analizar el comportamiento de navegación en nuestro sitio web para mejorar su funcionamiento y la experiencia del usuario.</li>
          <li>Marketing: Enviarte promociones o novedades, siempre que hayas dado tu consentimiento previo.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>3. Uso de herramientas y servicios de terceros</h2>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>
          <strong>WhatsApp:</strong> Podemos utilizar WhatsApp para comunicarnos contigo respecto a tus reservas o consultas. Al proporcionarnos tu número de teléfono, consientes que te contactemos a través de esta plataforma. Ten en cuenta que WhatsApp es un servicio de terceros con su propia política de privacidad.
        </p>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>
          <strong>Links de pago:</strong> Para facilitar el pago de nuestros servicios, podemos proporcionarte enlaces a plataformas de pago en línea. Estas plataformas son gestionadas por terceros y cuentan con sus propias políticas de privacidad y seguridad. Te recomendamos revisar dichas políticas antes de efectuar cualquier pago.
        </p>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>
          <strong>Google Analytics:</strong> Utilizamos Google Analytics para recopilar información sobre el uso de nuestro sitio web. Esta herramienta nos ayuda a entender el comportamiento de los usuarios y mejorar nuestro servicio. Google Analytics recopila datos como tu dirección IP, tipo de dispositivo, páginas visitadas y tiempo de navegación. Toda la información es anónima y se utiliza únicamente con fines estadísticos. Puedes obtener más información sobre cómo Google maneja los datos recopilados visitando su Política de Privacidad.
        </p>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>4. Compartición de la información</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Proveedores de servicios: Podemos compartir información con proveedores que nos asisten en la prestación de nuestros servicios, como plataformas de pago. Estos proveedores están obligados a proteger tu información y utilizarla únicamente para los fines especificados por nosotros.</li>
          <li>Obligaciones legales: Si una autoridad competente lo requiere, podemos divulgar información personal en cumplimiento de la ley.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>5. Seguridad de la información</h2>
        <p className="text-sm  mb-2 font-cinzel" style={{ color: colors.text }}>Implementamos medidas de seguridad adecuadas para proteger tu información personal contra accesos no autorizados, alteración, divulgación o destrucción. Sin embargo, ninguna transmisión por Internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta de la información.</p>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>6. Tus derechos</h2>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada en Chile, tienes derecho a:</p>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Acceder a tus datos personales que mantenemos.</li>
          <li>Rectificar cualquier dato inexacto o incompleto.</li>
          <li>Solicitar la eliminación de tus datos personales cuando ya no sean necesarios para los fines para los que fueron recopilados.</li>
          <li>Oponerte al tratamiento de tus datos personales para fines específicos, como marketing directo.</li>
        </ul>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }} >Para ejercer estos derechos, puedes contactarnos a través de [correo electrónico de contacto].</p>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>7. Cookies</h2>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo y nos permiten recordar tus preferencias. Puedes configurar tu navegador para rechazar las cookies o para que te avise cuando se envíen. Sin embargo, algunas funciones de nuestro sitio pueden no funcionar correctamente sin cookies.</p>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>8. Cambios en esta política</h2>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con una fecha de actualización. Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos tu información.</p>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>9. Contacto</h2>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>Si tienes preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo manejamos tu información personal, puedes contactarnos a:</p>
        <p className="text-sm mb-2 font-cinzel" style={{ color: colors.text }}>Correo electrónico: [correo electrónico de contacto]</p>
      </div>
      {isMobileView && <LazyFooter />}
    </div>
    
  );
};

export default Policy;
