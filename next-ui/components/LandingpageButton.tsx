import React from "react";

interface ButtonProps {
  type?: "default" | "destructive" | "outline" | "disabled";
  label?: string;
  onClick?: () => void;
  bgColor?: string; // New prop for dynamic color
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  label = "Galaxy Button",
  onClick,
  bgColor = "bg-black", // Default to black
}) => {
  const buttonStyles: Record<
    "default" | "destructive" | "outline" | "disabled",
    { textColor: string; border: string; disabled?: boolean }
  > = {
    default: {
      textColor: "text-white",
      border: "",
    },
    destructive: {
      textColor: "text-white",
      border: "",
    },
    outline: {
      textColor: "text-black",
      border: "border border-black",
    },
    disabled: {
      textColor: "text-gray-200",
      border: "",
      disabled: true,
    },
  };

  const { textColor, border, disabled } = buttonStyles[type];

  return (
    <button
      className={`py-2 px-4 rounded-md flex items-center justify-center w-[200px] ${bgColor} ${border}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <span className={`text-base ${textColor}`}>{label}</span>
    </button>
  );
};

export default Button;
