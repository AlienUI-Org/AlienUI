import { View, Text, Image } from "react-native";
import React from "react";

const Card2 = () => {
  return (
    <View className="mx-4 mb-4">
      <View className="w-full h-auto p-4 rounded-3xl bg-white">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Transactions</Text>
          <Text className="text-blue-700 font-semibold text-xs">See all</Text>
        </View>
        <View className="flex-row items-center justify-between border-b border-gray-100 pb-3">
          <View className="flex-row items-center gap-2">
            <View className="w-8 h-8 rounded-full bg-blue-50 flex-row justify-center items-center">
              <Image
                source={require("../../assets/icon/savings.svg")}
                className="w-4 h-4"
              />
            </View>
            <View>
              <Text className="text-base font-semibold">Donald Trump</Text>
              <Text className="text-xs text-gray-500">Received 14 Feb</Text>
            </View>
          </View>
          <View>
            <Text className="text-green-500 font-semibold">+$40,000.00</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between pt-3">
          <View className="flex-row items-center gap-2">
            <View className="w-8 h-8 rounded-full bg-blue-50 flex-row justify-center items-center">
              <Image
                source={require("../../assets/icon/dollar.svg")}
                className="w-4 h-4"
              />
            </View>
            <View>
              <Text className="text-base font-semibold">Savings </Text>
              <Text className="text-xs text-gray-500">Sent 14 Feb</Text>
            </View>
          </View>
          <View>
            <Text className="text-red-500 font-semibold">-$300.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card2;
