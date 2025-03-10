import React from "react";
import { Pressable, Text } from "react-native";

const Button = ({ type = "default", label = "Galaxy Button", onPress }) => {
  const buttonStyles = {
    default: {
      bgColor: "bg-blue-800",
      textColor: "text-white",
      border: "",
    },
    destructive: {
      bgColor: "bg-red-500",
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
    buttonStyles[type] || buttonStyles.default;

  return (
    <Pressable
      className={`py-2 px-4 rounded-md flex items-center justify-center w-52 ${bgColor} ${border}`}
      onPress={type !== "disabled" ? onPress : null}
      disabled={type === "disabled"}
    >
      <Text className={`text-base ${textColor}`}>{label}</Text>
    </Pressable>
  );
};

export default Button;
