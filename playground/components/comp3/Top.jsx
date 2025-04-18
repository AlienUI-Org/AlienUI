import { View, Text, Image } from "react-native";

const Top = () => {
  return (
    <View className="flex-col items-center justify-center">
      <Image
        source={require("../../assets/images/phone.svg")}
        className="rounded-3xl mt-16 w-40 -z-10"
      />
      <View className="bg-black shadow-xl  h-[200px] w-full -mt-52 pt-4">
        <Text className="text-gray-200 font-semibold text-2xl text-center mb-6">
          Keep Track of Your Crypto Assets
        </Text>
        <Text className="text-gray-300 text-center text-base mb-6">
          Stay updated with your portfolio
        </Text>
        <View className="flex-row justify-center items-center gap-1">
          <View className="w-5 h-2 rounded-xl bg-blue-800"></View>
          <View className="w-3 h-2 rounded-xl bg-gray-400"></View>
          <View className="w-3 h-2 rounded-xl bg-gray-400"></View>
        </View>
      </View>
    </View>
  );
};

export default Top;
