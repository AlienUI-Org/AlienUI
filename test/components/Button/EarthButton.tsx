import React from "react";
import { Pressable, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ButtonVariant = "default" | "destructive" | "outline" | "disabled";

interface ButtonProps {
  label?: string;
  variant?: ButtonVariant;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label = "Earth Button",
  variant = "default",
  icon = "alien-outline",
  iconColor,
  onPress,
}) => {
  const buttonStyles = {
    default: {
      bgColor: "bg-black",
      textColor: "text-white",
      border: "border border-black",
      iconColor: "white",
    },
    destructive: {
      bgColor: "bg-red-600",
      textColor: "text-white",
      border: "border border-red-700",
      iconColor: "white",
    },
    outline: {
      bgColor: "bg-transparent",
      textColor: "text-black",
      border: "border border-black",
      iconColor: "black",
    },
    disabled: {
      bgColor: "bg-gray-400",
      textColor: "text-gray-200",
      border: "border border-gray-500",
      iconColor: "gray",
    },
  };

  const {
    bgColor,
    textColor,
    border,
    iconColor: defaultIconColor,
  } = buttonStyles[variant] || buttonStyles.default;

  return (
    <Pressable
      className={`py-2 px-4 rounded-md flex flex-row items-center justify-center w-52 ${bgColor} ${border}`}
      onPress={variant !== "disabled" ? onPress : undefined}
      disabled={variant === "disabled"}
    >
      <Text className={`text-base mr-1 ${textColor}`}>{label}</Text>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={iconColor || defaultIconColor}
        />
      )}
    </Pressable>
  );
};

export default Button;
