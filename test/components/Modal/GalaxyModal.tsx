import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";

const GalaxyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable onPress={openModal} className="bg-black py-2 px-4 rounded-md">
        <Text className="text-white text-base">Open Modal</Text>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="w-11/12 bg-white rounded-md shadow-md p-6">
            <View className="flex-row items-center justify-between border-b pb-4">
              <Text className="text-xl font-semibold">Galaxy Modal</Text>
              <Pressable onPress={closeModal}>
                <Text className="text-gray-400 text-lg">✖</Text>
              </Pressable>
            </View>

            <View className="my-4">
              <Text className="text-gray-600 text-base">
                This is a default galaxy modal component that highlights key
                information.
              </Text>
            </View>

            <View className="flex-row justify-end border-t pt-4">
              <Pressable
                onPress={closeModal}
                className="bg-black py-2 px-4 rounded-md"
              >
                <Text className="text-white text-base">Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GalaxyModal;
