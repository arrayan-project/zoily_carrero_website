import React from 'react';

interface CoursesContentProps {
  children: React.ReactNode;
}

const CoursesContent: React.FC<CoursesContentProps> = ({ children }) => (
  <div className="content">
    {children}
  </div>
);

export default CoursesContent;