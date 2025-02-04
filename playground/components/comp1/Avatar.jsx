import React from "react";
import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Avatar = () => {
  return (
    <View className="flex-row justify-between items-center mx-4">
      <View className="flex-row items-center gap-2">
        <View className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
          <Image
            source={require("../../assets/images/alien1.avif")}
            className="w-full h-full object-cover"
          />
        </View>
        <View>
          <Text className="text-xs text-gray-700">Good morning</Text>
          <Text className="font-semibold text-base">
            Zyphorax{" "}
            <MaterialCommunityIcons
              name="alien-outline"
              size={16}
              color="black"
            />
          </Text>{" "}
        </View>
      </View>
      <View className="w-10 h-10 rounded-full bg-white">
        <Image
          source={require("../../assets/icon/bell.svg")}
          className="w-7 h-7"
        />
      </View>
    </View>
  );
};

export default Avatar;
