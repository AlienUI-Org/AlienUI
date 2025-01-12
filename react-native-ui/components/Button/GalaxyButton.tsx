import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Galaxy Button</Text>
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
    marginBottom: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default Button;
