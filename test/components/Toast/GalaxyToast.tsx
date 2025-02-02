import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Toast = () => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={showToast}
        className="px-4 py-2 bg-black rounded-lg"
      >
        <Text className="text-white font-semibold">Click me</Text>
      </TouchableOpacity>
      {visible && (
        <View className="absolute bottom-40 w-[80%] px-4 py-2 bg-green-500 rounded-lg transition-opacity duration-300 opacity-100 flex-row justify-between items-center">
          <Text className="text-white">Operation successful</Text>
          <TouchableOpacity onPress={onClose} className="ml-2 px-2">
            <Text className="text-white text-lg font-bold">×</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Toast;
