import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import tw from "twrnc";

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Earth Button</Text>
      <MaterialCommunityIcons name="alien-outline" size={20} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 2,
  },
});

export const EarthButton = () => {
  return (
    <TouchableOpacity
      style={tw`bg-black border py-2 px-4 rounded-md flex items-center justify-center w-[200px]`}
    >
      <Text style={tw`text-white text-base mr-1`}>Earth Button</Text>
      <MaterialCommunityIcons name="alien-outline" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default Button;
