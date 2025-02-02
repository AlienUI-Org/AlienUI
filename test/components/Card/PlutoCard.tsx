import React from "react";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Card = () => {
  return (
    <View className="flex justify-center">
      <View className="w-3/5 h-44 bg-black p-6">
        <View className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-6">
          <AntDesign name="barschart" size={24} color="#000000" />
        </View>
        <Text className="text-lg text-white font-bold">
          Bar chart showing energy usage
        </Text>
      </View>
    </View>
  );
};

export default Card;
