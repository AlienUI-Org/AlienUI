import React from "react";
import { View, Text } from "react-native";

const Badge = () => {
  return (
    <View className="bg-black px-2 py-1 rounded-full flex items-center justify-center w-20">
      <Text className="text-white text-xs">Badge</Text>
    </View>
  );
};

export default Badge;
