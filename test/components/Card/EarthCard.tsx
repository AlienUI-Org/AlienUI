import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

const Card = () => {
  return (
    <View className="rounded-lg overflow-hidden shadow-lg w-4/5">
      <ImageBackground
        source={require("../../assets/images/alien1.avif")}
        className="w-full"
        imageStyle={{ resizeMode: "cover" }}
        style={{ height: 350 }}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="p-3">
            <Text className="text-xs text-white/90">07th July 1997</Text>
            <TouchableOpacity>
              <Text className="mt-1 text-lg font-bold text-white">
                Exploring the Unknown: The Alien Encounter Chronicles
              </Text>
            </TouchableOpacity>
            <Text className="mt-2 text-sm leading-5 text-white/95">
              Deep in the vastness of space lies a story untold—of strange
              beings, otherworldly landscapes, and encounters that defy
              imagination. Discover the mysteries of alien civilizations, their
              technology, and the secrets they carry across galaxies.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
