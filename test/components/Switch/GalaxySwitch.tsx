import React, { useState } from "react";
import { Pressable, View } from "react-native";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Pressable
      onPress={() => setIsEnabled(!isEnabled)}
      className={`relative flex h-7 w-14 items-center justify-center rounded-full p-1 transition ${
        isEnabled ? "bg-black" : "bg-gray-400"
      }`}
    >
      <View
        className={`h-6 w-6 transform rounded-full bg-white transition ${
          isEnabled ? "translate-x-3" : "translate-x-0"
        }`}
      />
    </Pressable>
  );
};

export default Switch;
