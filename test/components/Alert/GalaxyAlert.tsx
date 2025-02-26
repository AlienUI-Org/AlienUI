import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

interface AlertProps {
  type: "success" | "warning" | "failure";
  title: string;
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, title, message }) => {
  const alertStyles = {
    success: {
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      icon: "check-circle" as "check-circle",
      iconColor: "#16a34a",
    },
    warning: {
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      icon: "alert-triangle" as "alert-triangle",
      iconColor: "#ca8a04",
    },
    failure: {
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
      icon: "x-circle" as "x-circle",
      iconColor: "#dc2626",
    },
  };

  const { bgColor, borderColor, icon, iconColor } = alertStyles[type];

  return (
    <View className={`rounded-xl border ${borderColor} ${bgColor} p-4 w-64`}>
      <View className="flex flex-row items-start gap-4">
        <Feather name={icon} size={24} color={iconColor} />
        <View className="flex-1">
          <Text className="text-lg font-medium text-gray-900">{title}</Text>
          <Text className="mt-1 text-sm text-gray-700">{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default Alert;
