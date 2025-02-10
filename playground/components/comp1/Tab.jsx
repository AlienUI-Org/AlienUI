import { View, Text, Image } from "react-native";
import React from "react";

const Tab = () => {
  return (
    <View className="w-full bg-white z-40 pt-4 pb-12 -mt-5">
      <View className="flex-row justify-between items-center px-12">
        <View className="items-center">
          <Image source={require("../../assets/icon/home.svg")} />
          <Text className="text-[#1237FC] font-bold text-center">Home</Text>
        </View>
        <View className="items-center">
          <Image source={require("../../assets/icon/pocket.svg")} />
          <Text className="text-gray-300 font-bold text-center">Pocket</Text>
        </View>{" "}
        <View className="items-center">
          <Image source={require("../../assets/icon/card.svg")} />
          <Text className="text-gray-300 font-bold text-center">Cards</Text>
        </View>{" "}
        <View className="items-center">
          <Image source={require("../../assets/icon/profile.svg")} />
          <Text className="text-gray-300 font-bold text-center">Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default Tab;
