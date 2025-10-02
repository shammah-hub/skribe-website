import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "solid",
  ...props
}) => {
  return (
    <button
      className={`transition-all px-6 py-3 rounded-full font-semibold focus:outline-none
        ${
          variant === "solid"
            ? "bg-red-600 text-white hover:bg-red-700"
            : "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};