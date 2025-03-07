import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import './FloatingContactButton.css';

interface FloatingContactButtonProps {
    onClick: () => void;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onClick }) => {
  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={onClick}>
        <Mail className="button-icon" />
      </button>
    </div>
  );
};

export default FloatingContactButton;
