import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View className="my-5">
      <View className="relative w-[90%] mt-4 h-1.5 bg-gray-200 rounded-lg">
        <View className="absolute inset-0 flex flex-row justify-between -top-4">
          <View className="flex-1 items-start">
            <View className="w-9 h-9 p-2 rounded-full bg-black justify-center items-center mb-2">
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text className="text-xs font-medium text-black">Details</Text>
          </View>
          <View className="flex-1 items-center">
            <View className="w-9 h-9 p-2 rounded-full bg-black justify-center items-center mb-2">
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text className="text-xs font-medium text-black">Address</Text>
          </View>
          <View className="flex-1 items-end">
            <View className="w-9 h-9 p-2 rounded-full bg-gray-400 justify-center items-center mb-2">
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text className="text-xs font-medium text-gray-500">Payment</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
