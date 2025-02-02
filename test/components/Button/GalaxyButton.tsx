import React from "react";
import { Pressable, Text } from "react-native";

const Button = () => {
  return (
    <Pressable className="bg-black py-2 px-4 rounded-md flex items-center justify-center w-52">
      <Text className="text-white text-base">Galaxy Button</Text>
    </Pressable>
  );
};

export default Button;
