import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Signup = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center items-center py-20 px-4 bg-white">
        <View className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-medium text-gray-700">
                FullName <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                placeholder="Enter FullName"
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700">
                Your Email <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                placeholder="name@example.com"
                keyboardType="email-address"
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700">
                Password <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                placeholder="Enter Password"
                secureTextEntry
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-gray-700">
                Confirm Password <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
              />
            </View>

            <TouchableOpacity className="bg-black py-3 rounded mt-4">
              <Text className="text-white text-center font-semibold">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <Text className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Text className="text-teal-500 font-medium">Login</Text>
          </Text>

          <Text className="mt-6 text-center text-xs text-gray-400">
            © Copyright 2025{" "}
            <Text className="font-semibold text-gray-600">AlienUI Org.</Text>{" "}
            All Rights Reserved.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
