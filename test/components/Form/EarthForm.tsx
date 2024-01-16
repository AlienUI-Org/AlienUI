import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const EarthForm = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center items-center py-20 px-4 bg-green-50">
        <View className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
            Earth Form
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EarthForm;
