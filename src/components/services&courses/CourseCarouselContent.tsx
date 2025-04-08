import {useState, useEffect} from 'react';

interface CourseContentProps {
  isCurrentItem: boolean;
  children: React.ReactNode;
  isMobileView: boolean;
  windowWidth: number;
}

const CourseContent = ({ isCurrentItem, children, isMobileView }: CourseContentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isCurrentItem) {
      setTimeout(() => setIsVisible(true), 500);
    } else {
      setIsVisible(false);
    }
  }, [isCurrentItem]);

  const contentMaxWidth = isMobileView ? 'max-w-[80%]' : 'max-w-[30%]';

  return (
    <div className={`carousel-content absolute top-1/2 -translate-y-1/2 right-[60px] w-auto ${contentMaxWidth} p-4 text-left text-text-color bg-transparent`}
         style={{ opacity: isVisible ? 1 : 0 }}>
      {children}
    </div>
  );
};

export default CourseContent;