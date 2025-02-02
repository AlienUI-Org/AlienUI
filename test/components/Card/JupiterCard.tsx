import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Card() {
  return (
    <View className="flex flex-col items-center bg-black p-7 shadow-md w-4/5 h-64">
      <MaterialIcons
        name="join-inner"
        size={56}
        color="#ffffff"
        className="mb-4"
      />
      <Text className="text-lg font-bold text-white text-center">
        Open-Source Contributions
      </Text>
      <Text className="mt-2 text-sm text-white text-center">
        Alien UI is open-source, inviting developers to collaborate and share
        components to improve mobile app design.
      </Text>
    </View>
  );
}

export default Card;
