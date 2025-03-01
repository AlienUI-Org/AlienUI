import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="relative w-72">
      <View
        className={`
        absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20
        rounded-lg opacity-20 ${isFocused ? "scale-105 blur-md" : "scale-100"}
      `}
      />

      <View className="relative flex-row items-center">
        <TextInput
          placeholder="Enter galactic coordinates..."
          placeholderTextColor="#9ca3af"
          className={`
            flex-1 bg-black/80 text-white px-4 py-3 rounded-lg
            border border-purple-500/30
            ${isFocused ? "border-purple-500/50" : ""}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <MaterialCommunityIcons
          name="weather-hurricane"
          size={20}
          color={isFocused ? "#c084fc" : "#9ca3af"}
          style={{
            position: "absolute",
            right: 12,
          }}
        />
      </View>
    </View>
  );
};

export default Input;
