import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = () => {
  return (
    <View className="flex items-center">
      <View className="flex-row w-11/12 items-center justify-around rounded bg-black py-4">
        <View>
          <Text className="text-white">Home</Text>
        </View>
        <View>
          <Text className="text-white">Contact</Text>
        </View>
        <View>
          <Text className="text-white">Carts</Text>
        </View>
        <View>
          <Text className="text-white">Chart</Text>
        </View>
        <View>
          <Text className="text-white">Settings</Text>
        </View>
      </View>
    </View>
  );
};

export default Tab;
