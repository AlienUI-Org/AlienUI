import React from "react";
import { View } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View>
      <View className="h-2 w-[90%] bg-gray-300 rounded-lg overflow-hidden">
        <View className="h-full w-1/2 bg-black" />
      </View>
      <View className="flex-row justify-between mt-4">
        <View className="flex-1 items-center">
          <FontAwesome name="info-circle" size={24} color="black" />
        </View>
        <View className="flex-1 items-center">
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
        </View>
        <View className="flex-1 items-center">
          <AntDesign name="creditcard" size={24} color="#A1A1AA" />
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
