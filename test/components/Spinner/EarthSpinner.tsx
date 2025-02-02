import React, { useState, useEffect } from "react";
import { View } from "react-native";

const Spinner = () => {
  const [currentColor, setCurrentColor] = useState("bg-black");

  useEffect(() => {
    const colors = [
      "bg-black",
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
    ];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex items-center justify-center">
      <View className={`w-12 h-12 ${currentColor} rounded-full animate-spin`} />
    </View>
  );
};

export default Spinner;
