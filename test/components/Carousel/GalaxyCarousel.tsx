import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [1, 2, 3, 4, 5];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-4/5 h-56 justify-center items-center bg-white border border-gray-300 rounded shadow">
        <Text className="text-4xl font-bold text-gray-800">
          {slides[currentIndex]}
        </Text>
      </View>

      <View className="flex-row justify-between w-4/5 mt-4">
        <Pressable
          onPress={prevSlide}
          className="w-10 h-10 justify-center items-center bg-white border border-gray-300 rounded-full"
        >
          <AntDesign name="arrowleft" size={16} color="black" />
        </Pressable>
        <Pressable
          onPress={nextSlide}
          className="w-10 h-10 justify-center items-center bg-white border border-gray-300 rounded-full"
        >
          <AntDesign name="arrowright" size={16} color="black" />
        </Pressable>
      </View>

      <View className="flex-row mt-4 space-x-2">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-black border-black"
                : "bg-white border-gray-300"
            } border`}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
