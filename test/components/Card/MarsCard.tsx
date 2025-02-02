import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View className="w-full py-8 rounded-3xl border border-black items-center bg-white">
      <View className="flex-row items-center justify-between bg-black py-2 px-4 rounded-full mb-4">
        <Image
          source={require("../../assets/icon/flag.svg")}
          className="w-7 h-7"
        />
        <Text className="text-white ml-2 text-base">USD</Text>
        <MaterialIcons name="keyboard-arrow-down" size={28} color="white" />
      </View>
      <View className="flex-row items-center mb-2 space-x-2">
        <Text className="text-base">Account balance</Text>
        <Image
          source={require("../../assets/icon/eye.svg")}
          className="w-6 h-6"
        />
      </View>
      <Text className="text-5xl font-semibold mb-4">
        $150,000.<Text className="text-4xl text-gray-500">00</Text>
      </Text>
      <View className="flex-row items-center mb-4 space-x-2">
        <Image
          source={require("../../assets/icon/copy.svg")}
          className="w-6 h-6"
        />
        <Text className="text-base">0771224074</Text>
      </View>
      <View className="flex-row justify-center space-x-4">
        <TouchableOpacity className="flex-row items-center justify-center bg-black rounded-full py-3 w-40">
          <Text className="text-white text-base font-semibold mr-2">
            Deposit
          </Text>
          <Image
            source={require("../../assets/icon/import.svg")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center bg-black rounded-full py-3 w-40">
          <Text className="text-white text-base font-semibold mr-2">
            Transfer
          </Text>
          <Image
            source={require("../../assets/icon/export.svg")}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
