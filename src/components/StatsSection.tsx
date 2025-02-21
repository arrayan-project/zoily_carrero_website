"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PersonStanding, Brush, Handshake } from "lucide-react";
import images from '../assets/img/images';

// Componente de contador animado
const Counter = ({ value, isVisible }: { value: number, isVisible: boolean }) => { // Add isVisible prop
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) { // Only start counter if banner is visible
      let start = 0;
      const duration = 4000; // Duración del conteo en milisegundos
      const interval = Math.max(10, duration / value); // Ajusta la velocidad del conteo

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
    return; // Do nothing if not visible
  }, [value, isVisible]); // Depend on isVisible

  return <span>{count}</span>;
};

// Componente de estadísticas
const StatsSection = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false); // Estado para la visibilidad del banner
  const bannerRef = useRef<HTMLElement>(null); // Crea una referencia para el banner

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsBannerVisible(true); // El banner es visible!
            observer.unobserve(entry.target); // Deja de observar una vez que es visible
          }
        });
      },
      {
        threshold: 0.1 // Cambia este valor si necesitas ajustar la sensibilidad
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current); // Comienza a observar el banner
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current); // Limpia la observación al desmontar
      }
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez

  const stats = [
    { icon: <PersonStanding size={72} />, value: 99, label: "CLIENTES SATISFECHAS", suffix: "%" },
    { icon: <Brush size={72} />, value: 60, label: "SERVICIOS", suffix: "+" },
    { icon: <Handshake size={72} />, value: 30, suffix: "+" , label: "CURSOS"},
  ];

  return (
    <section ref={bannerRef} className="relative bg-rose-200 py-16 w-full mb-24 overflow-hidden"> {/* Section relative y overflow-hidden, ADD bannerRef */}
      {/* Imagen de Fondo - Absolutamente posicionada detrás */}
      <div className="absolute inset-0"> {/* Div absoluto que cubre todo el section */}
        <img
          src={images.zoilyblack} // Usa la imagen importada
          alt="Fondo de estadísticas"
          className="w-full h-full object-cover opacity-20 md:object-[50%_25%]" // Imagen cubre y es opaca
        />
      </div>

      {/* Contenedor para las Estadísticas - Contenido en primer plano */}
      <div className="relative max-w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white"> {/* Estadísticas en posición relativa */}
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isBannerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Conditional animation
            transition={{ delay: index * 0.2, duration: 0.8,  ease: "easeOut" }} // Add duration and ease
            className={`flex flex-col items-center
                ${index === 0 ? "ml-2 md:ml-4" : ""}
                ${index === 2 ? "mr-2 md:mr-4" : ""}`}
          >
            <span className="text-5xl">{stat.icon}</span>
            <span className="text-4xl font-bold">
              <Counter value={stat.value} isVisible={isBannerVisible} /> {/* Pass isVisible to Counter */}
              {stat.suffix}
            </span>
            <span className="text-sm">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;