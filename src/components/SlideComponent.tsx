import React, { memo } from 'react';

interface SlideComponentProps {
    img: string;
    index: number;
    images: string[];
}

const SlideComponent: React.FC<SlideComponentProps> = memo(({ img, index}) => {
    return (
        <div key={index} style={{ cursor: 'pointer', overflow: 'hidden' }}>
            <img
                src={img}
                alt={`Imagen en galería ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:blur-sm"
                loading="lazy"
            />
        </div>
    );
});

export default SlideComponent;