import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  children: React.ReactNode;
  handleCourseTransition: (direction: 'next' | 'prev') => void;
  windowWidth: number;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ children, handleCourseTransition, windowWidth }) => {
  const totalItems = React.Children.count(children);

    const nextSlide = () => {
        handleCourseTransition('next');
    };

    const prevSlide = () => {
        handleCourseTransition('prev');
    };

    const getContainerStyles = () => {
        const heights = {
            small: '450px',
            medium: '500px',
            large: '550px',
            xlarge: '750px',
            xxlarge: '800px',
        };

        if (windowWidth >= 2560) {
            return { height: heights.xxlarge };
        } else if (windowWidth >= 1440) {
            return { height: heights.xlarge };
        } else if (windowWidth >= 1024) {
            return { height: heights.large };
        } else if (windowWidth >= 768) {
            return { height: heights.medium };
        } else {
            return { height: heights.small };
        }
    };

    const containerStyles = getContainerStyles();

    const buttonStyle = `bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-200`;

    return (
        <div
            className="carousel-container relative w-full mx-auto"
            style={{ height: containerStyles.height }}
        >
            <div className="carousel-slide absolute w-full h-full">
                {children}
            </div>

            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-50`}>
                <button
                    onClick={prevSlide}
                    className={buttonStyle}
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className={buttonStyle}
                    aria-label="Next Slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default CarouselNavigation;