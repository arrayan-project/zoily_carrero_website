// pages/FAQ.tsx
import { useTheme } from '../components/context/useThemeHook';
import Footer3 from "../components/common/Footer3";
import useWindowSize from "../hooks/useWindowSize";
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const { colors } = useTheme();
  const { isMobileView } = useWindowSize();

  return (
    <div style={{ backgroundColor: colors.background }}>

      <Helmet>
        <title>Preguntas Frecuentes (FAQ) | Zoily Carrero MakeUp</title>
        <meta
          name="description"
          content="¿Tienes dudas sobre nuestros servicios de maquillaje? Encuentra respuestas rápidas en nuestras Preguntas Frecuentes (FAQ). Reservas, pagos, servicios y más."
        />
      </Helmet>
      
      <div className="max-w-3xl mx-auto p-6 text-base">
        <h1 className="text-2xl md:text-5xl font-cinzel mb-16 mt-24 md:mt-40 text-center" style={{ color: colors.accent }}>Preguntas Frecuentes (FAQ)</h1>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Con cuánta anticipación debo reservar un servicio?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Recomendamos agendar tu servicio al menos con 2 a 4 semanas de anticipación, especialmente si se trata de fechas de alta demanda como fines de semana, feriados o temporada de matrimonios.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Puedo reagendar si tengo una emergencia?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Sí. Si cancelas con anticipación, puedes reagendar dentro de los 30 días siguientes a la fecha original. Pasado ese plazo, deberás reservar nuevamente sujeto a disponibilidad.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Qué incluye el servicio de maquillaje?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Incluye preparación básica de la piel, aplicación de base, correctores, contorno, ojos, labios y fijación del maquillaje. El servicio se adapta a tus preferencias personales o a la ocasión específica.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿El servicio incluye peinado?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Sí, ofrecemos servicios de peinado. Sin embargo, el peinado no incluye el secado. Es importante que llegues con el cabello limpio y completamente seco al natural.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Qué pasa si llego tarde a la cita?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>En pruebas y servicios en estudio se tolera un retraso máximo de 15 minutos. Pasado ese tiempo, se cancela automáticamente sin derecho a reembolso.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Cómo puedo pagar el servicio?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Se acepta pago mediante transferencia, links de pago o efectivo. Para agendar se requiere un abono. El saldo restante debe pagarse como máximo 24 horas antes del evento.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Puedo usar extensiones o pestañas lifting?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Se recomienda no tener lifting de pestañas, ya que puede interferir con la aplicación de pestañas postizas o de tipo cortina. Las extensiones deben estar en buen estado si deseas mantenerlas.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Atiendes a domicilio?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Sí, realizo servicios a domicilio. El traslado tiene un costo adicional, y se debe verificar disponibilidad antes de realizar abonos.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Cuántas personas puedes maquillar en un evento?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Además de la novia, puedo atender hasta 5 personas más. Para grupos mayores, puedes solicitar una propuesta personalizada.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-base md:text-xl text-sm font-cinzel font-semibold mt-6 mb-2" style={{ color: colors.accent }}>¿Qué debo tener en cuenta antes de mi prueba de maquillaje?</h2>
          <p className="text-sm font-cinzel" style={{ color: colors.text }}>Las pruebas se realizan en días de semana y en el estudio. Se requiere puntualidad y llegar sin maquillaje en el rostro. También es útil traer referencias visuales del estilo que buscas.</p>
        </div>      
      </div>
      {isMobileView && <Footer3 />}
    </div>
  );
};

export default FAQ;
