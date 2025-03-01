import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Tab = () => {
  return (
    <View className="flex items-center relative">
      <View className="absolute -top-12 z-10">
        <View className="bg-black rounded-full p-4  mt-14">
          <AntDesign name="appstore1" size={24} color="white" />
        </View>
      </View>
      <View className="flex-row w-full items-center justify-around bg-zinc-900 rounded-t-3xl px-2 mt-8 relative">
        <View className="absolute -top-14 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full mt-6" />
        <TouchableOpacity className="flex items-center">
          <View className="bg-transparent p-4 flex-col justify-center items-center">
            <AntDesign name="home" size={24} color="white" />
            <Text className="text-gray-50 text-xs mt-1 text-center">Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center">
          <View className="bg-transparent p-4 flex-col justify-center items-center">
            <AntDesign name="contacts" size={24} color="gray" />
            <Text className="text-gray-400 text-xs mt-1 text-center">
              Contacts
            </Text>
          </View>
        </TouchableOpacity>
        <View className="w-16" />
        <TouchableOpacity className="flex items-center mr-4">
          <View className="bg-transparent p-4 flex-col justify-center items-center">
            <AntDesign name="shoppingcart" size={24} color="gray" />
            <Text className="text-gray-400 text-xs mt-1 text-center">Cart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center">
          <View className="bg-transparent p-4 flex-col justify-center items-center">
            <AntDesign name="barschart" size={24} color="gray" />
            <Text className="text-gray-400 text-xs mt-1 text-center">
              Chart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab;
