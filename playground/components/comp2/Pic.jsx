import { View, Image, Text, Pressable } from "react-native";
import React from "react";

const Pic = () => {
  return (
    <View className="items-center justify-center mt-6">
      <Image
        source={require("../../assets/images/fez13.svg")}
        className="rounded-3xl mb-4"
        resizeMode="cover"
      />
      <View className="w-[13%] h-4 p-1 rounded-full bg-[#d2f3cd] flex-row items-center justify-between mb-6">
        <View className="w-3 h-3 rounded-full bg-[#45C734]"></View>
        <View className="w-3 h-3 rounded-full bg-[#3F3F3F]"></View>
        <View className="w-3 h-3 rounded-full bg-[#3F3F3F]"></View>
      </View>
      <View className="items-center justify-center mb-6">
        <Text className="text-4xl font-semibold mb-2">Global Reach</Text>
        <Text className="text-center text-xl px-3.5">
          Access delivery services in over 200 cities worldwide, ensuring broad
          coverage for your shipping needs.
        </Text>
      </View>
      <Pressable className="bg-transparent border border-[#45C734] py-4 rounded-full flex items-center justify-center w-[90%] mb-3">
        <Text className="text-[#45C734] text-lg font-semibold">
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

export default Pic;
