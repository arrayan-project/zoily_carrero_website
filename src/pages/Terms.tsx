// pages/Terms.tsx
import { useTheme } from '../components/context/useThemeHook';
import Footer3 from "../components/common/Footer3";
import useWindowSize from "../hooks/useWindowSize";
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  const { colors } = useTheme();
  const { isMobileView } = useWindowSize();

  return (
    <div style={{ backgroundColor: colors.background }}>
      <Helmet>
        <title>Términos y Condiciones | Zoily Carrero MakeUp</title>
        <meta
          name="description"
          content="Revisa los Términos y Condiciones de los servicios de maquillaje y peinado de Zoily Carrero MakeUp. Información sobre reservas, pagos y condiciones."
        />
      </Helmet>
      
      <div className="max-w-3xl mx-auto p-6 text-base">
        <h1 className="text-2xl md:text-5xl font-cinzel mb-16 mt-24 md:mt-40 text-center" style={{ color: colors.accent }}>Términos y Condiciones del Servicio</h1>
        <p className="mb-6 font-cinzel" style={{ color: colors.text }}>
          Al contratar los servicios de maquillaje y/o peinado ofrecidos por <strong>SoyZoilyCarrero</strong>, el cliente acepta los siguientes términos y condiciones. Estas condiciones están diseñadas para asegurar una atención organizada, responsable y profesional.
        </p>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>1. Reservas y Pagos</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Para agendar una fecha, es requisito realizar un abono previo.</li>
          <li>Si se realiza un abono del 30%, el 70% restante debe pagarse al menos 24 horas antes del evento. No se prestará el servicio si el monto total no ha sido cancelado dentro del plazo.</li>
          <li>Si solo se paga la prueba de maquillaje o peinado sin reservar fecha para el evento, no se garantiza la disponibilidad posterior.</li>
          <li>Las pruebas deben pagarse en su totalidad al momento de agendar.</li>
          <li>No se realizan devoluciones de dinero una vez que el servicio ha sido reservado.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>2. Condiciones del Servicio</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Los peinados no incluyen secado. El cabello debe estar seco, limpio y sin productos al momento de la atención.</li>
          <li>El servicio contratado es personal e intransferible. No se permiten reemplazos de personas sin previo aviso y confirmación.</li>
          <li>Para servicios grupales (hasta 5 personas adicionales a la novia), se debe consultar previamente para recibir una propuesta personalizada y confirmar disponibilidad.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>3. Pruebas y Atención en Estudio</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Las pruebas se realizan únicamente en días de semana y en el estudio de maquillaje.</li>
          <li>Se solicita puntualidad estricta. Si el cliente llega con más de 15 minutos de retraso, el servicio no podrá ser realizado y no se reembolsará el pago.</li>
          <li>Se recomienda no utilizar el celular durante el servicio para optimizar la atención y evitar distracciones.</li>
          <li>En caso de cancelación del evento, se debe informar con la mayor anticipación posible. La cita puede reagendarse solo una vez dentro de los siguientes 30 días. Después de ese plazo, no se otorgará una nueva fecha.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>4. Servicio a Domicilio</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Antes de realizar cualquier abono, se debe verificar la disponibilidad para atención a domicilio.</li>
          <li>El servicio a domicilio tiene un recargo fijo de $20.000 CLP, más el costo del traslado ida y vuelta, el cual será informado antes de confirmar la reserva.</li>
          <li>El lugar de atención debe contar con espacio suficiente, buena iluminación y condiciones adecuadas para prestar el servicio.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>5. Recomendaciones</h2>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>Se recomienda no tener lifting de pestañas en caso de usar pestañas de cortina, ya que pueden interferir con su correcta colocación.</li>
          <li>Para obtener el mejor resultado, seguir las recomendaciones previas al servicio que serán entregadas al momento de la confirmación de la cita.</li>
        </ul>

        <h2 className="text-base md:text-xl font-cinzel mt-6 mb-2" style={{ color: colors.accent }}>6. Contacto</h2>
        <p className="mb-2 font-cinzel" style={{ color: colors.text }}>Si tienes dudas o necesitas modificar tu reserva, puedes comunicarte a través de:</p>
        <ul className="text-sm list-disc list-inside mb-4 font-cinzel" style={{ color: colors.text }}>
          <li>📧 [Correo electrónico]</li>
          <li>📱 WhatsApp: [Número de WhatsApp]</li>
          <li>Instagram: [@usuario]</li>
        </ul>
        <p className="mb-2 font-cinzel" style={{ color: colors.text }}>Agradecemos tu confianza y compromiso con estos términos. Nuestra prioridad es brindarte una experiencia profesional, puntual y de alta calidad.</p>
      </div>
      {isMobileView && <Footer3 />}
    </div>
  );
};

export default Terms;
