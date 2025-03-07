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
            />
        </div>
    );
});

export default SlideComponent;