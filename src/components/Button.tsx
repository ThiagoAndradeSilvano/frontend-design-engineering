import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed ${className || 'bg-blue-500 text-white hover:bg-blue-600'}`}
    >
      {label}
    </button>
  );
};

export default Button;