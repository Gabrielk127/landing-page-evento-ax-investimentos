import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  className?: string; // Nova prop para customizar estilos
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-center justify-center bg-custom-background-button text-black font-bold rounded-md p-2 hover:border hover:border-white
      lg:text-base
      ${className}`} // Permite passar estilos personalizados
    >
      {label}
    </button>
  );
};

export default Button;
