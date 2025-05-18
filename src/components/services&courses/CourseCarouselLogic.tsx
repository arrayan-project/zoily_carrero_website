// src/components/services&courses/CourseCarouselLogic.tsx
import { useState, useEffect, useRef } from 'react';
import { Course } from '../../types/CourseInterfaces';

interface CourseLogicProps {
  initialCourseItems: Course[];
}

interface CourseLogicReturn {
  mainIndex: number;
  courseItems: Course[];
  handleCourseTransition: (direction: 'next' | 'prev') => void;
  isTransitioning: React.MutableRefObject<boolean>;
}

const CourseLogic = ({ initialCourseItems }: CourseLogicProps): CourseLogicReturn => {
  const [mainIndex, setMainIndex] = useState(0);
  const [courseItems, setCourseItems] = useState<Course[]>([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    setCourseItems([...initialCourseItems]);
  }, [initialCourseItems]);

  const handleCourseTransition = (direction: 'next' | 'prev') => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const newCourseItems = [...courseItems];
    let newMainIndex = mainIndex;

    if (direction === 'next') {
      const firstItem = newCourseItems.shift();
      if (firstItem) {
        newCourseItems.push(firstItem);
      }
      newMainIndex = (mainIndex + 1) % courseItems.length; // Changed here
    } else if (direction === 'prev') {
      const lastItem = newCourseItems.pop();
      if (lastItem) {
        newCourseItems.unshift(lastItem);
      }
      newMainIndex = (mainIndex - 1 + courseItems.length) % courseItems.length; // Changed here
    }

    setCourseItems(newCourseItems);
    setMainIndex(newMainIndex);

    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  };

  return { mainIndex, courseItems, handleCourseTransition, isTransitioning };
};

export default CourseLogic;