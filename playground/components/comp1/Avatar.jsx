import React from "react";
import { View, Text, Image } from "react-native";

const Avatar = () => {
  return (
    <View className="flex-row justify-between items-center m-4">
      <View className="flex-row items-center gap-2">
        <View className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
          <Image
            source={require("../../assets/images/anwurii.jpg")}
            className="w-[100%] h-[100%]"
            resizeMode="contain"
          />
        </View>
        <View>
          <Text className="text-xs text-gray-700">Good morning</Text>
          <Text className="font-semibold text-base">Anwuri 👋🏽</Text>{" "}
        </View>
      </View>
      <View className="w-10 h-10 rounded-full items-center justify-center bg-white">
        <Image
          source={require("../../assets/icon/bell.svg")}
          className="w-7 h-7"
        />
      </View>
    </View>
  );
};

export default Avatar;
