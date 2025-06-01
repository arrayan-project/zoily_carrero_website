/**
 * Sección de estadísticas animadas.
 * Muestra contadores animados con iconos y fondo decorativo, revelando los valores al hacer scroll.
 *
 * @component
 * @returns {JSX.Element}
 */
"use client";
import { PersonStanding, Brush, Handshake } from "../assets/icons";
import images from '../assets/images';
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useCounterAnimation } from "../hooks/useCounterAnimation";
import { STATS_SECTION_ICON_CLASS, STATS_SECTION_COUNTER_VALUE_CLASS, STATS_SECTION_LABEL_CLASS } from "../constants/styles";


// Componente de contador animado
interface CounterProps {
  value: number;
  isVisible: boolean;
}
const Counter: React.FC<CounterProps> = ({ value, isVisible }) => {
  const count = useCounterAnimation(value, isVisible, 4000);
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
      <span className={STATS_SECTION_ICON_CLASS}>{icon}</span>
      <span className={STATS_SECTION_COUNTER_VALUE_CLASS}>
        <Counter value={value} isVisible={isVisible} />
        {suffix}
      </span>
      <span className={STATS_SECTION_LABEL_CLASS}>{label}</span>
    </div>
  );
};

const StatsSection = () => {
const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });
  const bannerRef = ref;
  const isBannerVisible = isVisible;

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
          src={images.zoilyblack.avif}
          alt="Fondo de estadísticas"
          className="w-full h-full object-cover opacity-20 md:object-[50%_25%]"
          loading="lazy"
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
