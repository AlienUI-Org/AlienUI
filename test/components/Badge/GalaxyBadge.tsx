import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GalaxyBadge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Badge</Text>
    </View>
  );
};

export default GalaxyBadge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
    width: 80,
    marginBottom: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});
