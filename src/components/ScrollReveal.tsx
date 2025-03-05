import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode; // Permite pasar cualquier contenido JSX como hijo
    animationClassName?: string; // Prop opcional para la clase CSS de animación (por defecto 'fade-in-text')
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, animationClassName = 'fade-in-text', className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null); // Referencia al div contenedor

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []); // El array vacío asegura que se ejecute solo al montar

    return (
        <div ref={containerRef} className={`${animationClassName} ${isVisible ? 'visible' : ''} ${className || ''}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
