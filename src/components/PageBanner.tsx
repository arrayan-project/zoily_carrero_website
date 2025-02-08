import React from 'react';
import servicesBanner from './img/services-banner.jpg'; // Make sure path is correct
import storeBanner from './img/store-banner.jpg';     // Make sure path is correct
import galleryBanner from './img/gallery-banner.jpg';   // Make sure path is correct
import aboutUsBanner from './img/about-us-banner.jpg';  // Make sure path is correct
import contactBanner from './img/contact-banner.jpg';  // Make sure path is correct

interface PageBannerProps {
    title: string;
    imageSrc: string;
    bannerHeight?: string;
    objectFitType?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    objectPosition?: 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
    marginTop?: string;
    className?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, imageSrc, objectFitType = 'cover', objectPosition = 'center' }) => {
    return (
        <div className="relative bg-gray-100 overflow-hidden">
            <div className="relative">
                <div className="absolute inset-0">
                    <img
                        className={`h-full w-full object-cover object-${objectPosition} opacity-70`} 
                        src={imageSrc}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-800 to-transparent opacity-60 mix-blend-overlay" aria-hidden="true" />
                </div>
                <div className={"relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 ${bannerHeight}"}>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-center font-montserrat">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;