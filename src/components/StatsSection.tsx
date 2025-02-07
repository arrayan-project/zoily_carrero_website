"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PersonStanding, Brush, Handshake } from "lucide-react";

// Componente de contador animado
const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duración del conteo en milisegundos
    const interval = Math.max(10, duration / value); // Ajusta la velocidad del conteo

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

// Componente de estadísticas
const StatsSection = () => {
  const stats = [
    { icon: <PersonStanding size={72} />, value: 99, label: "CLIENTES SATISFECHAS", suffix: "%" },
    { icon: <Brush size={72} />, value: 60, label: "SERVICIOS", suffix: "+" },
    { icon: <Handshake size={72} />, value: 30, suffix: "+" , label: "CURSOS"},
  ];

  return (
    <section className="bg-rose-200 py-16 w-full mb-24">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col items-center 
                ${index === 0 ? "ml-2 md:ml-4" : ""}
                ${index === 2 ? "mr-2 md:mr-4" : ""}`}
          >
            <span className="text-5xl">{stat.icon}</span>
            <span className="text-4xl font-bold">
              <Counter value={stat.value} />
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
