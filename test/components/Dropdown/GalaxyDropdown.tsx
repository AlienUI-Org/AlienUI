import React, { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Galaxy Dropdown", "Nebula Dropdown", "Earth Dropdown"];

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View className="w-4/5 self-center mt-12">
      <Text className="text-base text-gray-700 mb-2">Choose an option</Text>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        className={`flex-row justify-between items-center bg-white border border-gray-300 px-4 py-3 ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <Text className="text-base text-gray-700">
          {selectedOption || "Select an option"}
        </Text>
        <Text className="text-base text-gray-700">{isOpen ? "▲" : "▼"}</Text>
      </Pressable>
      {isOpen && (
        <View className="bg-white border border-gray-300 rounded-b-lg mt-2 max-h-40">
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleOptionClick(item)}
                className="px-4 py-3"
              >
                <Text className="text-base text-gray-700">{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
