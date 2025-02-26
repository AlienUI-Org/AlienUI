import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "disabled";
  label?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  label = "Galaxy Button",
  onPress,
}) => {
  const buttonStyles = {
    default: {
      bgColor: "bg-black",
      textColor: "text-white",
      border: "",
    },
    destructive: {
      bgColor: "bg-red-600",
      textColor: "text-white",
      border: "",
    },
    outline: {
      bgColor: "bg-transparent",
      textColor: "text-black",
      border: "border border-black",
    },
    disabled: {
      bgColor: "bg-gray-400",
      textColor: "text-gray-200",
      border: "",
    },
  };

  const { bgColor, textColor, border } =
    buttonStyles[variant] || buttonStyles.default;

  return (
    <Pressable
      className={`py-2 px-4 rounded-md flex items-center justify-center w-52 ${bgColor} ${border}`}
      onPress={variant !== "disabled" ? onPress : null}
      disabled={variant === "disabled"}
    >
      <Text className={`text-base ${textColor}`}>{label}</Text>
    </Pressable>
  );
};

export default Button;
