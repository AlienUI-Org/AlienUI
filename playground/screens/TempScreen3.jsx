import { View, Text } from "react-native";
import Button from "../components/comp3/Button";
import Top from "../components/comp3/Top";

const TempScreen3 = () => {
  return (
    <View className="">
      <View className="flex-col items-center">
        <Top />
        <View className="-mt-8 w-full items-center">
          <Button label="Get Started" />
        </View>
        <Text className="text-gray-300 mt-24 text-center text-base">
          Already have an account?
          <Text className="text-blue-800 ml-1">Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default TempScreen3;
