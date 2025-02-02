import React from "react";
import { View } from "react-native";

const Spinner = () => {
  return (
    <View className="flex items-center justify-center">
      <View className="h-12 w-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
    </View>
  );
};

export default Spinner;
