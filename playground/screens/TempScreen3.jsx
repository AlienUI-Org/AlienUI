import { View } from "react-native";
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
        <Text className="text-gray-300 mt-16">
          Already have an account?{" "}
          <Text className="text-blue-800">Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default TempScreen3;
