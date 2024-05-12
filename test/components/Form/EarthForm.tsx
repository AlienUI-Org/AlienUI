import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const EarthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center items-center py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
        <View className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-green-200">
          <View className="items-center mb-6">
            <View className="w-16 h-16 bg-green-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-2xl font-bold">🌍</Text>
            </View>
            <Text className="text-2xl font-bold text-center text-gray-800">
              Earth Form
            </Text>
            <Text className="text-sm text-gray-600 text-center mt-2">
              Connect with nature through our form
            </Text>
          </View>

          <View className="space-y-4">
            <View>
              <Text className="text-sm font-medium text-green-700 mb-2">
                Full Name
              </Text>
              <TextInput
                placeholder="Enter your full name"
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200"
                style={{ backgroundColor: '#f0fdf4' }}
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-green-700 mb-2">
                Email Address
              </Text>
              <TextInput
                placeholder="Enter your email"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                keyboardType="email-address"
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200"
                style={{ backgroundColor: '#f0fdf4' }}
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-green-700 mb-2">
                Password
              </Text>
              <TextInput
                placeholder="Enter your password"
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                secureTextEntry
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200"
                style={{ backgroundColor: '#f0fdf4' }}
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-green-700 mb-2">
                Confirm Password
              </Text>
              <TextInput
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChangeText={(value) => handleInputChange('confirmPassword', value)}
                secureTextEntry
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200"
                style={{ backgroundColor: '#f0fdf4' }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EarthForm;
