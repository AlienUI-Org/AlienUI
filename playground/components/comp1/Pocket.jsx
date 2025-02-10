import { View, Text, Pressable } from "react-native";
import React from "react";

const Pocket = () => {
  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-4 mx-4">
        <Text className="text-lg font-semibold">My Pocket</Text>
        <Text className="text-blue-700 font-semibold text-xs">See all</Text>
      </View>
      <View className="ml-4 flex-row gap-2.5">
        <Pressable className="text-white text-xs bg-[#1237FC] w-12 px-2 py-1 rounded-full items-center justify-center">
          All
        </Pressable>
        <Pressable className="text-black text-xs bg-[#CED3F0] w-auto px-4 rounded-full items-center justify-center">
          Investment
        </Pressable>{" "}
        <Pressable className="text-black text-xs bg-[#CED3F0] w-auto px-4 rounded-full items-center justify-center">
          Savings
        </Pressable>{" "}
        <Pressable className="text-black text-xs bg-[#CED3F0] w-auto px-4 rounded-3xl items-center justify-center">
          Targets
        </Pressable>{" "}
        <Pressable className="text-black text-xs bg-[#CED3F0] w-12 px-3 rounded-2xl items-center justify-center">
          Bills
        </Pressable>{" "}
        <Pressable className="text-black text-xs bg-[#CED3F0] w-auto px-3 rounded-2xl items-center justify-center">
          Food
        </Pressable>{" "}
      </View>
    </View>
  );
};

export default Pocket;
