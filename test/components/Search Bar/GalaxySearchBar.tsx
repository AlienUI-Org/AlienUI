import { View, TextInput } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const SearchBar = () => {
  return (
    <View className="mx-4 my-3">
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
        <EvilIcons name="search" size={24} color="gray" />
        <TextInput 
          placeholder='Search the galaxy...' 
          className="flex-1 ml-2 text-base"
          placeholderTextColor="gray" 
        />
      </View>
    </View>
  )
}

export default SearchBar