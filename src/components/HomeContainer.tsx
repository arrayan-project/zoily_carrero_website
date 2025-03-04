import React from 'react';
    
    interface HomeContainerProps {
      children: React.ReactNode;
    }
    
    const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => {
      return (
        <div className="relative min-h-screen">
          {children}
        </div>
      );
    };
    
    export default HomeContainer;