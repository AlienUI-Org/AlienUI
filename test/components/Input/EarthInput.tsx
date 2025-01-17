import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Earth Input" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    padding: 10,
  },
});

export default Input;
