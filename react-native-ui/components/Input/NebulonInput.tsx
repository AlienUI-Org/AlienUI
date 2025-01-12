import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nebulon Input" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 10,
  },
});

export default Input;
