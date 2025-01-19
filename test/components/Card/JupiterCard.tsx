import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Card() {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="join-inner"
        size={56}
        color="#6B4226"
        style={styles.icon}
      />
      <Text style={styles.title}>Open-Source Contributions</Text>
      <Text style={styles.description}>
        Alien UI is open-source, inviting developers to collaborate and share
        components to improve mobile app design.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fdf8f6",
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "80%",
    height: 260,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#422a19",
    textAlign: "center",
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#4b5563",
    textAlign: "center",
  },
});

export default Card;
