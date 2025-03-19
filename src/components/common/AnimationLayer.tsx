/*
##### Función Principal #####
- Aplicar Animaciones de Scroll-Reveal: Su función principal es proporcionar una capa (un "wrapper") 
que aplica animaciones a sus componentes hijos cuando estos se hacen visibles en la pantalla 
durante el scroll.
*/

// src/components/AnimationLayer.tsx
export {};

import React, { ReactNode, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

//Creamos un type para las clases de animaciones
type AnimationClassName =
  | "fade-in-up"
  | "fade-in-text"
  | "fade-in"
  | "slide-in-left"
  | "slide-in-right";

//Usamos un type en vez de interface
type AnimationWrapperProps = {
  animationClassName: AnimationClassName; //Nombre de la clase de la animacion
  children: ReactNode; //Contenido del componente
};

//Funcion que devuelve las opciones de la animacion segun su nombre
const getAnimationOptions = (className: AnimationClassName) => {
  switch (className) {
    case "fade-in-up":
      return {
        origin: "bottom",
        distance: "60px",
        duration: 1000,
        delay: 200,
      };
    case "fade-in-text":
      return {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 200,
      };
    case "fade-in":
      return {
        origin: "center",
        distance: "0px",
        duration: 3000,
        delay: 200,
      };
    case "slide-in-left":
        return {
          origin: "left",
          distance: "60px",
          duration: 1000,
          delay: 200,
        };
    case "slide-in-right":
        return {
          origin: "right",
          distance: "60px",
          duration: 1000,
          delay: 200,
        };
    default:
      return {};
  }
};

//Componente para la animacion
const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  animationClassName,
  children,
}) => {
  //Referencia del componente
  const elementRef = useRef<HTMLDivElement>(null);

  //useEffect que controla el componente de animacion
  useEffect(() => {
    //Si existe una referencia
    if (elementRef.current) {
      //Inicializamos el componente de animaciones
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "20px",
        duration: 1000,
        delay: 200,
        reset: false,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
      });

      //Usamos el metodo reveal con las opciones segun la clase de animacion
      sr.reveal(elementRef.current, getAnimationOptions(animationClassName));

      //Limpiamos el componente al destruir el elemento
      return () => {
        sr.destroy();
      };
    }
  }, [animationClassName]);

  return <div ref={elementRef}>{children}</div>;
};

export default AnimationWrapper;
