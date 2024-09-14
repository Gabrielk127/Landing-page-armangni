import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-12 bg-[#FFCA54] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#101c28] hover:border hover:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {label}
    </button>
  );
};

export default Button;
