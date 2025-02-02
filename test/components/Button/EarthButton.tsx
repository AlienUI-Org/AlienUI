import React from "react";
import { Pressable, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Button = () => {
  return (
    <Pressable className="bg-black border py-2 px-4 rounded-md flex flex-row items-center justify-center w-52">
      <Text className="text-white text-base mr-1">Earth Button</Text>
      <MaterialCommunityIcons name="alien-outline" size={20} color="white" />
    </Pressable>
  );
};

export default Button;
