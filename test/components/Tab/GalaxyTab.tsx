import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = () => {
  return (
    <View className="flex items-center">
      <View className="flex-row w-11/12 items-center justify-around rounded-full bg-black py-2">
        <View className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <AntDesign name="home" size={24} color="#000000" />
        </View>
        <View className="text-white">
          <AntDesign name="contacts" size={24} color="white" />
        </View>
        <View className="text-white">
          <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
        <View className="text-white">
          <AntDesign name="barschart" size={24} color="white" />
        </View>
        <View className="text-white">
          <AntDesign name="setting" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Tab;
