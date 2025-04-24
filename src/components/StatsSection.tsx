// StatsSection.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { PersonStanding, Brush, Handshake } from "lucide-react";
import images from '../assets/images';

// Componente de contador animado
interface CounterProps {
  value: number;
  isVisible: boolean;
}
const Counter: React.FC<CounterProps> = ({ value, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 4000;
      const interval = Math.max(10, duration / value);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
    return;
  }, [value, isVisible]);

  return <span>{count}</span>;
};

// Componente de estadística individual
interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  index: number;
  isVisible: boolean;
}
const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  label,
  suffix,
  index,
  isVisible,
}) => {
  const classes = [
    "flex flex-col items-center fade-in-up-animation",
    index === 0 ? "ml-2 md:ml-4" : "",
    index === 2 ? "mr-2 md:mr-4" : "",
    isVisible ? "visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={{ animationDelay: `${index * 200}ms` }}>
      <span className="text-5xl">{icon}</span>
      <span className="text-4xl font-bold">
        <Counter value={value} isVisible={isVisible} />
        {suffix}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );
};

// Componente principal de estadísticas
const StatsSection = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBannerVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  const stats = [
    {
      icon: <PersonStanding size={72} />,
      value: 99,
      label: "CLIENTES SATISFECHAS",
      suffix: "%",
    },
    {
      icon: <Brush size={72} />,
      value: 60,
      label: "SERVICIOS",
      suffix: "+",
    },
    {
      icon: <Handshake size={72} />,
      value: 30,
      label: "CURSOS",
      suffix: "+",
    },
  ];

  return (
    <section
      ref={bannerRef}
      className="relative bg-rose-200 py-16 w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={images.zoilyblack}
          alt="Fondo de estadísticas"
          className="w-full h-full object-cover opacity-20 md:object-[50%_25%]"
        />
      </div>

      <div className="relative max-w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
            index={index}
            isVisible={isBannerVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
