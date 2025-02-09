import { View, Text } from "react-native";
import React from "react";

const Card3 = () => {
  return (
    <View className="flex-row justify-between px-4">
      <View className="w-[48%] h-32 bg-white p-6 rounded-3xl">
        <View className="flex-row items-center justify-center w-8 h-8 bg-[#F1F3FE] rounded-full mb-6">
          🏠{" "}
        </View>
        <Text className="font-semibold">Housing</Text>
      </View>
      <View className="w-[48%] h-32 bg-white p-6 rounded-3xl">
        <View className="flex-row items-center justify-center w-8 h-8 bg-[#F1F3FE] rounded-full mb-6">
          🥳{" "}
        </View>
        <Text className="font-semibold">Birthdays</Text>
      </View>
    </View>
  );
};

export default Card3;
