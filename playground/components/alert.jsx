import React from "react";
import { View, Text } from "react-native";

const Alert = ({ type, title, message }) => {
  const alertStyles = {
    success: {
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      border: "border-l-4",
    },
    warning: {
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      border: "border-l-4",
    },
    failure: {
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
      border: "border-l-4",
    },
  };

  const { bgColor, borderColor, border } =
    alertStyles[type] || alertStyles.success;
  return (
    <View className={`rounded-xl ${bgColor} ${borderColor} ${border} p-4 w-64`}>
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="mt-1 text-sm">{message}</Text>
    </View>
  );
};

export default Alert;
