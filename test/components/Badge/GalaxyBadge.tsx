import React from "react";
import { View, Text } from "react-native";

const Badge = ({
  text = "Badge",
  bgColor = "bg-black",
  textColor = "text-white",
  border = "",
  width = "w-20",
  padding = "px-2 py-1",
}) => {
  return (
    <View
      className={`rounded-full flex items-center justify-center ${bgColor} ${border} ${width} ${padding}`}
    >
      <Text className={`text-xs ${textColor}`}>{text}</Text>
    </View>
  );
};

export default Badge;
