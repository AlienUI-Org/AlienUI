import React from "react";
import { View } from "react-native";

const ProgressBar = () => {
  return (
    <View>
      <View className="mt-4 h-2 w-[90%] rounded-full bg-gray-200 overflow-hidden">
        <View className="h-full w-2/3 rounded-full bg-black"></View>
      </View>
    </View>
  );
};

export default ProgressBar;
