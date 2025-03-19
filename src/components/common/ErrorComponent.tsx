// src/components/ErrorComponent.tsx
import React from 'react';

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-red-500 text-white z-50">
      <p className="text-center p-4">{message}</p>
    </div>
  );
};

export default ErrorComponent;
