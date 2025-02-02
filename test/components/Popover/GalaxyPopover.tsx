import React, { useState } from "react";
import { View, Text, Pressable, TouchableWithoutFeedback } from "react-native";

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={closePopover}>
      <View className="flex-1 justify-center items-center">
        <Pressable
          className="bg-black px-4 py-2 rounded"
          onPress={togglePopover}
        >
          <Text className="text-white text-base">Toggle Popover</Text>
        </Pressable>

        {isOpen && (
          <TouchableWithoutFeedback>
            <View className="absolute w-[100%]  bottom-full mb-2 z-10 justify-center items-center">
              <View className="h-auto bg-white p-4 rounded shadow">
                <Text className="text-base">This is a Galaxy Popover</Text>
                <Text className="text-gray-500 mt-2 text-sm">
                  You can put any content here.
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Popover;
