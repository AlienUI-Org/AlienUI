import React from "react";
import { View, Pressable, Text } from "react-native";

const Button = () => {
  return (
    <View className="items-center justify-center">
      <Pressable className="bg-[#45C734] py-4 rounded-full flex items-center justify-center w-[90%]">
        <Text className="text-white text-lg">Next</Text>
      </Pressable>
    </View>
  );
};

export default Button;
