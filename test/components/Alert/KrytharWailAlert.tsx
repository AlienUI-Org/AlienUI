import React from "react";
import { View, Text } from "react-native";

const Alert = () => {
  return (
    <View className="rounded-xl border-l-4 border-green-500 bg-green-50 p-4 w-64">
      <Text className="text-lg font-bold">Krythar Wail</Text>
      <Text className="mt-1 text-sm">Everything is good.</Text>
    </View>
  );
};

export default Alert;
