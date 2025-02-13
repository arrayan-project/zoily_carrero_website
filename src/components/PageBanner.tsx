import React from 'react';


interface PageBannerProps {
    title: string;
    imageSrc: string;
    objectFitType?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    objectPosition?: 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
    marginTop?: string;
    className?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, imageSrc, objectFitType = 'cover', objectPosition = 'center' }) => {
    return (
        <div className="relative bg-gray-100 overflow-hidden">
            <div className="relative h-full">
                <div className="absolute inset-0 h-full">
                    <img
                        className={`h-full w-full object-cover object-${objectPosition}`}
                        src={imageSrc}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-800 to-transparent opacity-60 mix-blend-overlay" aria-hidden="true" />
                </div>
                <div className={"relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8"}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat text-center mb-12 tracking-wider text-gray-400">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;