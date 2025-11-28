import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg",
    secondary: "bg-teal-600 hover:bg-teal-700 text-white shadow-md",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    ghost: "text-gray-600 hover:bg-gray-100"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

