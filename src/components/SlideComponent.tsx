import React, { memo } from 'react';

interface SlideComponentProps {
    img: string;
    openGallery: (images: string[], index: number) => void;
    index: number;
    images: string[];
}

const SlideComponent: React.FC<SlideComponentProps> = memo(({ img, openGallery, index, images }) => {
    return (
        <div key={index} onClick={() => openGallery(images, index)} style={{ cursor: 'pointer', overflow: 'hidden' }}>
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