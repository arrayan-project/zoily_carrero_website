import React from 'react';
import images from '../assets/img/images';



interface PageBannerProps {
    title: string;
    imageSrcs: string[]; 
    objectPosition?: 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
    marginTop?: string;
    className?: string;
    children?: React.ReactNode; 
}

const PageBanner: React.FC<PageBannerProps> = ({ title, imageSrcs, objectPosition = 'center', children }) => {
    const bannerImageSrc = imageSrcs && imageSrcs.length > 0 ? imageSrcs[0] : null;
    return (
        <div className="relative bg-gray-100 overflow-hidden">
            <div className="relative h-full">
                <div className="absolute inset-0 h-full">
                {bannerImageSrc && (
                    <img
                        className={`h-full w-full object-cover object-${objectPosition}`}
                        src={bannerImageSrc}
                        alt="title"
                    />
                )}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-800 to-transparent opacity-60 mix-blend-overlay" aria-hidden="true" />
                </div>
                <div className={"relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8"}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat text-center mb-12 tracking-wider text-white">
                        {title}
                    </h1>
                    {children && (
                        <div className="flex justify-center"> {/* Centrar los children, puedes ajustar esto */}
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageBanner;