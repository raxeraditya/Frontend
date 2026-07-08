import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg transition-colors ${className || 'bg-blue-500 text-white hover:bg-blue-600'}`}
    >
      {children}
    </button>
  );
};

export default Button;