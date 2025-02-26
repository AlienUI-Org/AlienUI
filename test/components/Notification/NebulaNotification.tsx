import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NebulaNotification = () => {
  return (
    <View className="w-80 bg-gradient-to-r from-purple-900 via-indigo-900 to-black p-4 rounded-lg shadow-lg border border-purple-500/20">
      <View className="flex-row items-start space-x-4">
        <View className="bg-purple-500/20 p-2 rounded-full">
          <MaterialCommunityIcons name="alien" size={24} color="#c084fc" />
        </View>

        <View className="flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-purple-300 font-semibold">
              Alien Signal Detected
            </Text>
            <Text className="text-purple-400/60 text-xs">Now</Text>
          </View>

          <Text className="mt-1 text-sm text-purple-200/80">
            Unknown transmission received from the Andromeda galaxy. Decoding
            sequence initiated.
          </Text>

          <View className="mt-3 flex-row items-center space-x-3">
            <TouchableOpacity className="px-3 py-1 bg-purple-500/20 rounded-full">
              <Text className="text-xs font-medium text-purple-200">
                Decode Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-xs font-medium text-purple-300/70">
                Dismiss
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NebulaNotification;
