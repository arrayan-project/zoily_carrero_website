/*
##### Función #####
- Este componente muestra una imagen dentro de un contenedor con un estilo de transición.
- La imagen se carga en segundo plano y se muestra cuando está lista.

##### Componentes que lo utilizan #####
- ServiceSlider.tsx: Es el componente que renderiza SlideComponent
*/

import React, { memo } from 'react';

interface SlideComponentProps {
    img: string;

}

const SlideComponent: React.FC<SlideComponentProps> = memo(({ img}) => {
    return (
        <div style={{ cursor: 'pointer', overflow: 'hidden' }}>
            <img
                src={img}
                alt={`Imagen en galería`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                loading="lazy"
                role="img" // Añade role="img" para accesibilidad
                aria-label={`Imagen en galería`} // Añade aria-label para accesibilidad
            />
        </div>
    );
});

export default SlideComponent;