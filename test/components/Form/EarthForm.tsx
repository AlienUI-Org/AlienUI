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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setShowSuccess(false);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.name 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-green-300 bg-green-50'
                }`}
                accessibilityLabel="Full Name"
                accessibilityHint="Enter your complete name"
                accessibilityRole="text"
              />
              {errors.name && (
                <Text className="text-red-500 text-xs mt-1">{errors.name}</Text>
              )}
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
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.email 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-green-300 bg-green-50'
                }`}
                accessibilityLabel="Email Address"
                accessibilityHint="Enter your email address"
                accessibilityRole="text"
                autoCapitalize="none"
                autoCorrect={false}
              />
              {errors.email && (
                <Text className="text-red-500 text-xs mt-1">{errors.email}</Text>
              )}
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
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.password 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-green-300 bg-green-50'
                }`}
                accessibilityLabel="Password"
                accessibilityHint="Enter your password (minimum 6 characters)"
                accessibilityRole="text"
                autoCapitalize="none"
                autoCorrect={false}
              />
              {errors.password && (
                <Text className="text-red-500 text-xs mt-1">{errors.password}</Text>
              )}
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
                className={`w-full px-4 py-3 border rounded-lg ${
                  errors.confirmPassword 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-green-300 bg-green-50'
                }`}
                accessibilityLabel="Confirm Password"
                accessibilityHint="Re-enter your password to confirm"
                accessibilityRole="text"
                autoCapitalize="none"
                autoCorrect={false}
              />
              {errors.confirmPassword && (
                <Text className="text-red-500 text-xs mt-1">{errors.confirmPassword}</Text>
              )}
            </View>

            {showSuccess && (
              <View className="bg-green-100 border border-green-400 rounded-lg p-4 mb-4">
                <Text className="text-green-700 text-center font-medium">
                  ✅ Form submitted successfully! Thank you for connecting with nature.
                </Text>
              </View>
            )}

            <TouchableOpacity
              onPress={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg mt-6 ${
                isSubmitting 
                  ? 'bg-gray-400' 
                  : 'bg-green-600 active:bg-green-700'
              }`}
              accessibilityLabel="Submit Form"
              accessibilityHint="Submit the form to create your account"
              accessibilityRole="button"
              accessibilityState={{ disabled: isSubmitting }}
            >
              <Text className="text-white text-center font-semibold text-lg">
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EarthForm;
