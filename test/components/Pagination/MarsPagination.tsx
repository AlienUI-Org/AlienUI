import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pagination = () => {
  return (
    <View className="flex-row items-center gap-3">
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <AntDesign name="left" size={10} color="black" />
      </TouchableOpacity>
      <Text className="text-xs text-gray-800">
        1<Text className="mx-0.5"> / </Text>47
      </Text>
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <AntDesign name="right" size={10} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
