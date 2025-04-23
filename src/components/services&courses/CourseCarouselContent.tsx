import React from 'react';

interface CoursesContentProps {
  children: React.ReactNode;
}

const CoursesContent: React.FC<CoursesContentProps> = ({ children }) => (
  <div className="content absolute top-1/2 right-[100px] w-[300px] text-left text-[#eee] -translate-y-1/2 font-['system-ui'] hidden z-20">
    {children}
  </div>
);

export default CoursesContent;